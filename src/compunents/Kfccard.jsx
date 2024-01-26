     import React from "react"
export default function Kfccard(props){
    let {product} =props;
    return(
<div className="card mt-4 e_card d-flex bgcol" style={{width: "18rem"}}>

  <div className="card-body mt-5 padd ">
    <h5 className="card-title">{product.title}</h5>
    <h5 className="card-title">{product.org}</h5>

    <p className="card-text">{product.desc}</p>

  </div>
  </div>
    )
}



