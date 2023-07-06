import axios from 'axios';
import './styles.css';
import { useState, useEffect } from 'react';
import { GuideType } from '../../../dashboard/types/guidesType';
import { URL } from '../../../../shared/constants/urls';
import { useParams } from 'react-router-dom';
import { npcList } from '../../../../shared/components/dataComponents/dataComponents';
import { Spin } from 'antd';

export const NpcContent = () => {
  const [guide, setGuide] = useState<GuideType>();
  const { id, npcName } = useParams();

  const getGuideContent = async () => {
    try {
      const response = await axios
        .get<GuideType>(`${URL}/guides/npc/${npcName}/${id}`)
        .then((res) => res.data);

      setGuide(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getGuideContent().then();
    }
  }, [id]);

  if (!guide) {
    return <Spin />;
  }

  const NextGuideTitle = guide.nextGuide?.title;

  return (
    <div className="npc-guides-content" key={guide?.guide.id}>
      <div dangerouslySetInnerHTML={{ __html: guide?.guide.content || '' }} />
      {guide?.nextGuide || guide.previousGuide ? (
        <div className="buttonsGuides">
          {guide?.previousGuide ? (
            <a href={`/npc/${npcName}/${guide.previousGuide?.id}`}>
              <button>
                <h3>Previous</h3>
                <p>{guide.previousGuide?.title}</p>
              </button>
            </a>
          ) : (
            ''
          )}
          {guide?.nextGuide ? (
            <a href={`/npc/${npcName}/${guide.nextGuide?.id}`}>
              <button>
                <h3>Next</h3>
                <p>{NextGuideTitle}</p>
              </button>
            </a>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
