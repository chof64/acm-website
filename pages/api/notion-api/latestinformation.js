import { structuredLatestInformation } from "/src/packages/notion-api/LatestInformation";

export default async function latestInformation(req, res) {
  res.status(200).json({
    latestInformation: await structuredLatestInformation(),
  });
}
