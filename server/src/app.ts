import express, { Request, Response } from "express";
import cors from "cors"
import connectDB from "./config/db";
import { userRoutes } from "./modules/users/user.routes";
const app = express();

app.use(express.json());
app.use(cors())


connectDB();


app.get("/", (req: Request, res: Response)=>{
  res.send("Hello world")
})



app.use("/api", userRoutes);



export default app;