<template>
  <div class="header-container">
    <i class="material-icons icon" @click="navigateBack">arrow_back</i>
    <span class="title">
      {{ pageTitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent.vue",

  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },

  methods: {
    navigateBack() {
      if (this.$router) {
        this.$router.replace({ name: "selection" });
      }
    },
  },
};
</script>

<style scoped>
.header-container {
  margin: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title {
  padding: 0 18px;
  font-size: 48px;
}

.icon {
  margin-top: 8px;
  font-size: 36px;
}

.icon:hover {
  cursor: pointer;
  color: #7a3ba1;
}
</style>