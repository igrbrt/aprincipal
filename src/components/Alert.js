import React from 'react';
import { toast, Flip } from 'react-toastify';

export function ErrorToast({message, headerMessage = false, position='top-center'}) {
        let fullMessage = headerMessage ? <div>{headerMessage}<br /> {message}</div> : <div>{message}</div>;
        toast.error(fullMessage, {
            position: position,
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip
        });
}

export function SuccessToast({message, headerMessage = false, position='top-center'}) {
    let fullMessage = headerMessage ? <div>{headerMessage}<br /> {message}</div> : <div>{message}</div>;
    toast.success(fullMessage, {
        position: position,
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip
    });
}
