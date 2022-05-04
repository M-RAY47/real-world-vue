<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
      type="text"
    />
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
// import { formFieldMixin } from "../mixin/formFieldMixin";
// mixins: [formFieldMixin];

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
    }
  },
  methods: {
    updateValue(e) {
      this.$emit(e, e.target.value);
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
