import { notification as NoticationAntD } from 'antd';
import { useEffect } from 'react';
import { useGlobalContext } from './useGlobalContext';

export const useNotification = () => {
  const [api, contextHolder] = NoticationAntD.useNotification();
  const { notification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification?.type) {
      api[notification?.type]({
        message: notification.message,
        description: notification?.description,
        placement: 'bottomRight',
      });
    }
  }, [api, notification]);

  return {
    api,
    contextHolder,
  };
};
