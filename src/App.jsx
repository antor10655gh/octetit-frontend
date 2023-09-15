import React from 'react';
import './index.css';
import './App.css';
import Layout from './layout/Layout';
import Loader from './components/loader/Loader';
export default function App() {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setUser(true);
    }, 3000);
  });
  return <>{user ? <Layout /> : <Loader />}</>;
}
