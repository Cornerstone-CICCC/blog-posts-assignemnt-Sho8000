import { useEffect, useState } from 'react';
import './App.css'
import BlogPostList from './components/BlogPostList';
import { useUserInfoContext } from './context/UserInfo';

function App() {
  const [fetchData, setFetchData] = useState([
    {
      userId:0,
      id:0,
      title:"",
      body:""  
    }
  ]);

  const {setAdditionalFetchData} = useUserInfoContext();

  useEffect(()=>{
    const fetchData = async () => {
      try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(response.status === 200){
          setFetchData(await response.json());
        } else {
          throw "Error fetting"
        }
       }
       catch (error){
        console.error(error)
       }
    }
    fetchData();
  },[])

  useEffect(()=>{
    const additionalFetchData = async () => {
      try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(response.status === 200){
          setAdditionalFetchData(await response.json());
        } else {
          throw "Error fetting"
        }
       }
       catch (error){
        console.error(error)
       }
    }
    additionalFetchData();
  },[])

  return (
    <>
      <BlogPostList data={fetchData}/>
    </>
  )
}

export default App
