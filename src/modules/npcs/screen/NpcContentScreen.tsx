import { useState, useEffect } from 'react';
import { GuideType } from '../../dashboard/types/guidesType';
import { URL } from '../../../shared/constants/urls';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const NpcContentScreen = () => {
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
    console.log(id);
    if (id) {
      getGuideContent().then();
    }
  }, [id]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: guide?.guide.content || '' }} />
    </div>
  );
};
