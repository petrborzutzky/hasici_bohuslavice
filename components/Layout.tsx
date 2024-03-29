import React from 'react';
import { Header, Footer, FacebookWidget } from '.';
import Head from 'next/head';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto md:px-10 px-2 mb-8">
        <Head>
          <title>Hasiči Bohuslavice</title>
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="grow mt-10">{children}</div>
          <div className="container shrink-0 h-[48rem] w-80 mx-auto mb-40 lg:ml-10 mt-10 shadow-lg">
            <FacebookWidget />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
