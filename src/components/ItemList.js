import React from 'react';

const items = [
  { id: 1, text: 'Transaction 1', name : "Kitsuana E",balance :  1000,expenses :  500,rewards :"2pts"},
  { id: 2, text: 'Transaction 2', name : "Tumisang",balance :  100,expenses :  500,rewards :  "4pts"},
  { id: 3, text: 'Transaction 3', name : "Princess ",balance :  100,expenses :  500,rewards :  "2pts"},,
  { id: 4, text: 'Transaction 4', name : "Elie",balance :  1000,expenses :  500,rewards :  "10pts"},,
  { id: 5, text: 'Transaction 5', name : "Kossi ADANOU",balance :  100,expenses :  500,rewards :  "2pts"},,
  { id: 6, text: 'Transaction 6', name : "Maku ",balance :  1000,expenses :  500,rewards :  "5pts"},,
];

const ItemList = ({address}) => {
  return (
    // <div className="container mx-auto flex flex-col justify-center align-center">
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 text-center">Student Bank Data</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 "> */}
      <div>
        <h4 className='text-2xl leading-8g'>Home <span>My profile</span></h4>
        <p className='text-xl'>Welcome: {address}</p>
      </div>
      {/* <div className="flex flex-wrap justify-center flex-col items-center h-screen gap-4"> */}
      <div className="flex flex-col w-full mt-6">
        {items.map(item => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform
            hover:scale-105 transition-transform duration-300 ease-in-out flex-1 mt-5"
          >
            <div className="text-xl font-semibold">
              <span className='block text-blue-400'>{item.text}</span>
              <span className='block text-blue-400'>Name: {item.name}</span>
              <span className='block text-blue-400'>Balance: {item.balance}</span>
              <span className='block text-blue-400'>Expenses: {item.expenses}</span>
              <span className='block text-blue-400'>Rewards: {item.rewards}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

