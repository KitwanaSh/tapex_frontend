import React from 'react';

const items = [
  { id: 1, text: 'Student 1' },
  { id: 2, text: 'Student 2' },
  { id: 3, text: 'Student 3' },
  { id: 4, text: 'Student 4' },
  { id: 5, text: 'Student 5' },
  { id: 6, text: 'Student 6' },
];

const ItemList = ({address}) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Bank Data</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 "> */}
      <div>
        <h4>Home <span>My profile</span></h4>
        <p>Welcome: {address}</p>
      </div>
      <div className="flex flex-wrap justify-center flex-col items-center h-screen gap-4">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <p className="text-xl font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

