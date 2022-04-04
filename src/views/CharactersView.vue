<template>
  <div>
    <router-view></router-view>

    <HeaderComponent pageTitle="Personagens"></HeaderComponent>

    <div class="filter-container">
      <SearchComponent placeholder="Busque por um personagem..." @perform-search="performSearch"></SearchComponent>

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

    <div
      v-else
      class="characters-container"
      :class="{ center: noCharactersFound }"
    >
      <h1 v-if="noCharactersFound">Nenhum resultado encontrado!</h1>
      <CardComponent
        v-else
        width="250px"
        height="302px"
        v-for="character in characters"
        :key="character.id"
        :title="character.name"
        @click="openCharacterDetails(character.id)"
      >
        <img
          class="card-img"
          :src="character.image"
          :alt="character.name"
          width="250px"
          height="250px"
        />
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

import CHARACTERS_QUERY from "../graphql/CharactersQuery.js";

export default {
  name: "CharactersView",

  components: {
    HeaderComponent,
    SearchComponent,
    SelectBoxComponent,
    PaginationComponent,
    CardComponent,
    LoadingComponent,
  },

  created() {
    this.getCharacters();
  },

  data: function () {
    return {
      characters: [],
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
    noCharactersFound() {
      return this.characters.length <= 0;
    },
  },

  methods: {
    changePage(page) {
      this.getCharacters(page);
    },

    async getCharacters(page = 1) {
      this.loading = true;

      const response = await this.$apollo.query({
        query: CHARACTERS_QUERY,
        variables: {
          page: page,
          characterName: this.filterValue,
        },
        errorPolicy: "all",
      });

      if (response.data.characters) {
        this.dataInfo = response.data.characters.info;
        this.characters = response.data.characters.results;
        this.changeOrder(this.selectedOrder);
      }

      this.loading = false;
    },

    async performSearch(characterName) {
      this.characters = [];
      this.dataInfo = {};
      this.filterValue = characterName;
      await this.getCharacters(this.page);
    },

    openCharacterDetails(characterId) {
      this.$router.push({ name: "character-details", params: { characterId } });
    },

    changeOrder(order) {
      const characterList = this.characters;
      this.selectedOrder = order;

      characterList.map((char) => {
        char.id = parseInt(char.id);
      });

      switch (this.selectedOrder) {
        case 1:
          this.characters = characterList.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          );
          break;
        case 2:
          this.characters = characterList.sort((a, b) =>
            a.id > b.id ? -1 : a.id < b.id ? 1 : 0
          );
          break;
        case 3:
          this.characters = characterList.sort((a, b) =>
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0
          );
          break;
        case 4:
          this.characters = characterList.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          );
          break;
      }
    },
  },
};
</script>

<style scoped>
.characters-container {
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

.card-img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  max-width: 250px;
  max-height: 250px;
}
</style>