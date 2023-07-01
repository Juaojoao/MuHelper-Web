import './styles.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  subImages?: subImageProps[];
  id: number;
}

interface subImageProps {
  subId: number;
  subImage: string;
  subAlt: string;
}
export const CardShared = ({ title, description, image, alt, id, subImages }: CardProps) => {
  return (
    <div className="card card-npc-quest">
      <div className="row" key={id}>
        <div className="card-image">
          <div className="card-image-content">
            <img src={image} className="img-fluid" alt={alt} width={250} height={250} />
          </div>
        </div>
        <div className="card-body">
          <div className="col-md-8 col-lg-8 col-xl-9 col-xxl-9 card-content">
            <div className="card-content-text">
              <h2 className="titulo-quest">{title}</h2>
              <p className="descripcion-quest">{description}</p>
            </div>
            {subImages ? (
              <div className="card-content-image">
                {subImages.map((subImage) => (
                  <div key={subImage.subId} className="image-entry">
                    <img
                      src={subImage.subImage}
                      className="img-fluid"
                      alt={subImage.subAlt}
                      width={100}
                    />
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
