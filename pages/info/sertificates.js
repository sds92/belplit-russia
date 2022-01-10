import React from 'react';
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import backgroundImage from '../../public/images/backgraund-description.jpg';

export default function Sertificates({input}) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const imagesSM = [
    '/images/sertificates/1sm.jpg',
    '/images/sertificates/2sm.jpg',
    '/images/sertificates/3sm.jpg',
    '/images/sertificates/4sm.jpg',
    '/images/sertificates/5sm.jpg',
  ];
  const imagesLG = [
    '/images/sertificates/1.jpg',
    '/images/sertificates/2.jpg',
    '/images/sertificates/3.jpg',
    '/images/sertificates/4.jpg',
    '/images/sertificates/5.jpg',
  ];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={`bg-slate-100`} style={{ minHeight: '540px' }}>
      <div className={`relative h-56 `}>
        <Image
          src={backgroundImage}
          alt={`backgroundImage`}
          width={200}
          height={150}
          layout='fill'
          objectFit='cover'
        />
        <Text className={`absolute text-center text-slate-100 text-5xl font-bold pt-20 inset-0`}>{input.title}</Text>
      </div>
      <div className={`flex flex-wrap justify-center mx-20`}>
        {imagesSM.map((src, index) => (
          <div className={`m-5 shadow-xl cursor-pointer`} key={`SERTSM${index}`}>
            <img src={src} onClick={() => openImageViewer(index)} alt={`Белтермо сертификат ${index}`} />
          </div>
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={imagesLG}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
}
