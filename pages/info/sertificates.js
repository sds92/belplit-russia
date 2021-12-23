import React from 'react';
// import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

import { Text } from '../../components/lib';
import { app } from '../../configs/app';

// import sert1sm from '../../public/images/sertificates/1sm.jpg';
// import sert2sm from '../../public/images/sertificates/2sm.jpg';
// import sert3sm from '../../public/images/sertificates/3sm.jpg';
// import sert4sm from '../../public/images/sertificates/4sm.jpg';
// import sert5sm from '../../public/images/sertificates/5sm.jpg';

// import sert1 from '../../public/images/sertificates/1.jpg';
// import sert2 from '../../public/images/sertificates/2.jpg';
// import sert3 from '../../public/images/sertificates/3.jpg';
// import sert4 from '../../public/images/sertificates/4.jpg';
// import sert5 from '../../public/images/sertificates/5.jpg';

export default function Sertificates() {
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
    <div className={`flex flex-col`}>
      <Text ta={'center'} ts={'3xl'} tw={'bold'}>
        {app.pages.info.sertificates.title}
      </Text>
      <div className={`flex flex-wrap justify-center mx-20`}>
        {imagesSM.map((src, index) => (
          <div className={`m-5 shadow-xl cursor-pointer`} key={`SERTSM${index}`}>
            <img src={src} onClick={() => openImageViewer(index)} alt='' />
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
