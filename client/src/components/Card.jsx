import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({children, customKey, customStyles}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    setMousePosition({ x, y });
  };


  const gradientStyle = {
    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06),
    transparent 40%)`,
  };

  return (
    <div
        className="card"
        onMouseMove={handleMouseMove}
        key={customKey}
        style={customStyles}
    >
        {children}
        <div style={gradientStyle} className='card_bg'/>
    </div>
  );
};

export default Card;