<template>
  <select class="select-box" v-model="selectedValue" @change="orderBy()">
    <option
      class="option-box"
      v-for="(select, index) in selectionData"
      :key="index"
      :value="select.value"
    >
      {{ select.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectBoxComponent",

  props: {
    selectionData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selectedValue: 1,
    };
  },

  methods: {
    orderBy() {
      this.$emit("change", this.selectedValue);
    },
  },
};
</script>

<style scoped>
.select-box {
  margin: 8px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #29164e;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

select:focus {
  outline: none;
}
</style>