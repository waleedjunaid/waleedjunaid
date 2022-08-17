import React from 'react'
import classes from './WhyChooseUsCard.module.css'
import PropTypes from 'prop-types'
import {RatingImg} from '../../constant/imagePath'


export const WhyChooseUsCard = ({ title, description, image }) => {
    return (
        <div className={classes.card}>
            <img src={image} alt="rating" />
            <h4>{title}</h4>
            <p className='reg'>{description}</p>
        </div>


    )
}

WhyChooseUsCard.propTypes={
    title:PropTypes.string, 
    description:PropTypes.string,
     image:PropTypes.string
}

WhyChooseUsCard.defaultProps = {
    title:"Perfect Fit", 
    description:"Browse or use the filter options to find your perfect fit. Even boost your application to make it pop!",
     image:RatingImg

}


