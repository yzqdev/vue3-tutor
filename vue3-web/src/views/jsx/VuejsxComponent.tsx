const VuejsxComponent = defineComponent({
  setup(props) {
    console.log(props);
  },
  props: {
    formId: String,
  },
  render() {
    return <div>{this.formId}</div>;
  },
});
export default VuejsxComponent;
