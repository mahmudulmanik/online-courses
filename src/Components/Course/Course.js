import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import Coursedetails from '../Coursedetails/Coursedetails';
import Cart from '../Cart/Cart';
import Cartlist from '../Cartlist/Cartlist';

const Course = () => {

    const first15 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {

        const newCart = [...cart, course];
        setCart(newCart);
    };


    return (
        <div className="main-container">
            <div className="course-container">
                <h1><strong>Sale ends today. Grab Quickly !!!</strong></h1>
                <h3>Available Courses: {courses.length}</h3>
                {
                    courses.map(course => 
                    <Coursedetails
                        course={course}
                        key={course.id}
                        handleAddCourse={handleAddCourse}

                    >{course.name}</Coursedetails>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

            <div className="cart-summary">
                {
                    cart.map(singleTopic => <Cartlist
                        cart={singleTopic}
                        key={singleTopic.id}
                    ></Cartlist>)
                }
            </div>
        </div>


    );
};

export default Course;