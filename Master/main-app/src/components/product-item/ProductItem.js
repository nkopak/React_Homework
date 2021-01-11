import React from 'react';

function ProductItem({
                         isAddedToWishlist,
                         isAddedToCart,
                         onAddToCart,
                         onAddToWishlist,
                         product,
                         product: {id, title, price, description}
                     }) {
    return (
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button
                style={{background: isAddedToCart ? 'red' : 'green'}}
                onClick={() => onAddToCart(product)}>{!!isAddedToCart ? 'remove from cart' : 'add to cart'}</button>
            <button
                style={{background: isAddedToWishlist ? 'red' : 'green'}}
                onClick={() => onAddToWishlist(product)}>{!!isAddedToWishlist ? 'remove from wishlist' : 'add to wishlist'}
            </button>
            <hr/>
        </div>
    );
}

export default ProductItem;