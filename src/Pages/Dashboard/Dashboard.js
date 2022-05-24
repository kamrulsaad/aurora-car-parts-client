import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth)

    if(loading) return <Loading></Loading>

    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">
                <h1 className='text-2xl mt-2 font-bold '>Welcome to Dashboard</h1>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {user && <>
                        <li><NavLink to='/dashboard'>My Items</NavLink></li>
                        <li><NavLink to='/dashboard/addReview'>Add a review</NavLink></li>
                        <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;