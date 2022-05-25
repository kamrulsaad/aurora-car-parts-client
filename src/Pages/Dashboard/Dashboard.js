import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth)

    if (loading) return <Loading></Loading>

    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">
                <h1 className='text-2xl mt-2 font-bold '>Welcome to Dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 gap-2 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {user && <>
                        <li><Link to='/dashboard'>My Items</Link></li>
                        <li><Link to='/dashboard/addReview'>Add a review</Link></li>
                    </>}
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;