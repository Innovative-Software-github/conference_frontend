import * as React from 'react'
import { ToasterContainer } from '../components/ToasterContainer/ToasterContainer'

export interface IProvidersProps extends React.PropsWithChildren { }

export const Providers: React.FC<IProvidersProps> = ({ children }) => (
  <div>
    <ToasterContainer />
    {children}
  </div>
)
