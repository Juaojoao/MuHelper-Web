export interface GuideType {
  guide: Guides;
  nextGuide?: NextGuide;
  previousGuide?: PreviousGuide;
}

export interface Guides {
  id?: number;
  title?: string;
  images?: string;
  npcID?: number;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PreviousGuide {
  id?: number;
  title?: string;
  images?: string;
}

interface NextGuide {
  id?: number;
  title?: string;
  images?: string;
}
