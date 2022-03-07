<template>
  <div>
    <button v-on="$listeners" v-bind="$attrs" class="button" :class="buttonClass">
      <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: string,
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weigt:600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transition: scale(1.02);
}

</style>
