import { dynamic } from "/config/dynamic.routes.config";
import { getConfig } from "/src/utils/getConfig";
import { getDbMetadata } from "./getDbMetadata";
import { getDbItems } from "./getDbItems";

export const getDbDynamicRoutes = async (page) => {
  const _config = getConfig({
    key: "name",
    value: page,
    config: dynamic,
  });

  const metadata = await getDbMetadata(_config.notion_id);
  const items = await getDbItems(_config.notion_id, _config.notion_conditions);
  return { metadata, items };
};
