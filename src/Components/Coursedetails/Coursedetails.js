import React from 'react';
import './Coursedetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/star-rating.png';

const Coursedetails = (props) => {
    const { name, instructor, image, price, review } = props.course;

    return (

        <div className="topic shadow rounded mb-4">

            <div className="imageStyle">
                <img src={image} alt="" />
            </div>

            <div>
                <h4>{name}</h4>
                <p>{instructor}</p>
                <h5 className="text-secondary"> <img style={{ height: '17px', display: 'inline' }} src={logo} alt="" /> ({review})</h5>
                <h3><strong>${price}</strong></h3>
                <button className="btn btn-warning" onClick={() => props.handleAddCourse(props.course)}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</button>
            </div>


        </div>




    );
};

export default Coursedetails;