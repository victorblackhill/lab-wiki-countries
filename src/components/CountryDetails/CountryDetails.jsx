import React from "react"
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom"

const CountryDetails = ({importedCountries})=> {
    
    let userId = useParams().id
    const theCountry = importedCountries.find((country) => country.alpha3Code === userId)
    console.log(theCountry)
    return( 
            <div>
            <span>{theCountry.name.common}</span>
                <ul>
                    {theCountry.borders.map((border)=> <li key = {border}><Link to={"/" + border}>{border}</Link></li> )}
                </ul>
                
                   
            </div>
            )

}

export default CountryDetails

//