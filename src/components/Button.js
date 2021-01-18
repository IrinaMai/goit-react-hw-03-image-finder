import React from 'react';

const Button = ({handleLoadMoreBtn}) => {
    const onClickLoadBtn = () => {
        handleLoadMoreBtn();
    }
    
    return (
    <button type="button" className="Button" onClick={onClickLoadBtn}>Load More</button>
    )
}
export default Button