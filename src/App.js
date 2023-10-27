import React from 'react';
import ItemList from './components/ItemList';

import styles from "./index.css"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <ItemList />
    </div>
  );
}

export default App;