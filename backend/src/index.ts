import app from "./app";
import cors from "cors";
import cookieParser from "cookie-parser";

const port = 3000;



app.use(cookieParser());

app.listen(port, ()=>{
    console.log(`the server is up!! at ${port}`)
});