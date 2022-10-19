import { listLatestInformation } from "/src/packages/LatestInformation/LatestInformation";

export default async function LatestInformation(req, res) {
  res.status(200).json({
    latestInformation: await listLatestInformation(),
  });
}
