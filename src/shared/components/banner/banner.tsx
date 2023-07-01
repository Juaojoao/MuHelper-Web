import './styles.css';

const BannnerBig = () => {
  return (
    <div className="banner-big">
      <div className="banner-big-content"></div>
    </div>
  );
};

const BannerFlexSmall = () => {
  return (
    <div className="banner-flex-small">
      <div className="banner-small"></div>
      <div className="banner-small"></div>
      <div className="banner-small"></div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="banner">
      <BannnerBig />
      <BannerFlexSmall />
    </div>
  );
};
