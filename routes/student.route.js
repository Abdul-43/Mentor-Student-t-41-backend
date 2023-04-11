import express from 'express'
const router = express.Router()
import {getStudentDetails,createStudentDetails,updatingMentor,getParticularStudentDetails,DeleteStudent} from '../services/student.service.js'


router.get("/", async function(request,response){
    const result = await getStudentDetails()
    response.send(result)
})

router.get("/:_id", async function(request,response){
    const {_id} = request.params; 
    const result = await getParticularStudentDetails(_id)
    response.send(result)
})

router.post("/add", async function(request,response){
    const data = request.body;
    const result = await createStudentDetails(data)
    response.send(result)
})

router.put("/update/:_id", async function(request,response){
    const {_id} = request.params;
    const data = request.body;
    const result = await updatingMentor(_id, data)
    response.send(result)
})

router.delete("/delete/:_id", async function (request, response) {
    const { _id } = request.params;
    const result = await DeleteStudent(_id);
     response.send(result) 
  }); 

export default router
