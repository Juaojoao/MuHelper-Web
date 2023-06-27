import { useEffect, useState } from 'react';
import './styles.css';
import { UseRequest } from '../../../../shared';
import { GuideType } from '../../../dashboard/types/guidesType';
import { URL_GET_GUIDE_ID } from '../../../../shared/constants/urls';
import { MethodsEnum } from '../../../../shared/enums/method.enum';
import { Spin } from 'antd';
import { npcList } from '../../routes';

interface ListGuidesProps {
  npcId: string;
}

export const ListGuides = ({ npcId }: ListGuidesProps) => {
  const [guides, setGuides] = useState<GuideType[] | undefined>();
  const { request } = UseRequest();

  const getGuides = async () => {
    try {
      const response = await request<GuideType[]>(URL_GET_GUIDE_ID(npcId), MethodsEnum.GET);
      setGuides(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (npcId) {
      getGuides();
    }
  }, [npcId]);

  if (!guides) {
    return <Spin />;
  }

  const npcName = npcList.find((npc) => npc.id === Number(npcId))?.name;

  return (
    <div className="list-guides-container">
      {guides.map((guide) => {
        const linkTitle = guide.title?.toLowerCase().split(' ').join('-');
        return (
          <a href={`/npc/${npcName}/${linkTitle}`} className="list-guides ">
            <div key={guide.id} className="flex flex-align-justify-center">
              <div className="guides">
                {guide.images && guide.images?.length > 0 && (
                  <div className="list-guides-image">
                    <img src={guide.images} alt="" width={200} height={100} />
                  </div>
                )}
                <div className="list-guides-title flex-align-justify-center flex-column">
                  <h1>{guide.title}</h1>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
