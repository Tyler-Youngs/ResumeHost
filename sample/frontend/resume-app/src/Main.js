import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Info from './Info';
import Resume from './Resume';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={Info}></Route>
      <Route path='/Resume' element={Resume}></Route>
    </Routes>
  );
}

export default Main;