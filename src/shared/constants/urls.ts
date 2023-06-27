import { npcList } from '../../modules/npcs/routes';

const URL = 'http://localhost:1000';

export const AUTH_URL = `${URL}/auth`;
export const USER_URL = `${URL}/user`;
export const GUIDE_URL = `${URL}/guides`;
export const GUIDE_CREATED_URL = `${URL}/guides/create`;

export const URL_DELETE_GUIDE = (id: string) => {
  return `${URL}/guides/delete/${id}`;
};

export const URL_EDIT_GUIDE = (id: string) => {
  return `${URL}/guides/update/${id}`;
};

export const URL_GET_GUIDE_ID = (id?: string) => {
  return `${URL}/guides/npc/${id}`;
};
