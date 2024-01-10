
import './App.css';
import Sidebar from "./components/Sidebar"
import ContentBox from './components/ContentBox';
import {Flex} from "@chakra-ui/react"
function App() {
  return (
    <Flex className="App">
     <Sidebar />
     <ContentBox />
    </Flex>
  );
}

export default App;
