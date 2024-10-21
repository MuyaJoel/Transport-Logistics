import express from "express";
import cors from "cors";
import router from "./routes/index.mjs";
import './jobs/expiredResrvation.mjs'

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
