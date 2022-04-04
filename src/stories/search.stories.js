import SearchComponent from '../components/SearchComponent.vue'

export default {
  title: 'SearchComponent',
  component: SearchComponent
};

const Template = (args, { argTypes }) => ({
  components: { SearchComponent },
  props: Object.keys(argTypes),
  template: '<SearchComponent v-bind="$props"></SearchComponent>',
});

export const Primary = Template.bind({});
Primary.args = { placeholder: "Busque por algo" }