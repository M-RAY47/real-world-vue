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
const listeners = computed(() => {

})
</script>

<style lang="scss" scoped>

</style>