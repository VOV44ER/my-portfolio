import { ReactNode } from 'react';

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  href?: string;
}

const CyberButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  href 
}: CyberButtonProps) => {
  const baseClasses = 'btn-cyber font-cyber font-medium tracking-wider uppercase';
  
  const variantClasses = {
    primary: 'border-primary text-primary hover:text-primary-foreground',
    secondary: 'border-secondary text-secondary hover:text-secondary-foreground',
    accent: 'border-accent text-accent hover:text-accent-foreground'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default CyberButton;