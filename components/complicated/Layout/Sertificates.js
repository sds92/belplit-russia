import React from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { Text } from '../../lib';

export default function Sertificates(props) {
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
    <div className={`pt-20`}>
      <div className={`bg-belplit_2 py-4`}>
        <Text className={`text-5xl pl-1.5 uppercase font-bold text-zinc-800 max-w-7xl text-left mx-auto`}>
          {props.data.title}
        </Text>
      </div>
      <div className={`py-20`} style={{ minHeight: '540px' }}>
        <div className={`flex flex-wrap justify-center mx-20`}>
          {imagesSM.map((src, index) => (
            <div className={`m-5 shadow-xl cursor-pointer`} key={`SERTSM${index}`}>
              <img src={src} onClick={() => openImageViewer(index)} alt={`Белтермо сертификат ${index}`} />
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              backgroundStyle={{ zIndex: '99999' }}
              src={imagesLG}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
}
