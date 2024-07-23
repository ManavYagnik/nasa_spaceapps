import React from 'react';
import Card from './Card';

const cards = [
  { imageSrc: 'https://picsum.photos/500/300/?image=10', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
  { imageSrc: 'https://picsum.photos/500/300/?image=5', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
  { imageSrc: 'https://picsum.photos/500/300/?image=11', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
  { imageSrc: 'https://picsum.photos/500/300/?image=14', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
  { imageSrc: 'https://picsum.photos/500/300/?image=17', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
  { imageSrc: 'https://picsum.photos/500/300/?image=2', title: 'Card Grid Layout', description: 'Demo of pixel perfect pure CSS simple responsive card grid layout' },
];

const CardGrid: React.FC = () => {
  return (
    <div className="font-quicksand text-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl font-normal">Responsive Card Grid Layout</h1>
        <ul className="flex flex-wrap list-none p-0">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </ul>
      </div>
      <h3 className="text-center text-sm mt-8">Made with ♡</h3>
    </div>
  );
};

export default CardGrid;
