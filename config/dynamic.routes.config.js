module.exports = {
  dynamic: [
    {
      name: "root",
      notion_id: "ec0792496afa4508932251a8d9c4b578",
      notion_conditions: {
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Published",
              },
            },
          ],
        },
      },
    },
  ],
};
