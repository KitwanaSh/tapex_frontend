// import React from 'react';

// const items = [
//   { id: 1, text: 'Item 1' },
//   { id: 2, text: 'Item 2' },
//   { id: 3, text: 'Item 3' },
//   { id: 4, text: 'Item 4' },
// ];

// const ItemList = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Item List</h1>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {items.map(item => (
//           <li
//             key={item.id}
//             className="bg-white p-4 rounded shadow-md"
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;



// import React from 'react';

// const items = [
//   { id: 1, text: 'Item 1' },
//   { id: 2, text: 'Item 2' },
//   { id: 3, text: 'Item 3' },
//   { id: 4, text: 'Item 4' },
//   { id: 5, text: 'Item 5' },
//   { id: 6, text: 'Item 6' },
// ];

// const ItemList = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">Creative Item List</h1>
//       <div className="flex flex-wrap justify-center">
//         {items.map(item => (
//           <div
//             key={item.id}
//             className="bg-blue-200 p-6 m-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             <p className="text-lg font-semibold">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemList;

import React from 'react';

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  { id: 4, text: 'Item 4' },
  { id: 5, text: 'Item 5' },
  { id: 6, text: 'Item 6' },
];

const ItemList = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Bank Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

