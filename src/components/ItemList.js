import React from 'react';

const items = [
  { id: 1, text: 'Transaction 1' },
  { id: 2, text: 'Transaction 2' },
  { id: 3, text: 'Transaction 3' },
  { id: 4, text: 'Transaction 4' },
  { id: 5, text: 'Transaction 5' },
  { id: 6, text: 'Transaction 6' },
];

const ItemList = ({address}) => {
  return (
    // <div className="container mx-auto flex flex-col justify-center align-center">
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2 text-center">Student Bank Data</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 "> */}
      <div>
        <h4>Home <span>My profile</span></h4>
        <p>Welcome: {address}</p>
      </div>
      {/* <div className="flex flex-wrap justify-center flex-col items-center h-screen gap-4"> */}
      <div className="flex flex-col w-full mt-6">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform
            hover:scale-105 transition-transform duration-300 ease-in-out flex-1 mt-5"
          >
            <p className="text-xl font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

