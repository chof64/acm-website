import { latestInformation } from "/src/packages/notion-api/LatestInformation";

export default async function LatestInformation(req, res) {
  res.status(200).json({
    latestInformation: await latestInformation(),
  });
}
