import { useGlobalContext } from './useGlobalContext';
import ConnectAPI, { MethodType, connectionAPIPost } from '../functions/connection/connectionAPI';
import { AUTH_URL } from '../constants/urls';
import { setAutorizationToken } from '../functions/connection/auth';
import { AuthType } from '../../modules/login/types/authType';
import { useState } from 'react';
import connectionAPI from '../functions/connection/connectionAPI';

const UseRequest = () => {
  const { setNotification, setUser } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
    message?: string,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject: T | undefined = await connectionAPI
      .connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setNotification('Sucesso!', 'success', message);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);
    await connectionAPIPost<AuthType>(AUTH_URL, body)
      .then((result) => {
        setUser(result.user);
        setAutorizationToken(result.acessToken);
        setNotification('Login Success!', 'success');
        setTimeout(() => {
          location.href = '/dashboard';
        }, 3000);
      })
      .catch(() => {
        setNotification('Login Failed!', 'error');
      });
    setLoading(false);
  };

  return {
    request,
    authRequest,
    loading,
  };
};

export default UseRequest;
