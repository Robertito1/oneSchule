import React from "react"
import '../stylesheets/legend.css'

const Legend = ({data, totalSchools}) => {

// function takes a number and calculates it percentage of the total schools
   const getPercentage = (n)=>{
      const percent =(n/totalSchools )*100
      return `${percent}%`
    }
//Legend uses the information to render individual data
    return ( <div className='box'>
                 {data.map(e=> <p key={e.title} className='bold'>
                      <span>
                         <svg height="50" width="50">
                            <circle cx="30" cy="30" r="10" stroke="black" strokeWidth="0" fill={e.color} />
                         </svg>
                       </span>
                       {e.title} {"\u00A0"}
                       <span className='bold'>{getPercentage(e.value)}</span>
                    </p>)}
              </div> );
}
 
export default Legend;