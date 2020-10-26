import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import {withRouter} from 'react-router-dom'
import Legend from "../components/Legend";

import '../stylesheets/homepage.css'


const Homepage = ({history ,schools}) => {

  //FOR Analysis and the chart schools a filtered into different  constants
  //and used to form data
const atlantisSchools = schools.filter(e => e.state === 'Atlantis')
const olympusSchools = schools.filter(e => e.state === 'Olympus')
const rajnagarSchools = schools.filter(e => e.state === 'Rajnagar')
const karmaTagSchools= schools.filter(e => e.state === 'Karma-Tag')

  const data = [
    { title: 'atlantis', value: atlantisSchools.length, color: '#E38627' ,path: '/atlantis' },
    { title: 'rajnagar', value: olympusSchools.length, color: '#C13C37' ,path: '/rajnagar' },
    { title: 'olympus', value: rajnagarSchools.length, color: '#6A2135',path: '/olympus' },
    { title: 'karma-tag', value: karmaTagSchools.length, color: '#D12484' ,path: '/karma-tag' },
  ]

  //Rendering Schools conditionally
  const renderSchools= () =>{
   if(schools.length === 0){
     return(
       <div>
         <h1 className='m-4'>Loading...</h1>
       </div>
     )
   }else{
     return(
       <div className='d-flex justify-content-between hero'>
         <PieChart
        className='chart'
        data={data}
        lineWidth={50}
        onClick={(e , s)=>{ history.push(data[s].path) }}
        />
        <Legend data={data} totalSchools={schools.length} />
      </div>    
     )
   }
  }
  return (
    <div>
      <h1 className='heading'>Schools chart By State</h1> 
          {renderSchools()}
    </div>
  );
};

export default withRouter(Homepage);
