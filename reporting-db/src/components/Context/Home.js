import React from 'react';
import { DataProvider } from './DataContext';
//import Sidebar from './Sidebar';
import Main from './Main';
import Sidebar2 from './SideBar';
import SideBar from './SideBar';

function Home() {
  return (
    <DataProvider>
      <div>
        <table>
          <tr>
            <td>
          <SideBar/>
        </td>
        <td>
        <Main />
        </td>
        </tr>
        </table>
      </div>
    </DataProvider>
  );
}

export default Home;