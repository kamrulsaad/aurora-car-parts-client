import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const [emailSignIn, user, loading, error] = useSignInWithEmailAndPassword(auth)

    const [googlesignIn, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

    const [token] = useToken(user|| googleUser)
    
    useEffect(() => {
        if(token) navigate(from, {replace: true})
    }, [token, from, navigate])

    const { register, formState: { errors }, handleSubmit } = useForm();

    if(loading|| googleLoading) return <Loading></Loading>
    const signInError = googleError || error;
    const onSubmit = data => emailSignIn(data.email, data.password)


    return (
        <div className="hero min-h-screen bg-base-200 mt-16 lg:mt-0">
            <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 max-w-lg">Join our worldwide services today. You only choose and we create what you need. </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-xl text-center font-semibold'>Login Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

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

                            <input className='btn btn-outline btn-primary w-full' value='login' type="submit" />

                        </form>
                        <p className='text-center'><small>New to Aurora Par Parts? ? <span className='text-primary'> <Link to='/signup'> Create New Account</Link> </span></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => googlesignIn()} className='btn btn-accent'>sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;