import LoadingComponent from '../components/LoadingComponent.vue'

export default {
  title: 'LoadingComponent',
  component: LoadingComponent
};

const Template = (args, { argTypes }) => ({
  components: { LoadingComponent },
  props: Object.keys(argTypes),
  template: '<LoadingComponent v-bind="$props"></LoadingComponent>',
});

export const Primary = Template.bind({});
Primary.args = { loading: true, darkTheme: false }