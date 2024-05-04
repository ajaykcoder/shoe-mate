import React from "react";

const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating * 2) / 2;
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 0.5;
        let starIcon;
        if(roundedRating >= index + 1){
            // Full Star
            starIcon = <svg className="fill-yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M19.467 23.316 12 17.828l-7.467 5.488L7.4 14.453-.063 9h9.214L12 .122 14.849 9h9.213L16.6 14.453Z"></path></svg>;
        }else if(roundedRating >= starValue){
            // Half Star
            starIcon = <svg className="fill-yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M24.046 9H14.83L11.98.107 9.13 9H-.085l7.463 5.441-2.864 8.863 7.467-5.488 7.467 5.488-2.864-8.863L24.047 9Zm-6.503 11.663L12 16.588V3.446L14.1 10h6.878l-5.568 4.059 2.134 6.604Z"></path></svg>;
        }else{
            // Empty Star
            starIcon = <svg className="fill-yellow" width="18" height="18" viewBox="0 0 24 24"><path d="M19.467 23.316 12 17.828l-7.467 5.488L7.4 14.453-.063 9h9.214L12 .122 14.849 9h9.213L16.6 14.453ZM12 15.346l3.658 2.689-1.4-4.344L17.937 11H13.39L12 6.669 10.61 11H6.062l3.683 2.691-1.4 4.344Z"></path></svg>;
        }
        return <span key={index}>{starIcon}</span>;
    });
    return <div className="flex gap-x-1">{ratingStars}</div>;
};
export default StarRating;