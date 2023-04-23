import UserTable from '../components/UserTable'
import '../styles/pages/table_page.css'
import React, { useEffect } from 'react'
import { fetchTable1 } from '../api'

export default function Table1() {
    const [users, setUsers] = React.useState([])

    async function fetchUserData() {
        const fetchedUsers = await fetchTable1()
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
                <h3>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”</h3>
            </div>
            <div className='table-page--table-content'>
                {users.length === 0 ? <span>Fetching the table...</span> : <UserTable users={users} />}
            </div>
        </section >
    );
}