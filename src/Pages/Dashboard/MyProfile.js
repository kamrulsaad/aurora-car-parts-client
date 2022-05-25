import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import useUsers from '../../hooks/useUsers';
import Loading from '../Shared/Loading'

const MyProfile = () => {

    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [userData, isLoading, refetch] = useUsers(user?.email)

    if (isLoading) return <Loading></Loading>

    const { education, location, phone, linkedIn, image, name, role } = userData.data

    const onSubmit = async data => {
        const imgbbAPIkey = '74922ada22c311f177ebbc5022b4cfed';
        const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    const img = result.data.url
                    const updatedUser = {
                        location: data.location,
                        education: data.education,
                        phone: data.phone,
                        linkedIn: data.linkedIn,
                        image: img
                    }
                    axiosPrivate.put(`http://localhost:5000/update/${user?.email}`, updatedUser)
                        .then(res => {
                            if (res.data.acknowledged) {
                                toast.success("Profile Updated Successfully")
                                reset()
                                refetch()
                            }
                            else {
                                toast.error("Somethig is wrong, Please try again")
                            }
                        })
                }
            })
    }

    return (
        <div className='w-full'>
            <h1 className='text-xl text-center font-semibold'>My Profile</h1>
            <div className=' mt-2 flex flex-wrap gap-20 items-center justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        {
                            (user.photoURL || image) ?
                                <img src={user?.photoURL || image} alt="Shoes" class="rounded-full" /> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-full mt-1 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                        }
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name || user?.displayName}</h2>
                        {
                            role && <span className='badge badge-success'>{role}</span>
                        }
                        <p>Email: {user?.email}</p>
                        {
                            location && <>
                                <p>Location: {location}</p>
                                <p>Education: {education}</p>
                                <p>Phone: {phone}</p>
                                <p><a className='underline inline' href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> </p>
                            </>
                        }
                    </div>
                </div>
                <div class="divider divider-horizontal"></div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">

                        <div class="form-control">
                            <input type="text" {...register("education", {
                                required: {
                                    value: true,
                                    message: "Please enter your Educational Background"
                                }
                            })} placeholder="Education" class="input input-bordered" />
                            <label className="label">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-600">{errors.education.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <input type="text" {...register("location", {
                                required: {
                                    value: true,
                                    message: "Please enter your location"
                                }
                            })} placeholder="Location (City/District)" class="input input-bordered" />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-600">{errors.location.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <input type="text" {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Please enter your Phone Number"
                                }
                            })} placeholder="Phone Number" class="input input-bordered" />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                            </label>
                        </div>

                        <div class="form-control">
                            <input type="text" {...register("linkedIn", {
                                required: {
                                    value: true,
                                    message: "Please enter your LinkedIn Profile Link"
                                }
                            })} placeholder="LinkedIn Profile Link" class="input input-bordered" />
                            <label className="label">
                                {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-600">{errors.linkedIn.message}</span>}
                            </label>
                        </div>

                        <div class="flex justify-center">
                            <div class="w-96">
                                <input {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Please upload your image"
                                    }
                                })} class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-base-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-base-200 focus:border-blue-600 focus:outline-none" type="file" id="formFile" name='image' />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div class="form-control mt-3">
                            <input type='submit' value='Update Profile' class="btn btn-primary btn-outline" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;   