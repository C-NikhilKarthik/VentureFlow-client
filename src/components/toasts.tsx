import React, { useState, useEffect } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToasts = () => {
  const functionThatReturnPromise = () => new Promise<void>((resolve) => setTimeout(resolve, 2000));

  const properties: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light',
  };

  const notify = (event: { type: string; message: string }) => {
    if (event.type === 'SUCCESS') {
      toast.success(event.message, properties);
    } else if (event.type === 'ERROR') {
      toast.error(event.message, properties);
    } else if (event.type === 'WARNING') {
      toast.warn(event.message, properties);
    } else if (event.type === 'PROMISE') {
      toast.promise(
        functionThatReturnPromise,
        {
          pending: 'Your request is processing',
          success: event.message,
          error: 'Request Failed',
        },
        properties
      );
    } else if (event.type === 'INFO') {
      toast.info(event.message, properties);
    } else {
      toast(event.message, properties);
    }
  };

  return [notify];
};
