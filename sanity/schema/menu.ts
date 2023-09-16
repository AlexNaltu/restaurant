export default {
  name: "menu",
  type: "document",
  title: "Menu",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "overview",
      type: "string",
      title: "Overview",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "prep",
      title: "Prep",
      type: "string",
    },
  ],
};
