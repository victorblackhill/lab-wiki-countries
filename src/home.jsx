import React from "react"
import importedCountries from "./countries.json"
import CountriesList from "./components/CountriesList/CountriesList.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"

const Home = () =>{

    return (    
                <div className="App">
                    <Navbar/>
                    <CountriesList importedCountries={importedCountries} />
                </div>
                )

    }
export default Home;