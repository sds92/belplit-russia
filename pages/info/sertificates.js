import React from 'react';
import Image from 'next/image';
import ImageViewer from 'react-simple-image-viewer';

import { Text } from '../../components/lib';
import { app } from '../../configs/app';
import backgroundImage from '../../public/images/background-description.jpg';
import { Layout } from '../../components/complicated';

export default function Sertificates(props) {
  return <Layout.Sertificates {...props} />;
}
