import CityTable from '../components/CityTable'
import '../styles/pages/table_page.css'
import React, { useEffect } from 'react'
import { fetchTable5 } from '../api'

export default function Table5() {
    const [cities, setCities] = React.useState([])

    async function fetchCityData() {
        const fetchedCities = await fetchTable5()
        if (fetchedCities.success) {
            setCities(fetchedCities.cities)
            return
        }
        alert('An error occured while fetching users!')
    }

    useEffect(() => {
        fetchCityData()
    }, []);

    return (
        <section className='table-page'>
            <div className='table-page--condition'>
                <h3>Show the data of top 10 cities which have the highest number of users and their average income</h3>
            </div>
            <div className='table-page--table-content'>
                {cities.length === 0 ? <span>Fetching the table...</span> : <CityTable cities={cities} />}
            </div>
        </section >
    );
}