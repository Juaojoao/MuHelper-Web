import { AUTHORIZATION_KEY } from '../../constants/authConstant';
import { getItemStorage, removeItemStorage, setItemStorage } from './StorageProxy';
import { UserType } from '../../../modules/login/types/userType';
import { connectionAPIGet } from './connectionAPI';
import { USER_URL } from '../../constants/urls';

export const unsetAutorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);
export const setAutorizationToken = (token: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};
export const getAutorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLogeedIn = async () => {
  const token = getAutorizationToken();
  if (!token) {
    location.href = '/';
  }
  await connectionAPIGet<UserType>(USER_URL).catch(() => {
    unsetAutorizationToken();
    location.href = '/';
  });
  return null;
};
