<template>
  <div
    class="card-container"
    @click="$emit('click')"
    :style="{ width: width, height: height }"
  >
    <span class="card-title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardComponent",

  props: {
    title: String,
    width: String,
    height: String,
  },
};
</script>

<style scoped>
.card-container {
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #795291;
  border-radius: 8px;
}

.card-container:hover {
  cursor: pointer;
  opacity: 80%;
  transition: 0.2s;
}

.card-title {
  margin: 14px 0;
  font-weight: bold;
  font-size: 18px;
  color: white;
}
</style>