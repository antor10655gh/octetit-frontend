import React from 'react';
import Header from '../shared/Header';
import Routers from '../routes/Routers';
import Footer from '../shared/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
