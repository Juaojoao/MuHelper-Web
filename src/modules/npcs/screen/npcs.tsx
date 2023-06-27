import '../css/styles.css';
import { NpcsDataContent } from './npc.data';
import { CardShared } from '../../../shared/components/card/card';
import { ListGuides } from '../components/listGuides/listGuides';
import { ContentDefault } from '../../../shared/components/content/contentDefault';

interface NpcsProps {
  npcName: string;
  npcId: string;
}
const Npcs = ({ npcName, npcId }: NpcsProps) => {
  const npc = NpcsDataContent.find((npc) => npc.link === npcName);

  if (!npc) {
    return <div>NPC não encontrado</div>;
  }

  return (
    <div className="npcs">
      <main className="main-npc">
        <section className="flex-align-justify-center">
          <CardShared
            title={npc.title}
            description={npc.description}
            image={npc.src}
            alt={npc.title}
            id={npc.id}
            subImages={npc.subImages?.map((subContent) => {
              return {
                subId: subContent.id,
                subImage: subContent.subImage,
                subAlt: subContent.subAlt,
              };
            })}
          />
        </section>
        <section className="flex-align-justify-center">
          <ListGuides npcId={npcId} />
        </section>
      </main>
    </div>
  );
};

export const NpcsScreen = ({ npcId, npcName }: NpcsProps) => {
  return <ContentDefault children={<Npcs npcName={npcName} npcId={npcId} />} />;
};
