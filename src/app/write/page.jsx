'use client'


export default function Write() {
    
    return (
   
    <div className = "p-20">
     <h4>글 작성</h4>
     <form action = "/api/somey" method = "Post"> 
     <input name = "title" placeholder = "글 제목을 입력하세요"/> 
     <input name = "content" placeholder = "글 내용 입력 "/> 
     <button type = "submit">버튼</button>
     </form>
    </div>
     
   
      )
}