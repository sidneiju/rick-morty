<template>
  <div>
    <router-view></router-view>

    <HeaderComponent pageTitle="Episódios"></HeaderComponent>

    <div class="filter-container">
      <SearchComponent
        placeholder="Busque por um episódio..."
        @perform-search="performSearch"
      ></SearchComponent>

      <SelectBoxComponent
        :selectionData="selectionData"
        @change="changeOrder"
      ></SelectBoxComponent>
    </div>

    <div class="pagination-container">
      <PaginationComponent
        :pageSize="20"
        :dataInfo="dataInfo"
        @change-page="changePage"
      ></PaginationComponent>
    </div>

    <LoadingComponent v-if="loading" />

    <div v-else class="episodes-container" :class="{ center: noEpisodesFound }">
      <h1 v-if="noEpisodesFound">Nenhum resultado encontrado!</h1>
      <CardComponent
        v-else
        width="250px"
        height="152px"
        v-for="episode in episodes"
        :key="episode.id"
        :title="episode.name"
        @click="openEpisodeDetails(episode.id)"
      >
        {{ episode.episode }}
      </CardComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
import SelectBoxComponent from "../components/SelectBoxComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

import EPISODES_QUERY from "../graphql/EpisodesQuery.js";

export default {
  name: "EpisodesView",

  components: {
    HeaderComponent,
    SearchComponent,
    SelectBoxComponent,
    PaginationComponent,
    CardComponent,
    LoadingComponent,
  },

  created() {
    this.getEpisodes();
  },

  data: function () {
    return {
      episodes: [],
      dataInfo: {},
      filterValue: "",
      loading: true,
      selectionData: [
        { value: 1, name: "Ordenar por ID Ascendente" },
        { value: 2, name: "Ordenar por ID Descendente" },
        { value: 3, name: "Ordenar por Nome A-Z" },
        { value: 4, name: "Ordenar por Nome Z-A" },
      ],
      selectedOrder: 1,
    };
  },

  computed: {
    noEpisodesFound() {
      return this.episodes.length <= 0;
    },
  },

  methods: {
    changePage(page) {
      this.getEpisodes(page);
    },

    async performSearch(episodeName) {
      this.episodes = [];
      this.dataInfo = {};
      this.filterValue = episodeName;
      await this.getEpisodes(this.page);
    },

    async getEpisodes(page = 1) {
      this.loading = true;

      const response = await this.$apollo.query({
        query: EPISODES_QUERY,
        variables: {
          page: page,
          episodeName: this.filterValue,
        },
        errorPolicy: "all",
      });

      if (response.data.episodes) {
        this.dataInfo = response.data.episodes.info;
        this.episodes = response.data.episodes.results;
        this.changeOrder(this.selectedOrder);
      }

      this.loading = false;
    },

    openEpisodeDetails(episodeId) {
      this.$router.push({ name: "episode-details", params: { episodeId } });
    },

    changeOrder(order) {
      const episodesList = this.episodes;
      this.selectedOrder = order;

      episodesList.map((char) => {
        char.id = parseInt(char.id);
      });

      switch (this.selectedOrder) {
        case 1:
          this.episodes = episodesList.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          );
          break;
        case 2:
          this.episodes = episodesList.sort((a, b) =>
            a.id > b.id ? -1 : a.id < b.id ? 1 : 0
          );
          break;
        case 3:
          this.episodes = episodesList.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          );
          break;
        case 4:
          this.episodes = episodesList.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          );
          break;
      }
    },
  },
};
</script>

<style scoped>
.episodes-container {
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.center {
  justify-content: center;
}

.filter-container {
  display: flex;
  flex-direction: row;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
}
</style>