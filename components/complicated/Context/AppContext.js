import React from 'react';
import app from '../../../data/app.json';
import { appDataConfig } from '../../../configs/appDataConfig';

const a = app

export const AppContext = React.createContext(appDataConfig(a, process.env.NEXT_PUBLIC_SITE_URL));
