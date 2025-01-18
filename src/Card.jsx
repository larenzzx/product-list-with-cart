import addCart from './assets/images/icon-add-to-cart.svg';
import PropTypes from 'prop-types';

function Card(props) {
    return(
        <div className='container mt-8'>
            <div className='relative'>

                <img className='rounded-md md:hidden' src={props.imageMobile} alt="" />
                <img className='rounded-md hidden md:block lg:hidden' src={props.imageTablet} alt="" />
                <img className='rounded-md hidden lg:block' src={props.imageDesktop} alt="" />

                <div className='flex items-center justify-center gap-3 absolute 
                                w-48 px-4 py-3 rounded-full 
                                border border-zinc-400 -bottom-6 left-1/2 
                                -translate-x-1/2 transform z-10 bg-white'>
                    <img src={addCart} alt="" />
                    <p className='font-semibold'>Add to Cart</p>
                </div>
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