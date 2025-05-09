import express from "express";
import userRouter from "./routes/users"
import expenseRouter from "./routes/expense"
import groupRouter from "./routes/groups"
import splitRouter from "./routes/splits"
import authRouter from "./routes/auth"
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());


app.use("/user", userRouter);
app.use("/group", groupRouter);
app.use("/expense", expenseRouter);
app.use("/splits", splitRouter);
app.use("/auth", authRouter);






export default app;