import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../API/axiosPrivate';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const {data: allUsers, isLoading, refetch} = useQuery('allUsers', () => axiosPrivate.get('https://aurora-car-parts.herokuapp.com/allUsers'))
    if(isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <h1 className='text-xl font-semibold text-center'> ALL USERS</h1>
            <div className="overflow-x-auto w-full mt-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.data.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;