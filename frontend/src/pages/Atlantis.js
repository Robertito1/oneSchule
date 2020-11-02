import React from 'react'
import {withRouter} from 'react-router-dom'
import atlantisImage from '../assets/atlantis.jpg'
import Hero from '../components/hero.js'
import '../stylesheets/statesPage.css'

const Atlantis = ({history,match, schools}) => {


   const visitSchool = (e) =>{
     history.push(`${match.url}/${e.id}`)
   }


    return (  <div>
     <Hero image={atlantisImage}/>
    <h1 className='d-flex align-self-start heading'>Schools in Atlantis</h1>
    <table>
    <thead>
    <tr>
         <th>founded</th>
        <th>Name</th>
        <th>City</th>
    </tr>     
    </thead>
    <tbody>
       { schools.map(e => <tr key={e.id}>
         <td>{e.established}</td>
         <td className='school' onClick={()=>visitSchool(e)}>{e.name}</td>
         <td>{e.city}</td>
         </tr>)}
    </tbody>    
    </table>
      
    </div>);
}
 
export default withRouter(Atlantis);