<template>
  <ModalComponent title="Detalhes do Episódio">
    <LoadingComponent v-if="loading" :darkTheme="false"></LoadingComponent>
    <div v-else class="content">
      <div class="episode-profile">
        <img
          src="../assets/none.jpeg"
          :alt="episode.name"
          width="300px"
          height="300px"
        />
        <span class="episode-name">{{ episode.name }}</span>
        <span>{{ episode.episode }}</span>
        <span>Exibição: {{ episode.air_date }}</span>
      </div>

      <div class="characters-container">
        <span class="episode-name">Personagens que estão neste episódio: </span>
        <div class="characters-list">
          <li
            class="character"
            v-for="character in episode.characters"
            :key="character.id"
            @click="navigateTo(character.id)"
          >
            {{ character.name }}
          </li>
        </div>
      </div>
    </div>
  </ModalComponent>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
import EPISODE_DETAILS_QUERY from "../graphql/EpisodeDetailsQuery.js";
import LoadingComponent from "./LoadingComponent.vue";

export default {
  name: "EpisodeDetails",

  props: ["episodeId"],

  created() {
    this.getDetails();
  },

  data() {
    return {
      episode: {},
      loading: true,
    };
  },

  components: {
    ModalComponent,
    LoadingComponent,
  },

  methods: {
    async getDetails() {
      this.loading = true;
      const response = await this.$apollo.query({
        query: EPISODE_DETAILS_QUERY,
        variables: {
          episodeId: this.episodeId,
        },
      });

      this.episode = response.data.episode;
      this.loading = false;
    },

    navigateTo(characterId) {
      this.$router.replace({
        name: "character-details",
        params: { characterId },
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  padding: 18px;
}

.episode-profile {
  display: flex;
  flex: 15%;
  flex-direction: column;
  margin-right: 18px;
}

.episode-name {
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;
}

.characters-container {
  display: flex;
  flex: 85%;
  flex-direction: column;
}

.characters-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.character {
  margin: 8px;
  font-size: 18px;
  min-width: 48%;
}

.character:hover {
  cursor: pointer;
  color: #795291;
}
</style>