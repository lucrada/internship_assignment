import UserTable from '../components/UserTable'
import '../styles/pages/table_page.css'
import React, { useEffect } from 'react'
import { fetchTable4 } from '../api'

export default function Table4() {
    const [users, setUsers] = React.useState([])

    async function fetchUserData() {
        const fetchedUsers = await fetchTable4()
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
                <h3>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</h3>
            </div>
            <div className='table-page--table-content'>
                {users.length === 0 ? <span>Fetching the table...</span> : <UserTable users={users} />}
            </div>
        </section >
    );
}