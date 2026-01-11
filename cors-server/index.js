
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";

// const app = express();
// const PORT = process.env.PORT || 3000;

// /* Enable CORS */
// app.use(cors());

// /* API route with dynamic date */
// app.get("/birthday", async (req, res) => {
//   try {
//     const { date } = req.query; // 👈 get date from URL

//     if (!date) {
//       return res.status(400).send("Date is required");
//     }

//     const response = await fetch(
//       `https://www.psiegel.org/api/birthday?date=${date}`
//     );

//     const data = await response.json(); // API returns text
//     res.json(data);
//   } catch (err) {
//     res.status(500).send("Error fetching data");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

/* Enable CORS */
app.use(cors());

/* Serve frontend */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

/* API route */
app.get("/birthday", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).send("Date is required");

    const response = await fetch(`https://www.psiegel.org/api/birthday?date=${date}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

/* Optional: redirect root to index.html */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

