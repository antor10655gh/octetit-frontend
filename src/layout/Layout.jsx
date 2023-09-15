import React from 'react';
import Header from '../shared/Header';
import Routers from '../routes/Routers';
import Footer from '../shared/Footer';

const Layout = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
