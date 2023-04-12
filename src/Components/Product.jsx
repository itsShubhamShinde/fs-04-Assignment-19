import React, { useContext, useEffect } from 'react'
import { GlobalData } from './Context/DataProvider'
import './Styling/Product.css'


const Product = () => {
    const {product,setProduct,setAddtocart,addtocart } = useContext(GlobalData)
    useEffect(() => {
        const api=async () =>{
            const resp =await  fetch("https://fakestoreapi.com/products")
            const data =await resp.json();
            setProduct(data)
        }
        api()
    },[])
    return (
        <div className='productOuterDiv'>
            {
                product.lenght !== 0 ? <div className='productDetails'>
                    {
                        product.map((ele)=>{
                            return <div className='cart'>
                            <h3>{ele.category}</h3>
                            <img src={ele.image} alt="" width="70%" height="60%"/>
                            <p><b>${ele.price}</b></p>
                            <button onClick={()=>{ setAddtocart([...addtocart, ele])}}>AddToCart</button>
                            </div>
                        })
                    }
                </div> 
                
                : <h2>Data not Present</h2>
            }
        </div>
    )
}

export default Product