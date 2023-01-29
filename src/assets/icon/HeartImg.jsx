import React from 'react'
import styled from "styled-components";

  
export default function HeartImg({ fill = '#686868',opacity='0.3',back='none' }) {
  return ( 
    
      <svg width="20" height="20" viewBox="0 0 24 24" fill={back} xmlns="http://www.w3.org/2000/svg">
<path   d="M11.8456 6.42726L12 6.59097L12.1544 6.42726C14.132 4.33053 17.4026 4.57697 19.0807 6.94915C20.57 9.05459 20.2133 12.0335 18.275 13.6776L12 19L5.725 13.6776C3.78668 12.0335 3.42999 9.05459 4.91934 6.94915C6.59738 4.57698 9.86801 4.33053 11.8456 6.42726Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
</svg> 
  
     
   
 




  )
}
