import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config();
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello from the backend cutieee"); 
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => { 
    console.log("Server started on port 5000");
    connectMongoDB();
});