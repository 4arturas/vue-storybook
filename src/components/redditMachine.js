import { assign, createMachine } from "xstate";
// import fetch from "node-fetch";

function invokeFetchSubreddit(context) {
  const { subreddit } = context;

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .then((json) =>
      json.data.children.map((child) => {
        // console.log(child.data);
        return child.data;
      })
    );
}
export const redditMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QCVIQJYBcAEBZAhgMYAW6AdmAMQDKAogDK0DCAKgNoAMAuoqAA4B7WFnQCyvEAA9EAFgBMAGhABPRAEYArDIC+2paggYcBEuTAA6WGAA2YQpkjnrA-BjJRKEMRfIA3AQDWFgBmYJgkALSwAK4ARgBOaFicPEgggsKYouJp0ggAzAAcAJzmHDLFchz58oX5xdUySqoIGhrmamqFHFX5GhzFhRW6+knGRKQUljZ2DhBOLm4eYPHxAvHmfNb4mMHrALbmoeHEUXGJhsncEhkiYhJ5RaUA7Gqvz3JvdQ35zYj55XMxWeGgAbMV8p8OM8ZK9dHoQGQBBA4BIDEY8BMzDchHccqA8hEIeYNGo+oUYd1ngMKX8EBFOqVCoU1MUtMCNK85HINCMQOisJjTFN0BBbDjMtkHogIjJ2qTyZToTTnnS1BwSQ1Bn0QXJQfl9byEQLxsKLFZbPZIBK8dKEFUXvk1J8IWDnt1QYU6RFIeYiqyNBD9UMDRxQXyTULJuaZlb5s5XOQoDasvdcogec9zM8nS6+qD3dC1aC5OY5WCNPUZGGOIUNIUI2Mo2Zppa5gtXNa0rdU-ipIhQSXzHJuk6OLW6v1inTnqC-TI5YUR1OhsVG5dTdHW7NHMF8OhbBAU1L0wgC2pzKC3VfQbXeqqVBninPqUVa4PCvrnfDtEA */
  createMachine({
    id: "Reddit Machine",
    context: {
      subreddit: null,
      posts: null,
    },
    initial: "idle",
    states: {
      idle: {},
      selected: {
        initial: "loading",
        states: {
          loading: {
            invoke: {
              id: "fetch-subreddit",
              src: invokeFetchSubreddit,
              onDone: {
                target: "loaded",
                actions: assign({
                  posts: (context, event) => event.data,
                }),
              },
              onError: "failed",
            },
          },
          loaded: {},
          failed: {},
        },
      },
    },
    on: {
      SELECT: {
        target: ".selected",
        actions: assign({
          subreddit: (context, event) => event.name,
        }),
      },
    },
  });
