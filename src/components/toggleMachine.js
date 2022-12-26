import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  id: "Toggle Machine",
  context: {},
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
    fetch: {
      on: { TOGGLE: "inactive" },
    },
  },
});
