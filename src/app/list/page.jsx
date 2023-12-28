
import {connectDB} from "@/util/database"
import ListItem from "./ListItem"
export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray() //모든 자료형 출력 
    let i = 0;

    
    return (
       
            <div className = "list-bg"> 
            {result.map( (data , i)  => <ListItem result = {{... data, "_id" : data._id.toString() , "index" : i}}/> )}
            
            
        </div> 
    
       
          
    )
}