// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors=require("cors")

// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/global")
// .then(() => {
//     console.log("db connected");
// })
// .catch(() => {
//     console.log("db not connected");
// });

// const myschema = new mongoose.Schema({
//     randomName:String
// })
// const user = mongoose.model("user",myschema);

// app.post("/sample",async (req,res)=>{
//     const randomName = req.body.randomName;
//     const details = {
//         randomName:randomName
//     }
//     const userdetails = new user(details)
//     const response = await userdetails.save()
//     res.send( response );

//     // userdetails.save()
//     // .then(()=>{res.send("success");})
//     // .catch(()=>{res.send("something went wrong");})
// })
// // app.get("/fetch",async (req,res)=>{
// //     const username=req.body.name;
   
// //     const response= await user.findOne({user:username})
 
// //     if(response){
// //         res.send("success")
// //         console.log(username)
// //     }
// //     else{
// //         res.send("something is wrong")
// //     }
// // })

// // app.get("/",(req,res)=>{
// //     res.send("hello from backend")
// // })



// // app.delete("/deluser", (req,res)=>{
// //     const username =req.body.name;
// //     user.deleteOne({ user : username})
// //     .then(()=>{
// //       res.send("user deleted");
  
// //     })
  
// //     .catch(()=>{
// //       res.send("user note deleted")
// //     })
// //   })

// app.listen(3000,()=>{
//     console.log("server started");
// })
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
  username: "Mohammed Sauood",
};
app.get("/",(req,res)=>{
    res.send("hello from backend")
})

app.get("/mohammed",(req,res)=>{
    res.send("hello from mohammed")
})

app.get("/global",(req,res)=>{
    res.send("hello from global ge bal")
})
app.get("/electrical",(req,res)=>{
    res.send("hello from electrical branch")
})

app.post("/verify-username", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: "Username is required" });
  }

  if (username === database.username) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
