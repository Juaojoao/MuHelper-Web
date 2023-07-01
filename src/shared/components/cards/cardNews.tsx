import './styles.css';

export type CardProps = {
  path: string;
  images: string;
  title: string;
};

export const CardNews = ({ title, images, path }: CardProps) => {
  return (
    <div>
      <div className="card-news-container">
        <a href={path} className="card-news-content">
          {images && images?.length > 0 && (
            <div className="list-guides-image">
              <img src={images} alt="" width={200} height={100} />
            </div>
          )}
          <div className="card-news-title">
            <h1>{title}</h1>
          </div>
        </a>
      </div>
    </div>
  );
};
