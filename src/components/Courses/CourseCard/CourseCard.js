import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ( { course } ) => {

    const { name, img, price } = course;
    console.log( course );

    return (
        <div className='col-lg-4 col-md-6 my-3'>
            <div className='card p-2 shadow bg-body rounded'>
                <img src={ img } class="card-img-top" alt="#" height='200px' />
                <div className="card-body">
                    <h5 className="card-title my-3 text-start">{ name }</h5>
                    <p className='text-start mb-3'>Price: { price }</p>
                    <button type="button" className="btn btn-info"><Link className='text-decoration-none text-dark fs-5 fw-semibold' to={ `/course/${ course.id }` }>More details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
