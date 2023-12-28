
import {connectDB} from "@/util/database"
import {ObjectId} from "mongodb"

export default async function Edit(props){
    // 수정이 왜 안되는지 확인 
    const db  = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({'_id' : new ObjectId(props.params.id)})
    
   
    
    return(
        <div className = "p-20"> 
        <h4>수정 페이지</h4> 
        <form action = "/api/new" method ="POST">
            <input name = "title" defaultValue = {result.title} /> 
            <input name = "content" defaultValue = {result.content}/>
            <input name = "_id" style ={{display : "none"}} defaultValue = {result._id.toString()}/>
            <button type = "submit">전송</button>
        </form>
        
        </div>
    )
}