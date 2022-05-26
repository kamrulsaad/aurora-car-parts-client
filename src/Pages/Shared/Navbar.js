import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import useUsers from '../../hooks/useUsers'

const Navbar = () => {

    const [user, loading] = useAuthState(auth)
    const [userData, isLoading] = useUsers(user?.email)

    const userName = user?.displayName.split(' ')[0]

    if (loading || isLoading) return <Loading></Loading>

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/allproducts'>All products</NavLink> </li>
        <li><NavLink to='/blogs'>Blogs</NavLink> </li>
        <li><NavLink to='/myPortfolio'>My Portfolio</NavLink> </li>
        {user && <>
            <li><NavLink to='/dashboard'>Dashboard</NavLink> </li>
            <li><label htmlFor="my-drawer-2" className="my-2 drawer-button lg:hidden">Options</label></li>
        </>
        }
        {user ? <>
            <button className='btn btn-xs btn-ghost mt-3'>{userName}</button>
            {(userData.data.image || user.photoURL) ? <img className="avatar w-12 cursor-pointer rounded-full" src={userData.data.image || user?.photoURL} alt="" /> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
            }
            <button className='btn btn-outline lg:btn-sm lg:mt-2' onClick={() => {
                signOut(auth)
                localStorage.removeItem('accessToken')
            }}>Sign Out</button>
        </> : <>
            <li><NavLink to='/login'>Login</NavLink> </li>
            <li><NavLink to='/signup'>Sign Up</NavLink> </li>
        </>}
    </>

    return (
        <div className="navbar bg-base-200 fixed top-0 z-50 lg:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu gap-2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 className="btn btn-ghost uppercase text-xl lg:text-3xl">
                    <Link to='/'>Aurora Car Parts</Link>
                </h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;