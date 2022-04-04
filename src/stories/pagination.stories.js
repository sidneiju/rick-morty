import PaginationComponent from '../components/PaginationComponent.vue'

export default {
  title: 'PaginationComponent',
  component: PaginationComponent
};

const Template = (args, { argTypes }) => ({
  components: { PaginationComponent },
  props: Object.keys(argTypes),
  template: '<PaginationComponent v-bind="$props"></PaginationComponent>',
});

export const Primary = Template.bind({});
Primary.args = {
  pageSize: 20, dataInfo: {
    count: 65,
    pages: 4,
    next: 2,
    prev: null
  }
}