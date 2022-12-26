<template>
  <div>{{ current.value }}</div>
  <button v-on:click="send({ type: 'SELECT', name: 'reactjs' })">
    {{ current.value }}
  </button>
  <div v-if="current.matches({ selected: 'loading' })">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="(post, index) in context.posts">
        {{ post.title }} - {{ index }}
      </li>
    </ul>
  </div>

  <br />
</template>

<script>
import { redditMachine } from "./redditMachine";
import { interpret } from "xstate";

export default {
  name: "RedditMachine",
  data() {
    return {
      redditSystem: interpret(redditMachine),
      current: redditMachine.initialState,
      context: redditMachine.context,
    };
  },
  created() {
    this.redditSystem
      .onTransition((state) => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  },
  methods: {
    send(event) {
      this.redditSystem.send(event);
    },
  },
};
</script>

<style scoped></style>
