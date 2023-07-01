import { ContentDefault } from '../../../shared/components/content/contentDefault';
import { npcList } from '../../../shared/components/dataComponents/dataComponents';
import { LastNews } from '../components/section/lastNews/lastNews';
import { NpcGuides } from '../components/section/npcGuides/npcGuides';

const FirstScreen = () => {
  return (
    <ContentDefault
      children={
        <>
          <section className="card-section">
            <div className="card-title-section">
              <h1>Last Guides!</h1>
            </div>
            <div className="card-news-container-section">
              {npcList.map((npc) => (
                <LastNews npcId={npc.id} key={npc.id} />
              ))}
            </div>
          </section>
          <section className="card-section">
            <div className="card-title-section">
              <h1>NPC Guides!</h1>
            </div>
            <div className="card-news-container-section card-npc-guides-section">
              <NpcGuides />
            </div>
          </section>
        </>
      }
    />
  );
};

export default FirstScreen;
