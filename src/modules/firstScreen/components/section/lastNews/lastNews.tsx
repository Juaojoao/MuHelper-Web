import { useEffect, useState } from 'react';
import { CardNews } from '../../../../../shared/components/cards/cardNews';
import { GuideType } from '../../../../dashboard/types/guidesType';
import { UseRequest } from '../../../../../shared';
import { URL_LAST_GUIDES } from '../../../../../shared/constants/urls';
import { MethodsEnum } from '../../../../../shared/enums/method.enum';
import { npcList } from '../../../../../shared/components/dataComponents/dataComponents';

export const LastNews = ({ npcId }: { npcId: number }) => {
  const [lastNews, setLastNews] = useState<GuideType[] | undefined>();
  const { request } = UseRequest();

  const getLastNews = async (npcId: number) => {
    const response = await request<GuideType[]>(URL_LAST_GUIDES(npcId), MethodsEnum.GET);
    return response;
  };

  useEffect(() => {
    const fetchLastNews = async () => {
      const guides = await getLastNews(npcId);
      setLastNews(guides);
    };

    fetchLastNews();
  }, [npcId]);

  return (
    <div className="card-news-div cards">
      {lastNews?.map((lastGuides) => {
        const npcName = npcList.find((npc) => npc.id === npcId)?.name;

        return (
          <CardNews
            path={`/npc/${npcName}/${lastGuides.guide.id}`}
            images={lastGuides.guide.images?.[0] || ''}
            title={lastGuides.guide.title || ''}
            key={lastGuides.guide.id}
          />
        );
      })}
    </div>
  );
};
