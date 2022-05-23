import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><NavLink to='/'>Item 1</NavLink> </li>
        <li tabindex="0">
            <NavLink to='/'>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </NavLink> 
            <ul class="p-2">
                <li><NavLink to='/'>Submenu 1</NavLink> </li>
                <li><NavLink to='/'>Submenu 2</NavLink> </li>
            </ul>
        </li>
        <li><NavLink to='/'>Item 3</NavLink> </li>
    </>

    return (
        <div class="navbar bg-base-200 fixed top-0 z-50 lg:px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to='/' class="btn btn-ghost uppercase text-2xl">
                    Aurora Car Parts
                </NavLink> 
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