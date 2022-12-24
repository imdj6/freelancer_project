import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'
function Banner() {
  return (
    <div>
      <div style={{textAlign:'center',backgroundColor:'pink',padding:'8px'}}>
        SPECIAL OFFER
      </div>
      <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
        <div>
         <BsFacebook size={25} style={{marginRight:'15px'}}/>
         <BsTwitter size={25}  style={{marginRight:'15px'}}/>
         <BsInstagram size={25} />
        </div>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrbk7_LtwSlG36kj3Y3w75UXZ7-TE94YynvPa8OkY&s' width={35}/>
        </div>
        <div>
         <CgProfile size={25} style={{marginRight:'15px'}}/>
         <AiOutlineShoppingCart size={25} style={{marginRight:'15px'}}/>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',padding:'10px'}}>
        <div style={{marginRight:'30px'}}>Home</div>
        <div style={{marginRight:'30px'}}>HAIR</div>
        <div style={{marginRight:'30px'}}>BEARD</div>
        <div style={{marginRight:'30px'}}>PERFORMANCE</div>
        <div style={{marginRight:'30px'}}>WEIGHT LOSS</div>
        <div style={{marginRight:'30px'}}>SKIN</div>
        <div style={{marginRight:'30px'}}>CONSULT FOR FREE</div>
        <div style={{marginRight:'30px'}}>BLOG</div>
        <div style={{marginRight:'30px',backgroundColor:'pink',padding:'4px',borderRadius:'8%'}}>OFFERS</div>
        <AiOutlineSearch size={25} style={{marginRight:'15px'}}/>
      </div>
    </div>
  )
}

export default Banner
