import Header from "./compunents/Header";
import Mainbody from "./compunents/Main-body";
import { products } from "./product";
import  Kfccard from "./compunents/Kfccard";
import { my_expr } from "./My_exp";
import Expcard from "./compunents/Expcard";
import { blogs } from "./b-product";
import Blogs from "./compunents/Blogs";
import Formc from "./compunents/formc";
import Foot from "./compunents/footer1";
function App(){
 
  
  return(
    <>
    
    <Header />
    <Mainbody />
    <hr />
    <center><h1>My Education</h1></center>
    <div className="container  card1">
    {products.map(product => <Kfccard key={product.id} product={product}/>)}
    </div>
    <hr />
    <hr />

    <center><h1>My Experince</h1></center>
    <div className="container card2">
    {my_expr.map(my_exp  => <Expcard key={my_exp.id} my_exp ={my_exp}/>)}
    </div>
    <hr />
    <center><h1>Blogs</h1></center>
    <div className="container card3">
      {blogs.map(blog =><Blogs key={blog.id} blog = {blog}/>
         
        )}
   

   
  </div>
  <hr />
  <center><h1>Hire Me</h1></center>
 <center> <p> I am available for freelancing work. please contect with me via phone 03419661436 or email ABc@gmail.com</p></center>
  <div className="container">
 <Formc />
  </div>
  <Foot/>
    </>
  )
}
export default App;