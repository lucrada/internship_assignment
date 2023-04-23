import { NavLink } from 'react-router-dom'
import '../styles/components/header.css'

export default function Header() {
    return (
        <section className='header'>
            <div className='header__left'>
                <h1>Internship Assignment</h1>
            </div>
            <div className='header__right'>
                <NavLink to='/'>Table 1</NavLink>
                <NavLink to='/table2'>Table 2</NavLink>
                <NavLink to='/table3'>Table 3</NavLink>
                <NavLink to='/table4'>Table 4</NavLink>
                <NavLink to='/table5'>Table 5</NavLink>
            </div>
        </section>
    );
}