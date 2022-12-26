import RedditMachine from "./RedditMachine.vue";


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "RedditMachine",
  component: RedditMachine,
  decorators: [
    () => ({ template: '<div style="margin: 0"><story/></div>' }),
  ],
};

const Template = (args) => ({
  components: { RedditMachine },
  setup() {
    return { args };
  },
  template: '<RedditMachine v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  //👇 The args you need here will depend on your component

};
