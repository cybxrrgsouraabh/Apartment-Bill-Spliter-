import app from "./app";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = 3000;
const corsOptions = {
    origin: "https://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.listen(port, ()=>{
    console.log(`the server is up!! at ${port}`)
});