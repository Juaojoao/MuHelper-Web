export interface GuideType {
  id: number;
  title: string;
  description: string;
  npcID: number;
  materials?: string[];
  steps?: string[];
  image?: string[];
  notes?: string[];
}
