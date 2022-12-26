<template>
  <div class="login-wrapper">
    <div class="title">
      <h3>Login</h3>
    </div>
    <div class="login-input">
      <label for="email">email</label>
      <input id="email" type="email" />
    </div>
    <div class="login-input">
      <label for="password">password</label>
      <input id="password" type="password" />
    </div>
    <div>
      <button role="button" class="submit" @click="goToNext()">
        <text v-if="!loading">Submit</text>
        <text v-else>Loading...</text>
      </button>
    </div>
  </div>
</template>

<script>
import { linkTo } from "@storybook/addon-links";
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    link: linkTo("Card", "Primary"),
    goToNext() {
      this.loading = true;
      setTimeout(() => {
        this.link();
      }, 2000);
    },
  },
};
</script>

<style scoped></style>
