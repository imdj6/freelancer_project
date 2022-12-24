import React from 'react'
import product from '../../src/assests/product.png'
import certification from '../../src/assests/certification.png'
import {AiFillStar} from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product_image'>
        <div>
            <img src={product} width={350}/>
        </div>
        <div>
            <img src={product} width={100}/>
            <img src={product} width={100}/>
            <img src={product} width={100}/>
        </div>
        <div className='product_cert'><img src={certification}/></div>
      </div>
      <div className='product_desc'>
        <div className='product_review'>
            <div className='product_review_content'>
            <div style={{marginRight:'10px'}}><AiFillStar size={20} color='yellow'/></div>
            <div style={{marginRight:'10px'}}>5.0</div>
            <div style={{marginRight:'10px'}}>(66 reviews)</div>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <BsFillShareFill size={22} color='red' />
                <div style={{marginLeft:'13px',color:'red'}}>
                    Share
                </div>
            </div>
        </div>
        <div className='product_slogan'>Reduces Dandruff and improves hair growth</div>
        <div className='product_name'>Hair Oil with Onion & Bhringraj Extracts</div>
        <div style={{display:'flex',marginTop:'10px',alignItems:'center'}}>
            <div><BiRupee size={20} color='red' style={{marginTop:'5px'}} /></div>
            <div className='product_price'>1234</div>
            <div className='product_price'>1234</div>
            <div className='product_price' style={{color:'red',fontWeight:'bolder'}}>50% OFF</div>
        </div>
        <div className='product_buy'>

        </div>
        <div className='product_slogan'>
        Over 88% of our customers saw visible results after using the product consistently for 3 months
        </div>
      </div>
    </div>
  )
}

export default Product
