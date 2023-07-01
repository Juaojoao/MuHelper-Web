import { RouteObject } from 'react-router-dom';
import { NpcsScreen } from './screen/npcs';
import { npcList } from '../../shared/components/dataComponents/dataComponents';
import { NpcContentScreen } from './screen/NpcContentScreen';

export const NpcsRoutesConten = () => {
  return npcList.map((npc) => {
    return {
      path: `/npc/${npc.name}`,
      element: <NpcsScreen npcId={npc.id.toString()} npcName={npc.name} />,
      key: npc.id,
    };
  });
};

export const NpcsRoutesGuideContent = () => {
  return npcList.map((npc) => {
    return {
      path: `/npc/${npc.name}/:id`,
      element: <NpcContentScreen />,
      key: npc.id,
    };
  });
};

export const NpcsRoutes: RouteObject[] = [
  ...NpcsRoutesConten(),
  {
    path: `/npc/:npcName/:id`,
    element: <NpcContentScreen />,
  },
];
