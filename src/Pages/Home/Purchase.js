import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Purchase = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${id}`)
            .then(data => setProduct(data.data))
    }, [id])

    const onSubmit = data => console.log(data)

    return (
        <div className='mt-20 min-h-screen flex flex-wrap gap-20 items-center justify-center'>
            <ProductsCard pd={product} />

            <div class="card w-96 bg-base-300 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Order Amount</span>
                            </label>
                            <input defaultValue={50} {...register("amount", {
                                required: {
                                    value: true,
                                    message: "Please enter how much you want to buy"
                                },
                                min: {
                                    value: 50,
                                    message: 'You cannot order less than 50'
                                },
                                max: {
                                    value: product.stock,
                                    message: `Sorry, Only ${product.stock} products are available`
                                }
                            })}
                                type="number"
                                placeholder="Order Amount"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.amount?.type === 'required' && <span className="label-text-alt text-red-600">{errors.amount.message}</span>}
                                {errors.amount?.type === 'min' && <span className="label-text-alt text-red-600">{errors.amount.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your password"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or long'
                                }
                            })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>



                        <input className='btn btn-outline btn-primary w-full' value='login' type="submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;