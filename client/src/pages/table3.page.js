import UserTable from '../components/UserTable'
import '../styles/pages/table_page.css'
import React, { useEffect } from 'react'
import { fetchTable3 } from '../api'

export default function Table3() {
    const [users, setUsers] = React.useState([])

    async function fetchUserData() {
        const fetchedUsers = await fetchTable3()
        if (fetchedUsers.success) {
            setUsers(fetchedUsers.users)
            return
        }
        alert('An error occured while fetching users!')
    }

    useEffect(() => {
        fetchUserData()
    }, []);

    return (
        <section className='table-page'>
            <div className='table-page--condition'>
                <h3>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</h3>
            </div>
            <div className='table-page--table-content'>
                {users.length === 0 ? <span>Fetching the table...</span> : <UserTable users={users} />}
            </div>
        </section >
    );
}