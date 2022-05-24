<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
import { formFieldMixin } from "../mixins/formFieldMixin";

export default {
  name: "BaseInput",
  mixins: [formFieldMixin],
};
</script>

<style lang="scss" scoped></style>
