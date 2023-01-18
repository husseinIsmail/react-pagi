import React from 'react';
import ReactDOM from 'react-dom/client';
import Pagination from '../../src/Pagination';
import './index.css';

const App = () => {
  const pageLinks = [
    '/',
    '/second',
    '/thrid',
    '/fourth',
    '/fifth',
    '/sixth',
    '/seventh',
    '/eightth'
  ];

  return (
    <div className='app'>
      <Pagination pageLinks={pageLinks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);