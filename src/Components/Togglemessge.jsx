import { useState } from "react"

const Togglemessge=()=>{
  const [isvisible,setIsvisisble]=useState(false)
  return(
    <>
    <div>
     {isvisible?<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis error quos possimus molestiae laudantium! Doloribus, ipsam. Dolores beatae voluptatem sunt obcaecati. Ratione necessitatibus beatae laboriosam error illum amet mollitia sunt.
     Qui, perferendis optio iusto quae amet animi veniam sed porro velit et aut voluptatibus quaerat libero alias! Ad, magni dicta odit quod distinctio dignissimos voluptatum, recusandae, maiores culpa laudantium suscipit.</h1>:"not visible"}
    </div>
    <div>
      <button onClick={()=>setIsvisisble(!isvisible)} className="bg-amber-300 p-1 rounded-2xl">{isvisible?"hide":"show"}</button>
    </div></>
  )
}
export default Togglemessge