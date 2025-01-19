// import addCart from './assets/images/icon-add-to-cart.svg';
import PropTypes from 'prop-types';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
    return(
        <div className='container mt-8'>
            <div className='relative'>

                <img className='rounded-md md:hidden activeImg' src={props.imageMobile} alt="" />
                <img className='rounded-md hidden md:block lg:hidden' src={props.imageTablet} alt="" />
                <img className='rounded-md hidden lg:block' src={props.imageDesktop} alt="" />

                <Button />
            </div>


            <div className='mt-8'>
                <span className='text-sm text-zinc-500'>{props.food}</span>
                <p className='font-semibold'>{props.description}</p>
                <p className='text-orange-600 font-semibold'>{props.price}</p>
            </div>
        </div>
    );
}
Card.propTypes = {
    food: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
}

export default Card 