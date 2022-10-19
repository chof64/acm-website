import {
  getLatestInformationMetadata,
  getLatestInformationItems,
} from "/src/packages/LatestInformation/GetLatestInformation";

export default async function getannouncements(req, res) {
  res.status(200).json({
    metadata: await getLatestInformationMetadata(),
    items: await getLatestInformationItems(),
  });
}
