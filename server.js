import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import path from "path";

const __dirname = path.resolve();

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())


//db connection
// connectDB();

//api endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


// console.log(path.resolve());

// app.use(express.static(path.join(__dirname, "/frontend/dist")));


// app.get("/", (req, res)=>{
//     res.send("Api working")
// })


// app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
//     // res.send("Api working")
// })


app.listen(port, () => {
    connectDB();
    console.log(`App listening on http://localhost:${port}`);
})

// mongodb+srv://barikakash396:33858627@cluster0.ccoitxi.mongodb.net/?
