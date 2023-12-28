import { connectDB } from "@/util/database"
import {ObjectId} from "mongodb"

export default async function Delete (요청, 응답){
       console.log(요청.query)
       try{
        const db =  (await connectDB).db('forum')
        let front = {_id : new ObjectId(요청.query._id)}
        let result = await db.collection('post').deleteOne(
         front
        )}
        catch (error){
            응답.status(500)
        }
       
        응답.status(200).json('삭제완료')
    
    
}