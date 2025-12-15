import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "status.json");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Status not available yet" });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(data);
}
