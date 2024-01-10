
import './App.css';
import Sidebar from "./components/Sidebar"
import ContentBox from './components/ContentBox';
import {Flex} from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux"
import {data} from "./Constants/data"
import { useEffect } from 'react';
import { getData } from './redux/action';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData(data));
  },[dispatch])
  return (
    <Flex className="App">
     <Sidebar />
     <ContentBox />
    </Flex>
  );
}

export default App;
