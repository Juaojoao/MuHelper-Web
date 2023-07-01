export interface GuideType {
  guide: {
    id?: number;
    title?: string;
    images?: string;
    npcID?: number;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  nextGuide?: {
    id?: number;
    title?: string;
    images?: string;
    npcID?: number;
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
}
