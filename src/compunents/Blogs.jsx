import React from "react"
export default function Blogs(props){ 
    let {blog} = props;
    return(
<div className="card text-bg-success mb-3" style={{width: "18rem"}}>
         <div className="card-body">
           <h5 className="card-title">{blog.title}</h5>
           <p className="card-text">{blog.disc}</p>
         </div>
       </div>
)}