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
  name: "BaseInput",
  mixins: [formFieldMixin],
};
</script>

<style lang="scss" scoped></style>
