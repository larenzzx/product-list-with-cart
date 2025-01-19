import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Button() {

    const addCart = document.querySelectorAll('.addCart');
    const editCart = document.querySelectorAll('.editCart');

    // editCart.forEach(edit => {
    //     edit.classList.add('hidden');
    // });

    addCart.forEach((cart, index) => {
        cart.addEventListener('click', () => {
            cart.classList.add('hidden');

            if(editCart[index]) {
                editCart[index].classList.remove('hidden');
                editCart[index].classList.add('flex');
            }

        });

    });

    


    return (
        <>
            <div className='flex items-center justify-center gap-3 absolute w-48 px-4 py-3 
                            rounded-full border border-zinc-400 -bottom-6 left-1/2 -translate-x-1/2 
                            transform z-10 bg-white duration-100 hover:border-[3px] hover:border-orange-700 cursor-pointer addCart'
            >

                {/* <img src={addCart} alt="" /> */}
                <FontAwesomeIcon icon={faCartPlus} className='text-orange-600 text-xl' />
                <p className='font-semibold'>Add to Cart</p>
            </div>

            <div className='items-center justify-between gap-3 absolute w-48 px-4 py-3 
                            rounded-full -bottom-6 left-1/2 -translate-x-1/2 
                            transform z-10 bg-orange-700 text-white 
                            border-[3px] border-orange-700 editCart hidden'
            >

                <FontAwesomeIcon icon={faMinus} className='p-1 border-2 border-white rounded-full cursor-pointer' />
                <input type="number" min="1" placeholder="1" className='w-10 text-center outline-none placeholder:text-white' />
                <FontAwesomeIcon icon={faPlus} className='p-1 border-2 border-white rounded-full cursor-pointer' />
            </div>
        </>

    );
}

export default Button 