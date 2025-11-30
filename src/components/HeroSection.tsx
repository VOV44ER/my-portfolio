import { useEffect, useState } from 'react';
import GlitchText from './GlitchText';
import CyberButton from './CyberButton';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="terminal-prompt text-accent text-xl mb-4 font-cyber">
            <GlitchText text="initializing_portfolio.exe" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">
              <GlitchText text="FRONTEND" className="block mb-2" />
              <GlitchText text="DEVELOPER" className="block" />
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 font-cyber">
            <GlitchText 
              text="Crafting digital experiences with code & creativity" 
              glitchEffect={false}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Projects', value: '50+', color: 'primary' },
            { label: 'Technologies', value: '25+', color: 'secondary' },
            { label: 'Experience', value: '3Y+', color: 'accent' },
            { label: 'Coffee Cups', value: '∞', color: 'primary' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="card-interactive rounded-lg p-6 text-center float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-cyber">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <CyberButton variant="primary" href="#projects">
            View Projects
          </CyberButton>
          <CyberButton variant="secondary" href="#contact">
            Let's Connect
          </CyberButton>
          <CyberButton variant="accent" href="#about">
            About Me
          </CyberButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full opacity-50 float"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-secondary rounded-full opacity-30 float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent rounded-full opacity-60 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary rounded-full opacity-40 float" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default HeroSection;