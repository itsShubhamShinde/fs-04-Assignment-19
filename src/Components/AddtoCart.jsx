import React, { useContext } from 'react'
import { GlobalData } from './Context/DataProvider'
import './Styling/Addtocart.css'

const AddtoCart = () => {
 const { addtocart, setAddtocart } = useContext(GlobalData)

 const deletefnc = (id)=>{
  const result = addtocart.filter((ele)=>{
    return ele.id !== id
  })
  setAddtocart(result)
 }
  return (
    <div className='AddtocartOuterDiv'>
      <h1>Add to Cart items</h1>
      <div className='lowerDiv'>
      {
        addtocart.length === 0 ? <div>Add to Cart is Empty</div> :
        <div className='wrapperDiv'>
         {  addtocart.map((ele)=>{
            return <div className='AddtocartItems'>
                  <div className='imageDiv'>
                    <img src={ele.image} alt="" width="100%" height="100%"/>
                  </div>
                  <div className='detailDiv'>
                    <h2 style={{color:"green"}}>{ele.category}</h2>
                    <h1 style={{color:"black"}}>{ele.title}</h1>
                    <h6>{ele.description}</h6>
                  </div>
                  <div className='priceDiv'>
                    <span>
                    <h2>Price : </h2>
                    <h2 style={{color:"red"}}>${ele.price}</h2>
                    </span>
                    <button onClick={()=>{deletefnc(ele.id)}}>Delete</button>
                  </div>
            </div>
          })}
        </div>
      }
      </div>
    </div>
  )
}

export default AddtoCart