import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const UserRow = ({ index, user, refetch }) => {

    const { name, image, location, education, email, linkedIn, role } = user

    const handleMakeAdmin = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F2CA73',
            cancelButtonColor: '#EE4B2B',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.put(`http://localhost:5000/user/admin/${email}`)
                    .then(() => refetch())
                Swal.fire(
                    'Done!',
                    `${name} has been made an Admin`,
                    'success'
                )
            }
        })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            {
                                image ? <img src={image} alt="Avatar Tailwind CSS Component" /> :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                    </svg>
                            }
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {education}
                <br />
                <span class="badge badge-ghost badge-sm underline"><a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></span>
            </td>
            <td>{email}</td>
            <th>
                {
                    role === "Admin" ? <button class="btn btn-warning text-gray-100 btn-sm">Admin</button> :
                        <button onClick={handleMakeAdmin} class="btn btn-primary btn-xs">Make Admin</button>
                }
            </th>
        </tr>
    );
};

export default UserRow;