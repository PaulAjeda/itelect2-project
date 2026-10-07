import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";
import authRouter from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is missing from .env");
  process.exit(1);
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", router);


app.use((err, req, res, next)=>{
    if(err.name==="SequelizeValidationError"){
        return res.status(400).json({
            error: err.errors.map(e=>e.message)
        });
    }

    if(err.name==="SequelizeUniqueConstraintError"){
        return res.status(409).json({
            error:"Email already registered"
        });
    }

    console.error(err.message);
    res.status(500).json({
        error:err.message
    });
});


app.listen(PORT,()=>{
    console.log(`Task Manager API running on port ${PORT}`);
});