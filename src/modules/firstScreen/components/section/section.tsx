import { useState } from 'react';
import { dataSection } from './dataSction';
import './styles.css';

export const SectionHome = () => {
  const [hoveredItems, setHoveredItems] = useState(Array(dataSection.length).fill(false));

  const handleMouseEnter = (index: number) => {
    setHoveredItems((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredItems((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
  };

  return (
    <section className="section-content">
      <h1>MuHelper Guides</h1>

      <div className="container">
        <div className="wrap1">
          {dataSection.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={item.src} alt={item.alt} />
              <span className="npc-details animate">
                <h3>{item.alt.toUpperCase()}</h3>
                <p>{`All about the guide ${item.alt}`}</p>
                <a href={item.link}>
                  <button>Ir até o Guia</button>
                </a>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
