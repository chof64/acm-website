module.exports = {
  latestInfo: [
    {
      name: "all",
      notion_id: "15a310be6dfb4f3f823365dad47e0977",
      slug: "/info",
      parent: "Latest Information",
      notion_conditions: {
        filter: {
          property: "Status",
          status: {
            equals: "Publish",
          },
        },
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      },
    },
    {
      name: "announcement",
      notion_id: "15a310be6dfb4f3f823365dad47e0977",
      slug: "/info",
      parent: "Latest Information",
      notion_conditions: {
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Publish",
              },
            },
            {
              property: "Category",
              select: {
                equals: "Announcement",
              },
            },
          ],
        },
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      },
    },
    {
      name: "blog",
      notion_id: "15a310be6dfb4f3f823365dad47e0977",
      slug: "/info",
      parent: "Latest Information",
      notion_conditions: {
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Publish",
              },
            },
            {
              property: "Category",
              select: {
                equals: "Blog",
              },
            },
          ],
        },
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      },
    },
    {
      name: "event",
      notion_id: "15a310be6dfb4f3f823365dad47e0977",
      slug: "/info",
      parent: "Latest Information",
      notion_conditions: {
        filter: {
          and: [
            {
              property: "Status",
              status: {
                equals: "Publish",
              },
            },
            {
              property: "Category",
              select: {
                equals: "Event",
              },
            },
          ],
        },
        sorts: [{ timestamp: "created_time", direction: "descending" }],
      },
    },
  ],
};
