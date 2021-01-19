import React, {useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import ImgGallery from './components/ImgGallery';
import fetchApi from './servises/Api';
import Modal from './components/Modal';
import Button from './components/Button';
import Spinner from './components/Spinner';


const initialState = {
  query: '',
  page: 1,
  imgList: [],
  modalIsOpen: false,
  loadSpinner: false,
  lageUrlState: '',
  errorState: '',
};

function App() {
  const [state, setState] = useState({ ...initialState });
  
  useEffect(() => {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
        });
  }, [state.page])
 
  const handleSubmitQuery = (querySearchBar) => {

    if (querySearchBar) {
      setState(prev => ({ ...prev, loadSpinner: true }))
      fetchApi(querySearchBar)
        .then((response) => { 
          setState(prev => ({
            ...prev, imgList: [...response],
            query: querySearchBar, page: 2, loadSpinner: false
          }))
        })
    }

  };

  const handleLoadMoreBtn = () => {
    setState(prev => ({ ...prev, loadSpinner: true }))

    fetchApi(state.query, state.page)
      .then((response) => { setState(prev => ({ ...prev, imgList: [...prev.imgList, ...response], page: prev.page + 1, loadSpinner: false })) })
  }

  const modalOpen = (lageUrl) => {
    setState(prev => ({ ...prev, modalIsOpen: true, lageUrlState: lageUrl}))
  };

  const modalClose = () => {
    setState(prev => ({ ...prev, modalIsOpen: false }))
  }
 

  return (
    <>
      <SearchBar
        handleSubmitQuery={handleSubmitQuery} />
      {state.imgList.length>0 &&
        <ImgGallery listImgGallery={state.imgList} modalOpen={modalOpen} />}
        {state.loadSpinner && <Spinner/>}
      {state.imgList.length>0 &&
        <Button handleLoadMoreBtn={handleLoadMoreBtn} />}

      {state.modalIsOpen && <Modal modalClose={modalClose} lageImg={state.lageUrlState} />}
    </>
  );
}


export default App;
