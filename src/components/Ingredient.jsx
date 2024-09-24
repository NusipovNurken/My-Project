import React from 'react';

const Ingredient = ({ imageSrc, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`w-[100px] h-[100px] rounded-full flex items-center justify-center
         cursor-pointer m-[10px]` + isSelected ? 'bg-green-400' : 'bg-white' } 
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: isSelected ? 'green' : 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: '10px'
      }}
    >
      <img src={imageSrc} alt="ingredient" style={{ width: '80%', height: '80%' }} />
    </div>
  );
};

export default Ingredient;

