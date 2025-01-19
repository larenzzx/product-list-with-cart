import emptyCart from './assets/images/illustration-empty-cart.svg';

function CartInfo() {
    return(
        <div className="container my-12">
            <div className='bg-white rounded-lg'>
                
                <h1 className="font-bold text-orange-700 text-2xl px-10 py-8">Your Cart (0)</h1>
                
                <div className="grid place-items-center">
                    <img src={emptyCart} alt="" className='w-full max-w-52' />
                    <p className='my-4 text-zinc-500 font-semibold'>Your added items will appear here</p>
                </div>
            </div>
        </div>
    );
}

export default CartInfo