import { client } from '../index.js'
import { ObjectId } from 'bson';


export async function updateStudents(_id, data) {
    return await client
        .db("Task")
        .collection("mentor")
        .updateOne({ _id: ObjectId(_id) }, { $set: data })
}

export async function createMentors(data) {
    return await client.db("Task").collection("mentor").insertMany(data)
}

export async function getbyParticularMentor(_id) {
    return await client.db("Task").collection("mentor").find({ _id: ObjectId(_id) }).toArray()
}

export async function getMentorDetails() {
    return await client.db("Task").collection("mentor").find({}).toArray()
}

export async function DeleteMentor(_id) {
    return await client
        .db("Task")
        .collection("mentor")
        .deleteOne({ _id: ObjectId(_id) })
}

DeleteMentor