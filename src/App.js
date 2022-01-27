import React from "react"
import "./App.css";
import importedCountries from "./countries.json"
import Navbar from "./components/Navbar/Navbar.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./home.jsx"
import CountryDetails from "./components/CountryDetails/CountryDetails.jsx"

function App() {
  return      (<Routes>
                  <Route path="/" element={ <Home/> }>
                    <Route path="/:id" element={<CountryDetails importedCountries={importedCountries} />} />
                  </Route>
              </Routes>)
  
  

}
export default App;

/*
<div className="App">

<Navbar/>

<CountriesList importedCountries={importedCountries} />

</div>;
*/