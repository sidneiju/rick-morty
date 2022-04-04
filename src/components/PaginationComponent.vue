<template>
  <div class="pagination-elements">
    <span class="pagination-info" v-if="dataInfo.prev || dataInfo.next"
      >Página {{ page }} de {{ totalPages }}</span
    >
    <span class="pagination-info" v-else>Página -- de --</span>
    <div class="pagination-buttons">
      <ButtonComponent
        class="previous-button"
        :disabled="page === 1 || !dataInfo.prev"
        @click="previousPage"
        >Anterior</ButtonComponent
      >
      <ButtonComponent
        :disabled="page === totalPages || !dataInfo.next"
        @click="nextPage"
        >Próxima</ButtonComponent
      >
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";

export default {
  name: "PaginationComponent",

  props: {
    pageSize: Number,
    dataInfo: Object,
  },

  components: {
    ButtonComponent,
  },

  computed: {
    totalPages() {
      return this.dataInfo ? this.dataInfo.pages : 0;
    },

    page() {
      if (this.dataInfo && this.dataInfo.prev) {
        return this.dataInfo.prev + 1;
      } else {
        return 1;
      }
    },
  },

  methods: {
    previousPage() {
      if (this.dataInfo) {
        this.$emit("change-page", this.dataInfo.prev);
      }
    },

    nextPage() {
      if (this.dataInfo) {
        this.$emit("change-page", this.dataInfo.next);
      }
    },
  },
};
</script>

<style scoped>
.pagination-elements {
  margin: 8px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: flex-end;
  justify-content: space-between;
}

.pagination-info {
  margin-bottom: 12px;
}

.pagination-buttons {
  display: flex;
  flex-direction: row;
}

.previous-button {
  margin-right: 12px;
}
</style>