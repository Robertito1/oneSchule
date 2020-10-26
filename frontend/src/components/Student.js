import React, { useState } from 'react'
import '../stylesheets/student.css'

const Student = ({studentInfo}) => {
    

    const [expanded, setExpanded]  = useState(false)
    //Function sets student info to display more or less details
   const showStudent = () =>{
    if (expanded){
        return (
            <div>
                <b>{studentInfo.name}</b>
                <p>Class Of: {studentInfo.class}</p>
                <p>COMPETENCIES</p>
                <ul>{studentInfo.skills.map(e => <li>{e}</li>)}</ul>
                <button className='btn btn-warning p-2 m-2'onClick={()=>setExpanded(false)}>close</button>
            </div>
        )
    }else{
        return(
            <div>
            <p className='student' onClick={()=>setExpanded(!expanded)}>{studentInfo.name}</p>
            </div>
        )
    }
}

    return ( <div>
          {showStudent()}
          </div> );
}
 
export default Student;