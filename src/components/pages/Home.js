import React from 'react';
import { useState } from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Title from '../../comps/Title'
import UploadForm from '../../comps/UploadForm';
import ImageGrid from '../../comps/ImageGrid';
import Modal from '../../comps/Modal';

function Home() {
  return (
    <>
      <HeroSection />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </>
  );
}

export default Home;