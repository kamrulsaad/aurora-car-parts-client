import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const ManageOrderRow = ({ pd, index, refetch }) => {

    const { product, payableAmount, purchaseAmount, paid, userName, email, status, _id } = pd

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`http://localhost:5000/purchase?id=${_id}`)
                    .then(() => refetch())
                Swal.fire(
                    'Deleted!',
                    'Your order has been cancelled.',
                    'success'
                )
            }
        })
    }

    const handleUpdate = () => {
        axiosPrivate.put(`http://localhost:5000/purchase/${_id}`)
            .then(data => {
                if(data.data.modifiedCount){
                    toast.success("Order has been Shipped")
                    refetch()
                }else{
                    toast.error("Something went wrong, please try again")
                }
            })
    }

    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td className='capitalize'>{product}</td>
            <td>${payableAmount}</td>
            <td>{purchaseAmount}</td>
            <td>
                {userName}
                <br />
                <span class="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>
                {
                    paid ?
                        <button className='btn btn-xs btn-success'>Paid</button> :
                        <button className='btn btn-xs btn-error'>Unpaid</button>
                }
            </td>
            <td>{status && <button className='btn btn-xs btn-accent'>{status}</button>}</td>
            <td>{
                paid ? <button disabled={status==="Approved"} onClick={handleUpdate} className='btn btn-xs btn-warning'>Update</button> :
                    <button onClick={handleDelete} className='btn btn-xs btn-accent'>Delete</button>
            }</td>
        </tr>
    );
};

export default ManageOrderRow;