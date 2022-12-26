import { createMachine, assign } from "xstate";

function invokeSubredit(context) {}
export const testMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBc7ILIEMDGALAlgHZgDEAygKIAyFAwgCoDaADALqKgAOA9rPsvm6EOIAB6IAtAFYAdFIA0IAJ6SATABYA7AF9ti1LAw4CxGbDAAbMNlQQZF7pghEoJCELAyiAN24BrTwAzMGQ8CVgAVwAjACdIZ2QWdiQQHj4BIRFxBAlNRRUcqWY5XX00LDwiT3MrG0h7R2dCVzAYmO4YmU4LTGRAjoBbGWDQ3HDouIgEpJE0-kFhFOzNOXzEAEZNKV09EEJuCDgRAyNK4lneecyltXUATjWcgGYn9RLdk4qTT3wIKwv0gssmpmOtHhJVBoZKpNK8nltSiBPsYqmZLNZbACrotQNkJOsAGyqVbKSTrJ4ADkRyLO1XRdTsDicLixGRxYjJ6zeClJCCk6mp5RRphqGPqTMOEFZQJuCFUd3WJIKEIFHyFtLRtVsw0w+CsUpSczZwLlCqVG1h710QA */
  createMachine({
    id: 'testMachine',
    context: {
      posts: null,
      subreddit: null
    },
    initial: 'idle',
    states: {
      idle: {},
      selected: {
        initial: 'loading',
        states: {
          loading: {
            invoke: {
              id: 'fetch-subreddit',
              src: invokeSubredit,
              onDone: {
                target: 'loaded',
                actions: assign({
                  posts: ( context, event ) => event.data
                })
              },
              onError: {
                target: 'failed'
              }
            }
          },
          loaded: {},
          failed: {}
        }
      }
    },
    on: {
      SELECT: {
        target: '.selected',
        actions: assign({
          subreddit: ( context, event ) => event.name
        })
      }
    }
  });
