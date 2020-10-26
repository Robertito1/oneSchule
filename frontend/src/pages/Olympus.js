import React from 'react'
import '../stylesheets/statesPage.css'
import { withRouter } from 'react-router-dom';


const Olympus = ({history,match, schools}) => {

    const visitSchool = (e) =>{
        history.push(`${match.url}/${e.id}`)
      }

      
    return (  <div>
    <h1 className='d-flex align-self-start heading'>Schools in Olympus</h1>
            <table>
    <thead>
    <tr key='headers'>
         <th key='founded'>founded</th>
        <th key='name'>Name</th>
        <th key='city'>City</th>
    </tr>     
    </thead>
    <tbody>
        { schools.map(e => <tr key={e.id}>
         <td key={e.established}>{e.established}</td>
         <td key={e.name} className='school' onClick={()=>visitSchool(e)}>{e.name}</td>
         <td key={e.city} >{e.city}</td>
         </tr>)}
    </tbody>
    </table>
    </div>);
}
 
export default withRouter(Olympus);