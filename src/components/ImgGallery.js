import React from 'react';


const ImgGallery = ({listImgGallery}) => {
    return (
        <ul className="ImageGallery">
            {listImgGallery.map(({id, pageURL, previewURL}) => {
                return (
                    <li className="ImageGalleryItem" key = {id} data-url = {pageURL}>
                    <img src={previewURL} alt="" className="ImageGalleryItem-image" />
                    </li>
                )
            })}
        </ul>
    )
};

export default ImgGallery