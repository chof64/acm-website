import { tabs } from "/config/latest_information.config";

import { getLatestInformationItems } from "./puller/GetLatestInformation";

export const latestInformation = async () => {
  const ALL_INFORMATION = await getLatestInformationItems();

  const STRUCTURED_INFORMATION = tabs.map((tab) => {
    const TAB_INFORMATION = ALL_INFORMATION.filter(
      (information) => information.properties.Category.select.name === tab.name
    );
    return {
      name: tab.name,
      header: tab.header,
      data: TAB_INFORMATION,
    };
  });

  return STRUCTURED_INFORMATION;
};
