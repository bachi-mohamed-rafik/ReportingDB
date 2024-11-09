import React, { useContext } from 'react';
import { DataContext } from './DataContext';
function Main() {
  const { data } = useContext(DataContext);
  return (
    <div>
      <h1>Main Component</h1>
      {data ? <p>{data.message}</p> : <p>No data received</p>}
    </div>
  );
}
export default Main;

