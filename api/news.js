import mysql from "mysql2/promise";

export default async function handler(req, res) {
  // CORS (если будешь дергать с другого домена — можно оставить, не мешает)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const id = (req.query?.id ?? "all").toString();

  let conn;
  try {
    conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8mb4",
    });

    let rows;
    if (id === "all") {
      const [r] = await conn.execute("SELECT * FROM news");
      rows = r;
    } else {
      const idInt = Number(id) || 0;
      const [r] = await conn.execute("SELECT * FROM news WHERE id = ?", [idInt]);
      rows = r;
    }

    return res.status(200).json(rows);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  } finally {
    try {
      if (conn) await conn.end();
    } catch {}
  }
}
