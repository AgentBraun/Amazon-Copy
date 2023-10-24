import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';
import './index.css';
import Homepage from './pages/Homepage.tsx';
import Productpage from './pages/Productpage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Homepage />} />
      <Route path='product/:slug' element={<Productpage />} />
      {/*  <Route path='dashboard' element={<Dashboard />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
