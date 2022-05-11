<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select :value="modelValue" @input="updateValue" v-bind="$attrs">
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
// import { formFieldMixin } from "@/mixins/formFieldMixin";
export default {
  name: "BaseSelect",
  inheritAttrs: false,
  // mixins: [formFieldMixin],
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: [String, Number],
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
