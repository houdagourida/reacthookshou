import React from 'react'

const StarRating = ({rate,handelRate}) => {
    const stars =(n)=>{
   let star =[]
   for(let i=1;i<=5;i++)
   {
     if(i<=n){
       star.push(<span key={i} onClick={()=> handelRate(i)} style={{color:"gold", fontSize:"20px"}} >★</span>)
     }
     else star.push(<span key={i} onClick={()=>handelRate(i)} style={{color:"black", fontSize:"20px" }}>★</span>)
   }
   return(star)
 }
    return(
        <div>
            {stars(rate)}
        </div>
    ) 
 }

export default StarRating
