
import peoples from "../users.js";



export async function allUsers(req,res){
  let counter=1;
  peoples.forEach(person=>{
    person.id=counter;
    counter++;
  })
  res.json({method:"success",
              users:peoples});
}

//get user by id
export async function getUserID(req,res){
  // convert the string passed on Uri into number
  let id = Number(req.params.id);
  //iterate on peoples and call the person with the id equal to number id 
  let findPeople = peoples.filter(people=> people.id===id)
  console.log(findPeople)
    res.json({method:"success",
              users:findPeople});
}
    

//create a new user
export  function createNewUser(req,res){
  //select the body of the new user
  let newPerson = req.body;
  //if user is true push the new user on the database
  if(newPerson){
    peoples.push(newPerson);
    res.json({method:"success",
              users:newPerson});
  }else{
    res.send("Error");//error in case of false response
  }
  
}
//update new user
export function updateUser(req,res){
  //the id of the new body
  let personUpdateID = req.params.id;
  //the element of the new body
  let personBody = req.body;
  //if there is a body to update update the user
  if(personBody){
    //swap the element by comparing the id
  peoples.splice(personUpdateID - 1,1,personBody);
  //send back the new body   
  res.json({method:"success",
              users:personBody});
  }else{
    res.send("Error during update");//show an error in case something go wrong
  } 
}

//function for delete user
export function deleteUserById(req,res){
  //select the id to delete in the uri bar
  let id=req.params.id;
  //if there is an id delete him
  if(id){
    peoples.splice(id-1,1)
    res.json({method:"success",
              text:"user deleted"});
  }else{
    res.send("Error during delete");//show an error on delete
  }  
}
