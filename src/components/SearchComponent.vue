<template>
  <div class="search-box">
    <input
      class="input-box"
      type="text"
      placeholder="Busque por um personagem"
      v-model="searchTerm"
      @keypress.enter="performSearch()"
    />
    <ButtonComponent @click="performSearch">Buscar</ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";

export default {
  name: "SearchComponent",

  components: {
    ButtonComponent,
  },

  data() {
    return {
      searchTerm: "",
    };
  },

  methods: {
    performSearch() {
      this.$emit("perform-search", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.search-box {
  margin: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
}

::placeholder {
  color: #7a3ba1;
}

.input-box {
  flex: 1;
  padding: 12px;
  margin-right: 8px;
  border-radius: 8px;
  border: none;
  background: #29164e;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

input:focus {
  outline: none;
}
</style>