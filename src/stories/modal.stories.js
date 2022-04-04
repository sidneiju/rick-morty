import ModalComponent from '../components/ModalComponent.vue'

export default {
  title: 'ModalComponent',
  component: ModalComponent
};

const Template = (args, { argTypes }) => ({
  components: { ModalComponent },
  props: Object.keys(argTypes),
  template: '<ModalComponent v-bind="$props">Conteúdo</ModalComponent>',
});

export const Primary = Template.bind({});
Primary.args = { title: "Detalhes da Modal", loading: false }