import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [googlesignIn, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user|| googleUser)

    useEffect(() => {
        if (token) navigate('/')
    },[navigate, token])

    if (loading || googleLoading || updating) return <Loading></Loading>

    const signInError = googleError || error || updateError;

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

    return (
        <div class="hero min-h-screen bg-base-200 mt-16 lg:mt-0">
            <div class="hero-content flex-col gap-12 lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Register now!</h1>
                    <p class="py-6 max-w-lg">Join our worldwide services today. You only choose and we create what you need. </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
                    <div class="card-body">
                        <h1 className='text-xl text-center font-semibold'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Please enter your name"
                                    }
                                })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please enter your email"
                                    },
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
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

                            <p className='text-red-500 mb-2 text-xs text-center'>{signInError && signInError.message}</p>

                            <input className='btn btn-outline btn-primary w-full' value='Sign Up' type="submit" />

                        </form>
                        <p className='text-center'><small>Already have an account?<span className='text-primary'> <Link to='/login'> Log In</Link> </span></small></p>
                        <div class="divider">OR</div>
                        <button onClick={() => googlesignIn()} className='btn btn-accent'>sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;