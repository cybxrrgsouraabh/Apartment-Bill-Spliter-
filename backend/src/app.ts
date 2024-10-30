import express from "express";
import cors from "cors"
import userRouter from "./routes/users"
import expenseRouter from "./routes/expense"
import groupRouter from "./routes/groups"

const app = express();

app.use(express.json());


app.use("/user", userRouter);
app.use("/group", groupRouter);
app.use("/expense", expenseRouter);







export default app;