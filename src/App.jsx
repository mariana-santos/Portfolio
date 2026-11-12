

import { useEffect } from 'react';

import { ConfigProvider } from './contexts/config';
import { ModalProvider } from './contexts/modal';

import gsap from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

import AppLayout from './layout/index';

export default function App() {

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    return () => smoother.kill();
  }, [])
  
  return (
    <ConfigProvider>
      <ModalProvider>
        <AppLayout />
      </ModalProvider>
    </ConfigProvider>
  );
}