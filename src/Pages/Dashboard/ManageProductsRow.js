import React from 'react';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const ManageProductsRow = ({pd, index, refetch}) => {

    const {name, price, stock, _id} = pd

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
                axiosPrivate.delete(`https://aurora-car-parts.herokuapp.com/products/?id=${_id}`)
                .then(() => refetch())
              Swal.fire(
                'Deleted!',
                'The product has been deleted',
                'success'
              )
            }
        })
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td className='capitalize'>{name}</td>
            <td>${price}</td>
            <td>{stock}</td>
            <td>
                <button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsRow;