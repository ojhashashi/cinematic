import ReactDOM from 'react-dom/client';

import {
  RouterProvider
} from "react-router-dom";
import customRouter from './Routing';

import './css/style.css';
import './css/sticky.css';

const root = ReactDOM.createRoot(document.getElementById('xyz'));

root.render(
  <RouterProvider router={customRouter}>
  </RouterProvider>
);