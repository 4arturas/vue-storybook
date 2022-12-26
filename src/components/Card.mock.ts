// Define your own mock data here:
/*export const standard = (/!* vars, { ctx, req } *!/) => ({
  articles: [{ id: 42 }, { id: 43 }, { id: 44 }],
})*/
export const standard = (/* vars, { ctx, req } */) => ({
  title: "Primary",
  subText: "Example sub text",
  subHeader: "Media text",
  mediaHref: "favicon.ico",
  supportingText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  buttonText: "Go",
  button: true,
});

export const TestData = {
  user: {
    userID: 1,
    name: "Someone",
  },
  document: {
    id: 1,
    userID: 1,
    title: "Something",
    brief: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "approved",
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: "Something",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "approved",
    },
    {
      id: 2,
      userID: 1,
      title: "Something else",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "awaiting review",
    },
    {
      id: 3,
      userID: 2,
      title: "Another document",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "approved",
    },
    {
      id: 4,
      userID: 2,
      title: "Something",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "approved",
    },
  ],
};
