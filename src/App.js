import { React, useState } from 'react'
import Map from './components/Map'
import "./App.css"


function App() {
  const [doctors, setDoctors] = useState([
    { 
      id: 1, 
      title: "Dra. Elizabeth", 
      full_name: "Dra. Elizabeth Gonzalez",
      office_name: "Dental",
      latitude: 20.635769, 
      longitude: -103.260210, 
      crystal_aligner: true, 
      smile_system: true 
    },
    { 
      id: 2, 
      title: "Dra. Clarissa", 
      full_name: "Dra. Clarissa Guzman", 
      office_name: "Dentalia",
      latitude: 20.630988, 
      longitude: -103.265787, 
      crystal_aligner: false, 
      smile_system: true 
    },
    { 
      id: 3, 
      title: "Dr. Eduardo", 
      full_name: "Dr. Eduardo Garduño García", 
      office_name: "Dental Smile Consultorio",
      latitude: 20.628950, 
      longitude: -103.260235, 
      crystal_aligner: true, 
      smile_system: true 
    }
  ])
  return (
    <div className="App">
      <Map 
        doctors={doctors}
        setDoctors={setDoctors}/>
    </div>
  );
}

export default App;
