import './global.css';

import type { Router as RemixRouter } from '@remix-run/router';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginRouter } from './modules/login/router';
import { useNotification } from './shared/hooks/useNotification';
import { fristScreenRoutes } from './modules/firstScreen/routes';
import { DashScreenRoutes } from './modules/dashboard/router';
import { getAutorizationToken, verifyLogeedIn } from './shared/functions/connection/auth';
import { useEffect, useState } from 'react';
import useRequest from './shared/hooks/useRequest';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { USER_URL } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/method.enum';
import { NpcsRoutes } from './modules/npcs/routes';
import { Spin } from 'antd';

const routes: RouteObject[] = [...fristScreenRoutes, ...LoginRouter, ...NpcsRoutes];
const routesLoggedIn: RouteObject[] = [...DashScreenRoutes].map((route) => ({
  ...route,
  loader: () => verifyLogeedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

export function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequest();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAutorizationToken();
    if (token && !setUser) {
      request(USER_URL, MethodsEnum.GET, setUser)
        .then(() => {
          handleLoadingComplete();
        })
        .catch((error) => {
          console.error('Erro ao carregar usuário:', error);
          handleLoadingComplete();
        });
    } else {
      handleLoadingComplete();
    }
  }, [setUser]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" style={{ fontSize: 30 }} />
        </div>
      ) : (
        <>
          {contextHolder}
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}
