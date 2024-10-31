import app from "./app";
import cors from "cors"

const port = 3001;
const corsOptions = {
    origin: "https://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));


app.listen(port, ()=>{
    console.log("the server is up!!")
});