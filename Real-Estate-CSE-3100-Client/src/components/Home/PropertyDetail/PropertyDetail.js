import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const PropertyDetail = () => {
    return (
        <div>
            <Navbar />
            <div className='pt-24'>
                <h1>Details of property</h1>
            </div>
            <Footer />
        </div>
    );
};

export default PropertyDetail;