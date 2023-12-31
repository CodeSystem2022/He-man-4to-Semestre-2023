import express from "express";
import morgan from "morgan";
import tareasRouters from "./router/tareasrouters.js"
import auth from "./router/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
//Middlewares
app.use(morgan("dev"));
app.use(cors(
    origin: "http://localhost:5173",
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req,res) => res.json({ message: "Bienvenidos a el proyecto"}));
app.use(tareasRouters);
app.use(auth)

//Manejando errores
app.use((err,req,res,next) =>{
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;