import { client } from '../index.js'
import { ObjectId } from 'bson';

export async function updatingMentor(_id, data) {
    return await client
        .db("Task")
        .collection("student")
        .updateOne({ _id: ObjectId(_id) }, { $set: data })
}

export async function createStudentDetails(data) {
    return await client.db("Task").collection("student").insertMany(data)
}

export async function getStudentDetails() {
    return await client.db("Task").collection("student").find({}).toArray()
}

export async function getParticularStudentDetails(_id) {
    return await client.db("Task").collection("student").find({ _id: ObjectId(_id) }).toArray()
}

export async function DeleteStudent(_id) {
    return await client.db("Task").collection("student").deleteOne({ _id: ObjectId(_id) })
}