import { useState } from "react";

export default function Hero ({ onEnter }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const heroStyle = {
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    };
  
    const contentStyle = {
      textAlign: 'center',
      padding: '0 1.5rem'
    };
  
    const titleStyle = {
      fontSize: '6rem',
      fontWeight: '300',
      color: 'white',
      marginBottom: '1.5rem',
      letterSpacing: '-0.025em',
      lineHeight: '1'
    };
  
    const dividerStyle = {
      width: '8rem',
      height: '1px',
      background: 'linear-gradient(to right, transparent, #60a5fa, transparent)',
      margin: '0 auto 1.5rem'
    };
  
    const subtitleStyle = {
      fontSize: '1.5rem',
      color: '#d1d5db',
      fontWeight: '300',
      letterSpacing: '0.1em',
      marginBottom: '3rem'
    };
  
    const buttonStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      color: 'white',
      backgroundColor: 'transparent',
      border: '1px solid #4b5563',
      borderRadius: '9999px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
      ...(isHovered && {
        borderColor: '#60a5fa',
        boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
        transform: 'translateY(-2px)'
      })
    };
  
    const arrowStyle = {
      marginLeft: '0.5rem',
      width: '1.25rem',
      height: '1.25rem',
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
    };
  
    return (
      <div style={heroStyle}>
        <style>{`
          @media (max-width: 768px) {
            .hero-title {
              font-size: 4rem !important;
            }
            .hero-subtitle {
              font-size: 1.25rem !important;
            }
          }
        `}</style>
        
        <div style={contentStyle}>
          <h1 className="hero-title" style={titleStyle}>
            TECNO
          </h1>
          <div style={dividerStyle}></div>
          <p className="hero-subtitle" style={subtitleStyle}>
            REPARACIONES
          </p>
          
          <button
            onClick={onEnter}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>INGRESAR</span>
            <svg 
              style={arrowStyle}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  };