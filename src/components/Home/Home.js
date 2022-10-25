import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import image4 from '../../Images/20200702_202732.jpg';
import image5 from '../../Images/instructor1.jpg';
import image6 from '../../Images/instructor2.jpg';
import image7 from '../../Images/instructor3.jpg';
import image8 from '../../Images/instructor4.jpg';
import './Home.css'

const Home = () => {
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
            <div>
                <h1 className='mt-5 mb-3'>Welcome to <span className='text-primary'>Smart School</span></h1>
                <p className='fs-5'>Smart Schoolis a complete learning management website template you get for free. Although the design looks outdated, it has all the web elements in <br />the right spot New learning is a full-width colorful learning management template that uses Moodle framework. <br /> The New Learning template gives you a premium look and feel to the user with its design. </p>
                <div className='bg-image'>
                    <h1 className='mb-5'>What are the Student says.</h1>
                    <p>It is the great opportunities for us, that we can study from home with the countries best teacher so far. <br /> This site help us to learn more and that would be free!! <br /> You can believe it!!!</p>
                    <img className='rounded-circle mt-5' src={ image4 } alt="" width='100px' height='100px' />
                </div>
            </div>
            <div className='my-3'>
                <h2>OUR EXPERIENCED PROFESSOR</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life <br /> One day however a small line of blind text by the name</p>
                <div class="card-group gap-4 mx-5 text-start mt-5">
                    <div class="card shadow p-3 mb-5 bg-body rounded">
                        <img src={ image5 } class="card-img-top" alt="..." height='400px' />
                        <div class="card-body">
                            <h5 class="card-title">Jhankar Mahbub</h5>
                            <p class="card-text">Professor</p>
                        </div>
                    </div>
                    <div class="card shadow p-3 mb-5 bg-body rounded">
                        <img src={ image6 } class="card-img-top" alt="..." height='400px' />
                        <div class="card-body">
                            <h5 class="card-title">Farhan Ahmed</h5>
                            <p class="card-text">Instructor</p>
                        </div>
                    </div>
                    <div class="card shadow p-3 mb-5 bg-body rounded">
                        <img src={ image7 } class="card-img-top" alt="..." height='400px' />
                        <div class="card-body">
                            <h5 class="card-title">Azizul Hakim Milton</h5>
                            <p class="card-text">Teacher</p>
                        </div>
                    </div>
                    <div class="card shadow p-3 mb-5 bg-body rounded">
                        <img src={ image8 } class="card-img-top" alt="..." height='400px' />
                        <div class="card-body">
                            <h5 class="card-title">Mir Hossain</h5>
                            <p class="card-text">Professor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
