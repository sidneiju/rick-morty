<template>
  <div class="modal-background" @click.self="closeModal">
    <div class="modal-content">
      <div>
        <span class="modal-title">{{ title }}</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",

  props: {
    title: String,
    loading: Boolean,
  },

  methods: {
    closeModal() {
      if (this.$router) {
        const parentRouteName = this.$router.history.current.matched[0].name;
        this.$router.replace({ name: parentRouteName });
      }
    },
  },
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  user-select: none;
}

.modal-content {
  margin: 3% auto;
  width: 80%;
  max-height: 80%;
  max-width: 90%;
  border-radius: 8px;
  background-color: #fefefe;
  color: black;
  overflow-y: auto;
}

.modal-title {
  display: block;
  padding: 12px;
  font-size: 2em;
  background: #795291;
  color: white;
}
</style>