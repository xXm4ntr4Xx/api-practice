import express from "express";
import { allUsers,getUserID, createNewUser,updateUser, deleteUserById } from "./controller/actions.js"

const app = express();
const PORT = 3000;


app.use(express.json());

app.use("/",async function(req,res,next){
  next();
})


//select all the users
app.get("/users",allUsers)

//select element by ID
app.get("/users/:id",getUserID)


//create a new user

app.post("/users",createNewUser);

//update an user
app.put("/users/:id",updateUser);

//delete an user
app.delete("/users/:id",deleteUserById);


app.listen(PORT);