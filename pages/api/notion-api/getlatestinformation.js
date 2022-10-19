import React from "react";
import { getLatestInformationItems } from "/src/packages/LatestInformation/GetLatestInformation";

export default async function GetLatestInformation(req, res) {
  res.status(200).json(await getLatestInformationItems());
}
