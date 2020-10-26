import React, {useEffect , useState}from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Atlantis from "./pages/Atlantis";
import Footer from "./components/Footer";
import Olympus from "./pages/Olympus";
import KarmaTag from "./pages/KarmaTag";
import Rajnagar from "./pages/Rajnagar";
import College from "./pages/College";
import schoolService from './services/schools'
import "./App.css";


function App() {

  // The Entire Schools Are stored in App Component as a state Using 'Schools' variable
  const [schools, setSchools] = useState([])


// When the Component mounts a request is madeto to the backend which fetches all schools
  useEffect(() => {
    schoolService
    // getSchools is a function that makes an axios GET request
      .getSchools()
      .then(response => {
        setSchools(response.data)
      })
      .catch(error => {
        console.log('fail', error)
      })
  }, [])

  // schools a filtered into different  variables
  //and passed to their appropiate components
const schoolsInAtlantis = schools.filter(e => e.state === 'Atlantis')
const schoolsInOlympus = schools.filter(e => e.state === 'Olympus')
const schoolsInRajnagar = schools.filter(e => e.state === 'Rajnagar')
const schoolsInKarmatag = schools.filter(e => e.state === 'Karma-Tag')
  return (
    <div className="App">
      <Header />
      <Switch>
       <Route exact path="/" render={() => <Homepage schools={schools}/>} />
       <Route exact path="/atlantis" component={() => <Atlantis schools={schoolsInAtlantis}/>} /> 
       <Route exact path="/olympus" component={() => <Olympus schools={schoolsInOlympus} />} /> 
       <Route exact path="/karma-tag" component={() => <KarmaTag schools={schoolsInKarmatag}/>} /> 
       <Route exact path="/rajnagar" component={() => <Rajnagar schools={schoolsInRajnagar}/>} /> 
       <Route  path="/atlantis/:college" component={()=> <College schools={schoolsInAtlantis}/>}/>
       <Route  path="/olympus/:college" component={()=> <College schools={schoolsInOlympus}/>}/>
       <Route  path="/karma-tag/:college" component={()=> <College schools={schoolsInKarmatag}/>}/>
       <Route  path="/rajnagar/:college" component={()=> <College schools={schoolsInRajnagar}/>}/>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;

