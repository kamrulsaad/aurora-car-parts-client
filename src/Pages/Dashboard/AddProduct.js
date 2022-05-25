import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosPrivate from '../../API/axiosPrivate';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (!data.url && !data.file.length) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must provide at least an URL or a local image for the product Image.'
            })
            return
        }
        if (!!data.url && !!data.file.length) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can only provide an URL or any one local image file.'
            })
            reset()
            return
        }

        if (!!data.url) {
            const newProduct = {
                name: data.name,
                description: data.description,
                price: parseInt(data.price),
                stock: parseInt(data.stock),
                minOrder: parseInt(data.minOrder),
                img: data.url
            }
            axiosPrivate.post('http://localhost:5000/products', newProduct)
                .then(res => {
                    if (res.data.acknowledged) {
                        toast.success("Product Added Successfully")
                        reset()
                        return
                    }
                    else {
                        toast.error("Somethig is wrong, Please try again")
                        return
                    }
                })
        }
        else {
            const imgbbAPIkey = '74922ada22c311f177ebbc5022b4cfed';
            const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`
            const image = data.file[0]
            const formData = new FormData();
            formData.append('image', image);
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result?.success) {
                        const img = result.data.url;
                        const newProduct = {
                            name: data.name,
                            description: data.description,
                            price: parseInt(data.price),
                            stock: parseInt(data.stock),
                            minOrder: parseInt(data.minOrder),
                            img
                        }
                        axiosPrivate.post('http://localhost:5000/products', newProduct)
                            .then(res => {
                                if (res.data.acknowledged) {
                                    toast.success("Product Added Successfully")
                                    reset()
                                }
                                else {
                                    toast.error("Somethig is wrong, Please try again")
                                }
                            })
                    }
                })
        }

    }

    return (
        <div className='h-fit mt-2 flex justify-center'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center uppercase ">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please enter Product Name"
                                }
                            })}
                                type="text"
                                placeholder="Product name"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <textarea {...register("description", {
                                required: {
                                    value: true,
                                    message: "Please enter Product Description"
                                }
                            })}
                                type="text"
                                placeholder="Product Description"
                                className="input h-20 input-bordered w-full" />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input {...register("price", {
                                required: {
                                    value: true,
                                    message: "Please enter Product Price"
                                }
                            })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input {...register("minOrder", {
                                required: {
                                    value: true,
                                    message: "Please enter Product Amount"
                                }
                            })}
                                type="number"
                                placeholder="Minimum Order Quantity"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-600">{errors.minOrder.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input {...register("stock", {
                                required: {
                                    value: true,
                                    message: "Please enter Product Amount"
                                }
                            })}
                                type="number"
                                placeholder="Product Amount"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.stock?.type === 'required' && <span className="label-text-alt text-red-600">{errors.stock.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input {...register("url")}
                                type="text"
                                placeholder="Product Image URL"
                                className="input input-bordered w-full" />
                        </div>

                        <div class="divider">or</div>

                        <div class="flex justify-center">
                            <div class="w-96">
                                <input {...register("file")} class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-base-200 focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                            </div>
                        </div>

                        <input className='btn w-full mt-1' value='Add Product' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;