const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const employeeRoutes = require("./routes/employeeRoutes");

const loggerMiddleware = require("./middleware/loggermiddleware");


// Middleware
app.use(cors());
app.use(express.json());

app.use(loggerMiddleware);


// Routes

app.use("/employees", employeeRoutes);


app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});

mongoose.connect("mongodb+srv://gg60473_db_user:Gaurav8933@cluster0.ggjvslp.mongodb.net/").then(() => {
  
  console.log("MongoDB Connected");
}).catch((err) => {
  console.log("MongoDB Connection Error: ", err);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});
