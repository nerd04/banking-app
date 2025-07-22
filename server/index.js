import express from "express";
import cors  from "cors";
import connectDB from './dbonnection/db.js';
import userRoutes from './routes/users.route.js';
import transactionRoute from './routes/transactions.route.js';
import dotenv from 'dotenv'
dotenv.config({
        path: './.env'
    })



const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is healthy!" });
});

// Placeholder routes
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoute); 

connectDB()
.then(()=>{
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err);
})
