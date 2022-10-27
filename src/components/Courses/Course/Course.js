import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../Images/image1.jpg';
import image2 from '../../../Images/image2.jpg';
import image3 from '../../../Images/image3.jpg';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    console.log( courses );
    const { name, img, price, details, inst } = courses;
    // console.log( name )
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={ 1000 }>
                    <img
                        className="d-block w-100"
                        src={ image1 }
                        alt=""
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={ 500 }>
                    <img
                        className="d-block w-100"
                        src={ image2 }
                        alt=""
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ image3 }
                        alt=""
                        height='550px'
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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
                <button type="button" class="btn btn-primary">Get Premium</button>
            </div>
        </div>
    );
};

export default Course;
