<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
import { formFieldMixin } from "../mixin/formFieldMixin";

export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: [String, Number],
  },
  mixins: [formFieldMixin];
  methods: {
    updateValue(e) {
      this.$emit("update:modelValue", e.target.value);
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
