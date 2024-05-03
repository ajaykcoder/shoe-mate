import React from "react";

const FavoriteButton = ({product, toggleFavorite}) => {
  return (
        <button className="absolute top-5 right-5 cursor-pointer" onClick={toggleFavorite}>
            {product.isFavorite ? (
                <svg viewBox="0 0 24 24" width="24" height="24" className="fill-red"><g><path d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05Z"></path></g></svg>
            ) : (
                <svg viewBox="0 0 24 24" width="24" height="24" className="fill-darkBlue"><g><path d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05ZM12 20.846c-3.253-2.43-10-8.4-10-12.879a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05h2a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 4.481-6.747 10.449-10 12.879Z"></path></g></svg>
            )}
        </button>
        );
};
export default FavoriteButton;