<template>
  <div>
    <div class="image-container">
      <img src="../assets/rickmorty.png" class="image" />
    </div>
    <div class="main-container">
      <div class="side right-side">
        <ButtonComponent @click="navigateTo('characters')">Personagens</ButtonComponent>
      </div>
      <div class="side left-side">
        <ButtonComponent @click="navigateTo('episodes')">Episódios</ButtonComponent>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "HomeView",

  components: {
    ButtonComponent,
  },

  methods: {
    navigateTo(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped>
.image-container {
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 99vw;
}

.image {
  max-width: 100vw;
  max-height: 100vh;
}

.main-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.side {
  flex: 1;
  align-self: stretch;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  padding: 64px;
}
</style>
