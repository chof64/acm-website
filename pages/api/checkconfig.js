import { tabs } from "/config/latest_information.config";

export default function checkconfig(req, res) {
  res.status(200).json({
    config: tabs,
  });
}
