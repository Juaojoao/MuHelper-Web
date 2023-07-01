import { CardNpc } from '../../../../../shared/components/cards/cardNpc';
import { dataSection } from '../dataSction';

export const NpcGuides = () => {
  return (
    <>
      {dataSection.map((npc: { src: string; alt: string; link: string }) => (
        <CardNpc path={npc.link} images={npc.src} title={npc.alt} key={npc.link} />
      ))}
    </>
  );
};
