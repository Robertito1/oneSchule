import React from 'react'
import '../stylesheets/statesPage.css'
import Hero from '../components/hero'
import { withRouter } from 'react-router-dom';
import karmaTajImage from '../assets/Kamar-Taj.png'


const KarmaTag = ({history, match, schools}) => {
    const visitSchool = (e) =>{
        history.push(`${match.url}/${e.id}`)
      }

      
    return (  <div>
    <Hero image={karmaTajImage} />
    <h1 className='d-flex align-self-start heading'>Schools in Karma-Tag</h1>
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
 
export default withRouter(KarmaTag);