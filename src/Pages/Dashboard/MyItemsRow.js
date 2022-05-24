import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const MyItemsRow = ({ index, od, refetch }) => {

    const { product, purchaseAmount, payableAmount, paid, _id } = od

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
                refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
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
                {(!paid) && <>
                    <button className='btn btn-xs btn-success mr-4'>Pay Now</button>
                    <button onClick={handleDelete} className='btn btn-xs btn-error '>Cancel Order</button>
                </>}
            </td>
        </tr>
    )
};

export default MyItemsRow;