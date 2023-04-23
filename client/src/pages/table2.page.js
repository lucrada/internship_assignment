import UserTable from '../components/UserTable'
import '../styles/pages/table_page.css'
import React, { useEffect } from 'react'
import { fetchTable2 } from '../api'

export default function Table2() {
    const [users, setUsers] = React.useState([])

    async function fetchUserData() {
        const fetchedUsers = await fetchTable2()
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
                <h3>Male Users which have phone price greater than 10,000</h3>
            </div>
            <div className='table-page--table-content'>
                {users.length === 0 ? <span>Fetching the table...</span> : <UserTable users={users} />}
            </div>
        </section >
    );
}