import Login from "./Login.vue";
import { userEvent, screen } from "@storybook/testing-library";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Login",
  component: Login,
};

//👇 We create a “template” of how args map to rendering
/*const Template = (args, { argTypes }) => ({
  components: { Login },
  props: Object.keys(argTypes),
  template: '<Login v-bind="$props"/>',
});*/

const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args"/>',
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const Primary = Template.bind({});
Primary.args = {
  //👇 The args you need here will depend on your component
};
Primary.play = async () => {
  const emailInput = screen.getByLabelText("email", {
    selector: "input",
  });

  const passwordInput = screen.getByLabelText("password", {
    selector: "input",
  });

  const submitBtn = screen.getByRole("button", {
    selector: "button",
  });

  await userEvent.type(emailInput, "test@test.com", {
    delay: 100,
  });
  await sleep(1000);
  await userEvent.type(passwordInput, "pwd", {
    delay: 100,
  });
  await sleep(1000);
  await userEvent.click(submitBtn);
};
