import React from 'react'
import '../stylesheets/statesPage.css'
import { withRouter } from 'react-router-dom';

const Rajnagar = ({history,match, schools}) => {


    const visitSchool = (e) =>{
        history.push(`${match.url}/${e.id}`)
      }

    return (  <div>
    <h1 className='d-flex align-self-start heading'>Schools in Rajnagar</h1>
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
 
export default withRouter(Rajnagar);