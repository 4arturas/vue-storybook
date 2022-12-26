<template>
  <button v-on:click="send('TOGGLE')">
    {{current.value}}
  </button>
</template>

<script>
import { interpret } from "xstate"
import { toggleMachine } from "./toggleMachine"
export default {
  name: "ToggleMachine",
  data() {
    return {
      toggleSystem: interpret( toggleMachine ),
      current: toggleMachine.initialState,
      context: toggleMachine.context
    }
  },
  created() {
    this.toggleSystem
      .onTransition( (state) => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  },
  methods: {
    send( event ) {
      this.toggleSystem.send( event );
    }
  }
};
</script>

<style scoped>


</style>