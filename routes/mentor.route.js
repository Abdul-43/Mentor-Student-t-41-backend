import express from 'express'
const router = express.Router()
import {getMentorDetails,createMentors,updateStudents,getbyParticularMentor,DeleteMentor} from '../services/mentor.service.js'


router.get("/", async function(request,response){
    const result = await getMentorDetails()
    response.send(result)
})

router.get("/:_id", async function(request,response){
    const {_id} = request.params;
    const result = await getbyParticularMentor(_id)
   response.send(result)
})

router.post("/add", async function(request,response){
    const data = request.body;
    const result = await createMentors(data)
    response.send(result)
})

router.put("/update/:_id", async function(request,response){
    const {_id} = request.params;
    const data = request.body;  
    const result = await updateStudents(_id, data)
    response.send(result)
})

router.delete("/delete/:_id", async function (request, response) {
    const { _id } = request.params;
    const result = await DeleteMentor(_id);
     response.send(result) 
  }); 

export default router
