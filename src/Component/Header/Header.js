import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white my-0 py-2">
                <p className="container my-0">
                     <small>Call Us: 09638 505 505</small>
                </p>
                {/* <Typist>
                                Our Private Psychiatrists London specialise in assesment and treatment for the full range of psychiatric disorders including Assessment, Diagnosis, Treatment plans, Psychological treatment, Counselling and prescribe Medications.
                            </Typist> */}
            </div>
            <NavMenu></NavMenu>
        

</div>

    );
};

export default Header;




