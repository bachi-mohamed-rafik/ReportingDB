import './App.css';
import Home from './components/Home/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login/Login';

function App() {
  return (

    <div className="App">
      <ChakraProvider>
        <Login />
      </ChakraProvider>

    </div>
  );
}

export default App;
