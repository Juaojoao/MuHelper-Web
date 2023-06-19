import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router as RemixRouter } from "@remix-run/router";
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginRouter } from './modules/login/router';


const MainRouter: RouteObject[] =[
  {
      path: "/",
     element: <h1>Main Pag</h1>,
     errorElement: <h1>404</h1>
  }
];

const Routes: RemixRouter = createBrowserRouter([ ...LoginRouter, ...MainRouter]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Routes}/>
  </React.StrictMode>,
);
