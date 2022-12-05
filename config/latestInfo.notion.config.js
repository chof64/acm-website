module.exports = {
  latestInfo: [
    {
      ident: "all",
      name: "_all",
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
      ident: "announcement",
      name: "Annoucements",
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
      ident: "blog",
      name: "Blog",
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
      ident: "event",
      name: "Events",
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
