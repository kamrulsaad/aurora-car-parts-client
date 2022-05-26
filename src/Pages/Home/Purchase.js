import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import ProductsCard from './ProductsCard';

const Purchase = () => {

    const { id } = useParams()
    const [disabled, setDisabled] = useState(false)
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth)
    const [amountError, setAmountError] = useState('')

    useEffect(() => {
        axiosPrivate.get(`https://aurora-car-parts.herokuapp.com/purchase/${id}`)
            .then(data => setProduct(data.data))
    }, [id])

    const handlePurchaseOrder = e => {
        e.preventDefault()
        setAmountError('')
        const purchaseAmount = parseInt(e.target.amount.value)
        if (purchaseAmount < product.minOrder || purchaseAmount > product.stock) {
            setAmountError(`Sorry, You cannot order less than ${product.minOrder} units or more than ${product.stock}`)
            e.target.reset()
            return setDisabled(true)
        }
        const purchase = {
            product : product.name,
            productId : product._id,
            payableAmount : Math.round(product.price* purchaseAmount),
            purchaseAmount,
            phone: e.target.phone.value,
            address: e.target.address.value,
            userName: e.target.userName.value,
            email: e.target.email.value,
        }

        axios.post('https://aurora-car-parts.herokuapp.com/purchase', purchase)
        .then(data => {
            if(data.data.success) {
                toast.success(`Your Order for ${product.name} has been Placed`)
            }
        })

        e.target.reset()
    }

    return (
        <div className='mt-16 lg:mt-8 min-h-screen flex flex-wrap gap-20 items-center justify-center'>
            <ProductsCard pd={product} />
            <div className="divider divider-horizontal hidden md:flex"></div>

            <div className="card w-96 bg-base-300 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handlePurchaseOrder}>

                        <h1 className='text-center text-lg font-semibold underline mb-4 capitalize'>Order For: {product.name}</h1>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input disabled value={user.displayName}
                                name='userName'
                                type="text"
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input disabled value={user.email}
                                type="email" name='email'
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text" name='phone'
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text" name='address'
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Order Amount</span>
                            </label>
                            <input onChange={() => setDisabled(false)} defaultValue={product.minOrder}
                                type="number" name='amount' required
                                className="input input-bordered w-full" />
                            <label className="label">
                                <span className="label-text-alt text-red-600 mb-2">{amountError}</span>
                            </label>
                        </div>

                        <input disabled={disabled} className='btn btn-primary w-full' value='Place order' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;