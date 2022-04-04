import SelectBoxComponent from '../components/SelectBoxComponent.vue'

export default {
  title: 'SelectBoxComponent',
  component: SelectBoxComponent
};

const Template = (args, { argTypes }) => ({
  components: { SelectBoxComponent },
  props: Object.keys(argTypes),
  template: '<SelectBoxComponent v-bind="$props"></SelectBoxComponent>',
});

export const Primary = Template.bind({});
Primary.args = {
  selectionData: [
    { value: 1, name: "Ordenar por ID Ascendente" },
    { value: 2, name: "Ordenar por ID Descendente" },
    { value: 3, name: "Ordenar por Nome A-Z" },
    { value: 4, name: "Ordenar por Nome Z-A" },
  ],
}