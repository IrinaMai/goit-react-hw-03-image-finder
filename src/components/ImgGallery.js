import React from 'react';


const ImgGallery = ({ listImgGallery, modalOpen }) => {
    
    const onImgClick = (e) => {
        const lageUrl = e.target.dataset.url;
        modalOpen(lageUrl)
        // console.log(lageUrl)
    }

    return (
        <ul className="ImageGallery">
            {listImgGallery.map(({id, largeImageURL, previewURL, tags}) => {
                return (
                    <li className="ImageGalleryItem"
                        key={id} 
                    >
                        <img src={previewURL}
                            data-url={largeImageURL}
                            alt={tags} className="ImageGalleryItem-image"
                            onClick={onImgClick} />
                    </li>
                )
            })}
        </ul>
    )
};

export default ImgGallery