import express from 'express';
import 'dotenv/config';
import cors from "cors";
import mongoConnection from "./database/mongo.database.js"
import errorMiddleware from './middleware/error.middleware.js';
import complaintRouter from "./routes/complaints.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/complaints", complaintRouter);

app.use("/api/admin", adminRouter);

app.use(errorMiddleware);

await mongoConnection()

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
