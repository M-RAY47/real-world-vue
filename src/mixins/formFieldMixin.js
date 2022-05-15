export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
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
