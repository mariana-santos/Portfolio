

import { useEffect, React } from 'react';

import { ConfigProvider } from './contexts/config';
import { ModalProvider } from './contexts/modal';

import AOS from 'aos';
import 'aos/dist/aos.css';

import AppLayout from './layout/index';

export default function App() {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])
  
  return (
    <ConfigProvider>
      <ModalProvider>
        <AppLayout />
      </ModalProvider>
    </ConfigProvider>
  );
}