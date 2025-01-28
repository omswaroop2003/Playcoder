const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const packageRoutes = require("./src/routes/packageRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/packages", packageRoutes);

// Serve frontend (optional)
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
