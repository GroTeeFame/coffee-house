import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import './index.scss';

import App from './components/app/app';
import OurCoffee from './components/our-coffee/our-coffee';
import ForYourPleasure from './components/for-your-pleasure/for-your-pleasure';
import Coffee from './components/coffee/coffee';
import WrongPage from './components/wrong-page/wrong-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='our-coffee' element={<OurCoffee />} />
        <Route path='our-coffee/coffee-:Id' element={<Coffee />} />
        <Route path='for-your-pleasure' element={<ForYourPleasure />} />
        <Route path='wrong-page' element={<WrongPage />} />
        <Route
          path="*"
          element={
            <WrongPage/>
          }
        />
      </Routes>
    </HashRouter> 
  </React.StrictMode>
);