import React from "react"
export default function Formc(){
return(
  <>
<form>
<div class="mb-3">
  <label for="exampleInputPassword1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" className="form-label">Phone number</label>
  <input type="text" className="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">write your message</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="submit" className="btn btn-primary">Send message</button>
</form>
</>
)}