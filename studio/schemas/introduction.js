export default {
  name: "introduce",
  title: "Bài giới thiệu",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "link",
      title: "Link contect",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
