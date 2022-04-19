<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { formFieldMixin } from '../mixin/formFieldMixin';
mixins: [formFieldMixin];

const listeners = computed(() => {
  return {
    ...this.$listeners,
    input: this.updateValue,
  };

});
return {
  listeners,
};
</script>

<style lang="scss" scoped></style>
