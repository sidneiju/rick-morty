<template>
  <ModalComponent title="Detalhes do Personagem">
    <LoadingComponent v-if="loading" :darkTheme="false"></LoadingComponent>
    <div v-else class="content">
      <div class="character-profile">
        <img
          :src="character.image"
          :alt="character.name"
          width="300px"
          height="300px"
        />
        <span class="character-name">{{ character.name }}</span>
        <span>{{ character.species }} {{ character.gender }}</span>
        <span>Origem: {{ character.origin.name }}</span>
      </div>

      <div class="episodes-container">
        <span class="character-name"
          >Episódios em que o personagem aparece:
        </span>
        <div class="episodes-list">
          <li
            class="episode"
            v-for="episode in character.episode"
            :key="episode.id"
            @click="navigateTo(episode.id)"
          >
            {{ episode.episode }} {{ episode.name }}
          </li>
        </div>
      </div>
    </div>
  </ModalComponent>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
import CHARACTER_DETAILS_QUERY from "../graphql/CharacterDetailsQuery.js";
import LoadingComponent from "../components/LoadingComponent.vue";

export default {
  name: "CharacterDetails",

  props: ["characterId"],

  created() {
    this.getDetails();
  },

  data() {
    return {
      character: {},
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
        query: CHARACTER_DETAILS_QUERY,
        variables: {
          characterId: this.characterId,
        },
      });

      this.character = response.data.character;
      this.loading = false;
    },

    navigateTo(episodeId) {
      this.$router.replace({
        name: "episode-details",
        params: { episodeId },
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

.character-profile {
  display: flex;
  flex: 15%;
  flex-direction: column;
  margin-right: 18px;
}

.character-name {
  font-size: 24px;
  font-weight: bold;
  margin: 8px 0;
}

.episodes-container {
  display: flex;
  flex: 85%;
  flex-direction: column;
}

.episodes-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.episode {
  margin: 8px;
  font-size: 18px;
  min-width: 48%;
}

.episode:hover {
  cursor: pointer;
  color: #795291;
}
</style>