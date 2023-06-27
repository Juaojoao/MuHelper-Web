import { RouteObject } from 'react-router-dom';
import { NpcsScreen } from './screen/npcs';

export const npcList = [
  { id: 1, name: 'chaos-machine' },
  { id: 2, name: 'adniel' },
  { id: 3, name: 'seed-master' },
  { id: 4, name: 'trainer' },
  { id: 5, name: 'harmony' },
];

export const NpcsRoutesConten = () => {
  return npcList.map((npc) => {
    return {
      path: `/npc/${npc.name}`,
      element: <NpcsScreen npcId={npc.id.toString()} npcName={npc.name} />,
      key: npc.id,
    };
  });
};

export const NpcsRoutes: RouteObject[] = [...NpcsRoutesConten()];
