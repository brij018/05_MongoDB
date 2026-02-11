import express from  "express"
import connectDB from "./db/mongoose.js"
import HttpError from "./middleware/httpError"

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json("hello from server");
});

app.use((req,res,next)=>{
    next(new HttpError("route not found",404));
});
app.use((error,req,res,next)=>{
    res.status(error.statusCode || 500).json({message:error.message||"internal server error"});
});

async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
        console.log(`Server running on port ${port}`);
})
    } catch (error) {
        console.log("fail to start server:",error.message);
        process.exit(1);
    }
}

startServer()