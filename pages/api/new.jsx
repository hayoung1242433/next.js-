import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb"

export default async function handler(요청, 응답){
    if(요청.method == "POST"){
        
     console.log(요청.body)
     const db =  (await connectDB).db('forum')
     const front =  {_id : new ObjectId(요청.body._id)}
     const end = {title : 요청.body.title , content : 요청.body.content }
     let result = await db.collection('post').updateOne(
      front, {$set: end }
     )
     응답.redirect(302 , '/list')
    }
}