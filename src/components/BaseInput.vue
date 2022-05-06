<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
// import { formFieldMixin } from "../mixin/formFieldMixin";
// mixins: [formFieldMixin];

export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};

// const listeners = computed(() => {
//   return {
//     ...this.$listeners,
//     input: this.updateValue,
//   };
// });
</script>

<style lang="scss" scoped></style>
