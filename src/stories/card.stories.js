import { action } from '@storybook/addon-actions'
import CardComponent from '../components/CardComponent.vue'

export default {
  title: 'CardComponent',
  component: CardComponent
};

const Template = (args, { argTypes }) => ({
  components: { CardComponent },
  props: Object.keys(argTypes),
  template: '<CardComponent v-bind="$props" @click="action"></CardComponent>',
  methods: { action: action('clicked') }
});

export const Primary = Template.bind({});
Primary.args = { title: "Título do Card", width: "250px", height: "300px" }