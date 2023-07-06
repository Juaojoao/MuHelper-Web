import './styles.css';

const BannnerBig = () => {
  return <div className="banner-big"></div>;
};

const BannerFlexSmall = () => {
  return (
    <div className="banner-flex-small">
      <div className="banner-small">
        <a href="https://epicmu.net" target="_blank">
          <img src="https://muhelper.com/epic-gif3.gif" alt="epicMu" />
        </a>
      </div>
      <div className="banner-small">
        <a href="https://epicmu.net" target="_blank">
          <img src="https://muhelper.com/epic-gif3.gif" alt="epicMu" />
        </a>
      </div>
      <div className="banner-small">
        <a href="https://epicmu.net" target="_blank">
          <img src="https://muhelper.com/epic-gif3.gif" alt="epicMu" />
        </a>
      </div>
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
