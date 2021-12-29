import React from 'react';
import Head from 'next/head';
import ImageViewer from 'react-simple-image-viewer';

import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import meta from '../../data/meta.json';

export default function Objects() {
  const head = meta.find((item) => item.pageName === 'objects').head;
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const imagesSM = [
    '/images/objects/1sm.jpg',
    '/images/objects/2sm.jpg',
    '/images/objects/3sm.jpg',
    '/images/objects/4sm.jpg',
    '/images/objects/5sm.jpg',
    '/images/objects/6sm.jpg',
    '/images/objects/7sm.jpg',
    '/images/objects/10sm.jpg',
    '/images/objects/11sm.jpg',
    '/images/objects/12sm.jpg',
    '/images/objects/13sm.jpg',
    '/images/objects/14sm.jpg',
    '/images/objects/15sm.jpg',
    '/images/objects/16sm.jpg',
    '/images/objects/17sm.jpg',
    '/images/objects/18sm.jpg',
    '/images/objects/19sm.jpg',
    '/images/objects/20sm.jpg',
    '/images/objects/21sm.jpg',
    '/images/objects/22sm.jpg',
    '/images/objects/23sm.jpg',
    '/images/objects/24sm.jpg',
    '/images/objects/25sm.jpg',
    '/images/objects/26sm.jpg',

  ];
  const imagesLG = [
    '/images/objects/1.jpg',
    '/images/objects/2.jpg',
    '/images/objects/3.jpg',
    '/images/objects/4.jpg',
    '/images/objects/5.jpg',
    '/images/objects/6.jpg',
    '/images/objects/7.jpg',
    '/images/objects/10.jpg',
    '/images/objects/11.jpg',
    '/images/objects/12.jpg',
    '/images/objects/13.jpg',
    '/images/objects/14.jpg',
    '/images/objects/15.jpg',
    '/images/objects/16.jpg',
    '/images/objects/17.jpg',
    '/images/objects/18.jpg',
    '/images/objects/19.jpg',
    '/images/objects/20.jpg',
    '/images/objects/21.jpg',
    '/images/objects/22.jpg',
    '/images/objects/23.jpg',
    '/images/objects/24.jpg',
    '/images/objects/25.jpg',
    '/images/objects/26.jpg',
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
      <Head>
        <title>{head.title}</title>
        {head.meta.map((item, index) => (
          <meta name={item.name} content={item.content} key={`METAMAIN${index}`} />
        ))}
      </Head>
      
      {/* BODY */}
      <Text ta={'center'} ts={'3xl'} tw={'bold'} py={10}>
        {app.pages.info.objects.title}
      </Text>
      <p className={`bg-belplit text-center py-2 text-slate-100`}>МДВП Белтермо применяются в самых разных областях строительства, для самых разных целей.</p>
      <div className={`flex flex-wrap justify-center sm:mx-20`}>
        {imagesSM.map((src, index) => (
          <div className={`m-5 shadow-md cursor-pointer`} key={`SERTSM${index}`}>
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
