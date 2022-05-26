import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import useUsers from '../../hooks/useUsers';
import Loading from '../Shared/Loading';

const AddReview = () => {

    const [rating, setRating] = useState(0)
    const [user] = useAuthState(auth)
    const [userData, isLoading] = useUsers(user.email) 
    const date = new Date()
    
    if(isLoading) return <Loading></Loading>

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const handleReviewSubmit = e => {
        e.preventDefault()
        const review = {
            rating, 
            comment: e.target.comment.value,
            img: userData.data.image || user?.photoURL,
            name: user?.displayName,
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hours: date.getHours(),
            minutes: date.getMinutes()
        }
        axiosPrivate.post('https://aurora-car-parts.herokuapp.com/reviews', review)
        .then(data => {
            if(data.data.acknowledged){
                toast.success('Your review is added')
            }
        })
        e.target.reset()
    }

    return (
        <div className='card bg-base-200 shadow-xl mt-4'>
            <h1 className='text-center font-semibold text-xl text-primary pt-4'>Please leave your precious review.</h1>
            <form className='card-body ' onSubmit={handleReviewSubmit}>
                <p className='text-black'>How was your experience with our manufacturing team?</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#0000cd"
                />
                <textarea name='comment' class="textarea textarea-bordered w-full mt-3" placeholder="Your Comment"></textarea>
                <input className='btn btn-outline w-full mt-2' type="submit" value='Comment' />
            </form>
        </div>
    );
};

export default AddReview;