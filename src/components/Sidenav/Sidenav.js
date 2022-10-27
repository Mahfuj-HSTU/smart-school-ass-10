import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    const [ courses, setCourses ] = useState( [] );

    useEffect( () => {
        fetch( 'https://education-server.vercel.app/courses' )
            .then( res => res.json() )
            .then( data => setCourses( data ) )
    }, [] )


    return (
        <div className='my-4 '>
            <h2 className='mb-4'>All Courses</h2>
            <div className='text-start ps-2'>
                {
                    courses.map( course => <p key={ course.id }>
                        <Link className='text-decoration-none text-dark fs-5' to={ `/course/${ course.id }` }>{ course.name }</Link>
                    </p> )
                }
            </div>
        </div >
    );
};

export default Sidenav;
