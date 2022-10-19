import { tabs } from "/config/latest_information.config";

import { getLatestInformationItems } from "./GetLatestInformation";

export const listLatestInformation = async () => {
  const ALL_INFORMATION = await getLatestInformationItems();
  const STRUCTURED_INFORMATION = tabs.map((tab) => {
    const TAB_INFORMATION = ALL_INFORMATION.filter(
      (item) => item.category === tab.name
    );

    return {
      name: tab.name,
      header: tab.header,
      data: TAB_INFORMATION,
    };
  });

  return STRUCTURED_INFORMATION;
};
