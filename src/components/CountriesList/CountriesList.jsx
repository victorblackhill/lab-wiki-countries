import React from "react"
import {Link, Outlet} from "react-router-dom"
import "./CountriesList.css"


function CountriesList ({importedCountries}){


    return (

        <div className="two-columns">
            <div className="the-list">
                {importedCountries.map((country)=> (
                    <div className="the-country">
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() +".png"} />
                        <Link to={"/" + country.alpha3Code}>{country.name.common}</Link>
                    </div>
                ) )}
            </div>
            <div>
                <Outlet />
            </div>


        </div>

    )


}

export default CountriesList
