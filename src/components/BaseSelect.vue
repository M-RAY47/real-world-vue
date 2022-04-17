<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select>
      <option
        v-for="option in options"
        :value="option"
        :key="option.id"
        :selected="option === value"
      >{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped></style>
