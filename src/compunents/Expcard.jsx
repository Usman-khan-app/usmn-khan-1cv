import React from "react"
export default function Expcard(props){
    let {my_exp} = props
    return(
<div className="card mt-4 e_card d-flex" style={{width: "18rem"}}>
  <div className="card-body mt-5 padd">
    <h5 className="card-title">{my_exp.title}</h5>
    <h5 className="card-title">{my_exp.year}</h5>
    <p className="card-text">{my_exp.desc}</p>
    
  </div>
  </div>
    )

}

