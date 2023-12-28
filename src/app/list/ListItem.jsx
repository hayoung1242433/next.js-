'use client'
import Link from "next/link"

export default function ListItem({result }){
    const deleteFetch = (e) => {
        fetch(`/api/Delete?_id=${result._id}`)
        .then((r) => {
         if(r.status == 200){
           return r.json()}
           else{
            // 서버가 에러 전송시 실행할 코드 
           }
        })
        .then(()=> {
            e.target.parentElement.style.opacity = 0;
            setTimeout(() => {
                e.target.parentElement.style.display = 'none'
            } , 1000 ) })
             
        .catch((error) => {
            console.log(error)
        })
    }

    
    return(
        <div>
         
            <div key = {result._id} 
            className = "list-item"> 
                <Link href ={`/detail/${result._id}`}>      
                <h4>{result.title} </h4>  </Link> 
                <Link href = {'/edit/' + result._id} > 수정 </Link>
                <span onClick ={(e) => { 
                    deleteFetch(e)
                }}>삭제</span>
                <li> {result.index + 1}번째 글 </li>
               
            </div> 
        
        </div>
    )
}