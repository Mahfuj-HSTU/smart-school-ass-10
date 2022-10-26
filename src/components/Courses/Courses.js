import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <Sidenav></Sidenav>
                    </Col>
                    <Col lg='9'>
                        <div className="row my-5"> {
                            courses.map( course => <CourseCard key={ course.id } course={ course }></CourseCard> )
                        }

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Courses;
