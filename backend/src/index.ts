import app from "./app";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = 3007;
const corsOptions = {
    origin: "https://localhost:3007",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.listen(port, ()=>{
    console.log("the server is up!!")
});