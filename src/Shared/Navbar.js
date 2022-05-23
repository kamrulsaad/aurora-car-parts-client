import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth)

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/allproducts'>All products</NavLink> </li>
        {user && <li><NavLink to='/dashboard'>Dashboard</NavLink> </li>}
        {user ? <>
            {user.photoURL ? <img className="avatar w-12 cursor-pointer rounded-full" src={user?.photoURL} alt="" /> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
            }
            <button className='btn btn-ghost' onClick={() => signOut(auth)}>Sign Out</button>
        </> : <>
            <li><NavLink to='/login'>Login</NavLink> </li>
            <li><NavLink to='/signup'>Sign Up</NavLink> </li>
        </>}
    </>

    return (
        <div class="navbar bg-base-300 fixed top-0 z-50 lg:px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 class="btn btn-ghost uppercase text-xl lg:text-3xl">
                    <Link to='/'>Aurora Car Parts</Link>
                </h1>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 gap-4">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;