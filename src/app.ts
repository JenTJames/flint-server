import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.APP_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Flint API Server running on port ${PORT}`)
})