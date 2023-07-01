import { CardProps } from './cardNews';

export const CardNpc = ({ path, images, title }: CardProps) => {
  return (
    <a href={path} className="cards card-npc-guide" style={{ backgroundImage: `url(${images})` }}>
      <div className="card-news-title">
        <h1>{title}</h1>
      </div>
    </a>
  );
};
