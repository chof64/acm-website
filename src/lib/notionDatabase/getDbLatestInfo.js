import { latestInfo } from "/config/latestInfo.notion.config";
import { getConfig } from "/src/utils/getConfig";
import { getDbMetadata } from "./getDbMetadata";
import { getDbItems } from "./getDbItems";

export const getDbLatestInfo = async (page) => {
  const _config = getConfig({
    key: "name",
    value: page,
    config: latestInfo,
  });

  const metadata = await getDbMetadata(_config.notion_id);
  const items = await getDbItems(_config.notion_id, _config.notion_conditions);
  return { metadata, items };
};

export const getDbAllLatestInfo = async () => {
  const _config = getConfig({
    key: "name",
    value: "_all",
    config: latestInfo,
  });

  const metadata = await getDbMetadata(_config.notion_id);
  const items = await getDbItems(_config.notion_id, _config.notion_conditions);
  return { metadata, items };
};
