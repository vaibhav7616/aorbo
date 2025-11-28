import React from 'react';

export const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <img 
            src="/assets/_/assets/Logo.png"   // <-- your image path
            alt="AORBO TREKS Logo"
            onClick={onClick}
            className="h-12 w-auto cursor-pointer"
        />
    );
}

export default Logo;
