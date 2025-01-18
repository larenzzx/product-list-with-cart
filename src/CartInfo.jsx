import emptyCart from './assets/images/illustration-empty-cart.svg';

function CartInfo() {
    return(
        <div className="container my-12 border-2 border-black">
            <h1 className="font-bold text-orange-700 text-2xl">Your Cart (0)</h1>
            
            <div className="grid place-items-center">
                <img src={emptyCart} alt="" />
                <p>Your added items will appear here</p>
            </div>
        </div>
    );
}

export default CartInfo