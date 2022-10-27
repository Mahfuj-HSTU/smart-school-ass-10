import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Premium = () => {
    const { user } = useContext( AuthContext )
    const course = useLoaderData();
    const { name, img, price, details, inst } = course;
    return (
        <div>
            <div className='mt-3'>
                <h3>Hi!! { user.displayName } </h3>
                <h5>Welcome to our <span className='text-primary'> premium features</span></h5>
            </div>
            <div className='mb-5'>
                <div className='m-5 d-lg-flex gap-5'>
                    <img className='col-lg-6 col img-fluid' src={ img } alt="#" />
                    <div className="card-body col-lg-6 col text-start">
                        <h3 className="card-title my-3 text-start">{ name }</h3>
                        <h5 className='text-start mb-3'>Price: { price }</h5>
                        <p className='fs-5'>{ details }</p>
                        <p><b>Our Experienced Instructors : </b> { inst }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;
