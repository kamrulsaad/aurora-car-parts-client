import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductsCard from './ProductsCard';

const Purchase = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth)
    const [amountError, setAmountError] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${id}`)
            .then(data => setProduct(data.data))
    }, [id])

    const handlePurchaseOrder = e => {
        e.preventDefault()
        setAmountError('')
        const purchaseAmount = parseInt(e.target.amount.value)
        if (purchaseAmount < 50 || purchaseAmount > product.stock) {
            setAmountError("Sorry, You cannot order less than 50 units or more than the available units in stock")
            return
        }
        const purchase = {
            product : product.name,
            productId : product._id,
            payableAmount : product.price* purchaseAmount,
            purchaseAmount,
            userName: e.target.userName.value,
            email: e.target.email.value,
        }
        console.log(purchase);
    }

    return (
        <div className='mt-16 lg:mt-8 min-h-screen flex flex-wrap gap-20 items-center justify-center'>
            <ProductsCard pd={product} />
            <div class="divider divider-horizontal"></div>

            <div class="card w-96 bg-base-300 shadow-xl">
                <div class="card-body">
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
                            <input defaultValue={50}
                                type="number" name='amount' required
                                className="input input-bordered w-full" />
                            <label className="label">
                                <span class="label-text-alt text-red-600 mb-2">{amountError}</span>
                            </label>
                        </div>

                        <input className='btn btn-primary w-full' value='Place order' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;