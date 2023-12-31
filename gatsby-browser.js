import React from 'react';

import { GlobalProvider } from './src/context/GlobalContext';

export const wrapRootElement = ({ element }) => (
    <GlobalProvider>{element}</GlobalProvider>
);
