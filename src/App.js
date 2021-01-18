import React, {useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import ImgGallery from './components/ImgGallery';
import fetchApi from './servises/Api';
import Modal from './components/Modal';
import Button from './components/Button';


const initialState = {
  query: '',
  page: 1,
  imgList: [],
  modalIsOpen: false,
};

function App() {
  const [state, setState] = useState({ ...initialState });
  
  // useEffect(() => {
  //     fetchApi(state.query, state.page)
  //     .then((response) => { setState(prev => ({ ...prev, imgList: [...prev.imgList,...response] })) })
  // }, [state.query, state.page]);

  const handleSubmitQuery = (querySearchBar) => {
    setState(prev => ({...prev, page: 1 }))
     fetchApi(querySearchBar, state.page)
      .then((response) => { setState(prev => ({ ...prev, imgList: [...response], query: querySearchBar, page: prev.page +1 })) })
  };

  const handleLoadMoreBtn = () => {
    fetchApi(state.query, state.page)
    .then((response) => { setState(prev => ({ ...prev, imgList: [...prev.imgList, ...response], page: prev.page +1  })) })
  }

  return (
    <>
      <SearchBar
        handleSubmitQuery={handleSubmitQuery} />
      {state.imgList.length &&
        <ImgGallery listImgGallery={state.imgList} />}
      {state.imgList.length &&
        <Button handleLoadMoreBtn={handleLoadMoreBtn} />}

    {state.modalIsOpen && <Modal/>}
    </>
  );
}


export default App;
