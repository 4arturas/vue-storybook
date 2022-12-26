import Card from "./Card.vue";
import { standard, TestData } from "./Card.mock";
import { rest } from "msw";

//👇 This default export determines where your story goes in the story list
export default {
  methods: { standard },
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
  decorators: [
    () => ({ template: '<div style="margin: 130px"><story/></div>' }),
  ],
};

//👇 We create a “template” of how args map to rendering
/*const Template = (args, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  template: '<Card v-bind="$props"/>',
});*/

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args"/>',
  // template: '<Card v-bind="standard"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  //👇 The args you need here will depend on your component
  title: "Primary",
  subText: "Example sub text",
};
export const Secondary = Template.bind({});
Secondary.args = {
  //👇 The args you need here will depend on your component
  title: "Primary",
  subText: "Example sub text",
  subHeader: "Media text",
  mediaHref: "favicon.ico",
};
export const Third = Template.bind({});
Third.args = {
  //👇 The args you need here will depend on your component
  title: "Primary",
  subText: "Example sub text",
  subHeader: "Media text",
  mediaHref: "favicon.ico",
  supportingText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
export const Forth = Template.bind({});
Forth.args = {
  //👇 The args you need here will depend on your component
  title: "Primary",
  subText: "Example sub text",
  subHeader: "Media text",
  mediaHref: "favicon.ico",
  supportingText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonText: "Go",
  button: true,
};
export const Fifth = Template.bind({});
Fifth.args = standard();

export const MockedSuccess = Template.bind({});
MockedSuccess.parameters = {
  msw: [
    rest.get("https://github.com/octocat", (_req, res, ctx) => {
      console.log(1111);
      return res(ctx.json(TestData));
    }),
  ],
};

export const MockedError = Template.bind({});
MockedError.parameters = {
  msw: [
    rest.get("https://github.com/octocat", (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(403));
    }),
  ],
};
