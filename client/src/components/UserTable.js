import '../styles/components/table.css'

export default function UserTable(props) {
    const { users } = props

    return (
        <div className='table-parent'>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Income</th>
                        <th>City</th>
                        <th>Car</th>
                        <th>Quote</th>
                        <th>Phone Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            < tr key={user.id}>
                                <td className='table__id'>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><span className={`table-gender table-gender--${user.gender}`}>{user.gender}</span></td>
                                <td className='table__income'>{user.income}</td>
                                <td>{user.city}</td>
                                <td>{user.car}</td>
                                <td>{user.quote}</td>
                                <td>{user.phone_price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}