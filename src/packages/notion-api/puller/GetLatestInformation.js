import { Client } from "@notionhq/client";

import { generateSlug } from "/src/utils/SlugifyUtilities";
import { transformISOtoEnglish } from "/src/utils/DateParseUtilities";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getLatestInformationMetadata = async (
  databaseId = process.env.NOTION_LATEST_INFORMATION_DB
) => {
  return await notion.databases.retrieve({ database_id: databaseId });
};

// TODO: Add recursion in the future when there are more than 100 items
export const getLatestInformationItems = async (
  databaseId = process.env.NOTION_LATEST_INFORMATION_DB
) => {
  const RESPONSE = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      status: {
        equals: "Publish",
      },
    },
    sorts: [{ timestamp: "created_time", direction: "descending" }],
  });

  RESPONSE.results.forEach((item) => {
    item.slug = generateSlug(item.properties.Name.title[0].plain_text);
    item.parsed_created_time = transformISOtoEnglish(item.created_time);
    item.parsed_last_edited_time = transformISOtoEnglish(item.last_edited_time);

    if (item.cover != null) {
      const COVER_TYPE = item.cover.type;
      item.cover.url = item.cover[COVER_TYPE].url;
    }
  });

  return RESPONSE.results;
};
