
import './App.css';
import Sidebar from "./components/Sidebar"
import ContentBox from './components/ContentBox';
import {Box} from "@chakra-ui/react"
import {useSelector,useDispatch} from "react-redux"
import {data} from "./Constants/data"
import { useEffect } from 'react';
import { getData } from './redux/action';


import MenuBtn from './components/Drawer';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData(data));
  },[dispatch])
  return (
    <Box className="App" display={{base:"block",xl:"flex"}}>
       <MenuBtn/>
     <Sidebar />
     <ContentBox />
    
    </Box>
  );
}

export default App;
