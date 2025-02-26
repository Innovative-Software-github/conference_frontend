import * as React from 'react'
import NextTopLoader from 'nextjs-toploader';

import { ToasterContainer } from '../components/ToasterContainer/ToasterContainer'

export interface IProvidersProps extends React.PropsWithChildren { }

export const Providers: React.FC<IProvidersProps> = ({ children }) => (
  <div>
    <ToasterContainer />
    <NextTopLoader
      color='#11C5BA'
      showSpinner={false}
    />
    {children}
  </div>
)
