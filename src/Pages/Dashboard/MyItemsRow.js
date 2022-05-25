import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const MyItemsRow = ({ index, od, refetch }) => {

    const { product, purchaseAmount, payableAmount, paid, _id, transactionId } = od

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

    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td className='capitalize'>{product}</td>
            <td>{purchaseAmount}</td>
            <td>${Math.floor(payableAmount)}</td>
            <td>
                {paid ? <div className='w-fit'><span className='btn btn-xs btn-success'>Paid</span>
                <span className='ml-2'>Transaction Id: <span className='font-bold'>{transactionId}</span> </span></div> : <>
                    <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-accent mr-4'>Pay Now</button></Link>
                    <button onClick={handleDelete} className='btn btn-sm btn-error '>Cancel Order</button>
                </>}
            </td>
        </tr>
    )
};

export default MyItemsRow;