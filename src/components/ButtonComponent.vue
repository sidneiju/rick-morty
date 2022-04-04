<template>
  <button class="button" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",

  props: {
    disabled: Boolean,
  },
};
</script>

<style scoped>
.button {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background: #795291;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.button:hover {
  cursor: pointer;
}

.button:hover:enabled {
  opacity: 80%;
  transition: 0.2s;
}

.button:disabled {
  background: #494350;
}
</style>