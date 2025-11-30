import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchEffect?: boolean;
}

const GlitchText = ({ text, className = '', glitchEffect = true }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <span
      className={`${className} ${glitchEffect && !isTyping ? 'glitch' : ''} ${isTyping ? 'typing' : ''}`}
      data-text={displayText}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;