import pool from "./db.js";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3002', // Ваш Next.js фронтенд
  credentials: true
}));
app.use(express.json());

// Тестовый роут
app.get("/", (req, res) => {
  res.send("Привет, мир!");
});


app.get("/api/places", async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT 
        id,
        location_city AS "city",
        location_country AS "country",
        rating AS "rating",
        duration AS "duration", 
        distance AS "distance",
        image_path AS "imagePath",
        text AS "text"
      FROM trips
    `);
    const result = rows.map(({ city, country, ...rest }) => ({
      ...rest,
      location: { city, country },
    }));
    res.status(200).json(result);
  } catch (err) {
    console.error("Ошибка при загрузке мест:", err.message);
    res.status(500).json({ error: "Не удалось загрузить места" });
  }
});

app.listen(3001, () => console.log("Сервер запущен на http://localhost:3001"));


