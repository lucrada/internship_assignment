import '../styles/components/table.css'

export default function CityTable(props) {
    const { cities } = props

    return (
        <div className='table-parent'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>City</th>
                        <th>Average Income</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cities.map(city =>
                            < tr key={city.city}>
                                <td className='table__id'>{city.count}</td>
                                <td>{city.city}</td>
                                <td className='table__income'>${city.avgIncome}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}