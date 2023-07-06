export const URL = 'http://localhost:1000';

export const AUTH_URL = `${URL}/auth`;
export const USER_URL = `${URL}/user`;
export const GUIDE_URL = `${URL}/guides`;
export const GUIDE_CREATED_URL = `${URL}/guides/create`;

export const URL_DELETE_GUIDE = (id: string) => {
  return `${URL}/guides/delete/${id}`;
};

export const URL_EDIT_GUIDE = (id?: number) => {
  return `${URL}/guides/update/${id}`;
};

export const URL_GET_GUIDE_ID = (id?: string) => {
  return `${URL}/guides/npc/${id}`;
};

// **********************************
// -----ROTAS DOS GUIAS USUARIOS-----
// **********************************

export const URL_LAST_GUIDES = (id: number) => {
  // Só me retorna os ultimos guias de cada NPCID
  // Id, Title e Imagem
  return `${URL}/guides/last/${id}`;
};

export const URL_GET_GUIDES_CONTENT = (npcName?: string, guideId?: string) => {
  // Me retorna todos os guias de um NPCID
  return `${URL}/guides/npc/${npcName}/${guideId}`;
};
