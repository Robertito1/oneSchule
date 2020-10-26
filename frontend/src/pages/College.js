import React, { useEffect, useState } from 'react'
import Student from '../components/Student'
import {withRouter} from 'react-router-dom'
import schoolsServices from '../services/schools'
import  '../stylesheets/college.css'

const College = ({match ,schools}) => {

  const [showAll, setShowAll] = useState(false)
  let [college, setCollege] = useState('')
  const [closeSchools, setCloseSchools] = useState([])

  useEffect(()=>{
  const handlePageInfo = async ()=>{
const university =  await schools.find(e => e.id === match.params.college)
       setCollege(university)
   const similarschools = await  schoolsServices.getSchoolsCloseby(university.id)
          setCloseSchools(similarschools.data)
    }
    handlePageInfo()
  },[match, schools])

  const displayStudents = () =>{
    if(!college){
      return(<div>loading</div>)
    }
    else if(showAll){
      return (
        <div>
        {college.students.map(e => <Student key={e.id} studentInfo={e}/>)}
          <button className='btn btn-primary text-white' onClick={()=>setShowAll(false)}>show less</button>
        </div>     
      )
    }else{
      return(
        <div>
        {college.students.slice(0, 5).map(e => <Student key={e.id} studentInfo={e}/>)}
          <button className='btn btn-primary text-white' onClick={()=>setShowAll(true)}>show all</button>
        </div>     
      )
    }
  }

  const displayCloseSchools = () =>{
    if(closeSchools.length === 0){
      return (
        <div>
          <h2>Loading Schools Closeby...</h2>
        </div>
      )
    }else{
      return (
        <div>
          {closeSchools.map(e => <p key={e.id} className='bold text-center'>{e.name}</p>)}
        </div>
      )
    }
  }
  const mapTh = (e) => {
   e.map(e => <li key={e}>{e}</li>) 
  }
  return(
    <React.Fragment>
      <div className='collegePage'>
          <h1 className='text-center title'>{college.name}</h1>
          <p className='bold'>Established: {college.established}</p>
          <p className='bold'>City: {college.city}</p>
          <p className='bold'>State: {college.state}</p>
          {console.log(college.courses)}
          <p className='bold'>Courses: {college.courses}</p>
          <div>
            <p className='bold'>Students</p>
            {displayStudents()}
          </div>
          <div>
          <h1 className='text-center title text-warning'>Other Schools in {college.city}</h1>       
               {displayCloseSchools()}
          </div>
      </div>
    </React.Fragment>
  );
}
 
export default withRouter(College);