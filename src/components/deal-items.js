import{ React ,useState}from 'react';
import img from '../images/Carousel.png'
import {AiFillStar} from 'react-icons/ai'
import {BsPlusLg} from 'react-icons/bs'
import {RiSubtractFill} from 'react-icons/ri'

function DealItems(props) {
  const [count , setCount] = useState(0)
  
  return( 
  <div className='deals-item-childs'>
    
    {props.type?<p>undefied % off</p>:<p>70 % off</p>}
    <div style={{textAlign:"center" , width:"100%"}}>      <img className='deals-items-img' src={props.img} alt="img" />
    </div>

      <h4>{props.title}</h4>
      <div className='stars'>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        <AiFillStar size={"20px"} color='#faaf00'/>
        </div>
        
      <div className='plus-btn-main'>
          
     {props.type? <h3>{"$"}NaN</h3>:
     <h3 style={{color:"red"}}>{"$"} 2345.45  <b style={{textDecoration:"line-through" ,color:"gray"}}> {"  $177.00"}</b></h3>}
     <div className='add-cart-item'>
     {count>0 &&<><button onClick={()=>setCount(count-1)}><RiSubtractFill size={"15px"} color='red'/></button>
      
      <p>{count}</p></>}
      <button onClick={()=>setCount(count+1)}><BsPlusLg/></button>
      </div>
      </div>
  </div>
  )
}

export default DealItems;
