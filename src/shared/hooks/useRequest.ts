import { useGlobalContext } from './useGlobalContext';
import ConnectAPI, { MethodType, connectionAPIPost } from '../functions/connection/connectionAPI';
import { AUTH_URL } from '../constants/urls';
import { setAutorizationToken } from '../functions/connection/auth';
import { AuthType } from '../../modules/login/types/authType';

const UseRequest = () => {
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (obj: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    const returnObj: T | undefined = await ConnectAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((e: Error) => {
        setNotification(e.message, 'error');
        return undefined;
      });

    return returnObj;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    await connectionAPIPost<AuthType>(AUTH_URL, body)
      .then((result) => {
        setUser(result.user);
        setAutorizationToken(result.acessToken);
        setNotification('Login Sucess!', 'success');
        location.href = '/dashboard';
      })
      .catch(() => {
        setNotification('Login Failed!', 'error');
      });
  };

  return {
    request,
    authRequest,
  };
};

export default UseRequest;
