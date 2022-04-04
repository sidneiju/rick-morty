import { action } from '@storybook/addon-actions'
import ButtonComponent from '../components/ButtonComponent.vue'

export default {
  title: 'ButtonComponent',
  component: ButtonComponent
};

const Template = (args, { argTypes }) => ({
  components: { ButtonComponent },
  props: Object.keys(argTypes),
  template: '<ButtonComponent v-bind="$props" @click="action">Hello Button</ButtonComponent>',
  methods: { action: action('clicked') }
});

export const Primary = Template.bind({});
Primary.args = { disabled: false }