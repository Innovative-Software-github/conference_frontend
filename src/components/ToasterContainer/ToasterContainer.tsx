// TODO: стилизовать тостер
import React from 'react';
import { Toaster } from 'sonner';

export const ToasterContainer = () => (
  <div>
    <Toaster
      position="bottom-right"
      toastOptions={{
      }}
      closeButton
      richColors
    />
  </div>
);
