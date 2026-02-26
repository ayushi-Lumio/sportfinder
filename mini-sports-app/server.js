const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aayushigoswami02_db_user:gLCqvVRiX5s1kuaA@cluster0.tmbmtlg.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Registration Successful ✅");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/dashboard.html");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});



app.use(express.json());

const sportRoutes = require("./routes/sportroutes");
app.use("/sports", sportRoutes);