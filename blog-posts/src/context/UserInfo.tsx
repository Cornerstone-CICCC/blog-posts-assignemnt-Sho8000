import { createContext, useContext, useState } from "react";

type UserInfo = {
  id:number;
  name:string;
  username:string;
  email:string;
  adress:{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
      lat:string;
      lng:string;
    }
  },
  phone:string;
  website:string;
  company:{
    name:string;
    catchPhrase:string;
    bs:string;
  }
}

type UserInfoState = {
  userInfo:UserInfo[];
  setAdditionalFetchData:(info:UserInfo[])=>void
}

const UserInfoContext = createContext<UserInfoState | undefined>(undefined);

const UserInfoContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [userInfo, setUserInfo] = useState([{
    id:0,
    name:"",
    username:"",
    email:"",
    adress:{
      street:"",
      suite:"",
      city:"",
      zipcode:"",
      geo:{
        lat:"",
        lng:"",
      }
    },
    phone:"",
    website:"",
    company:{
      name:"",
      catchPhrase:"",
      bs:""
    }  
  }]);

  const setAdditionalFetchData = (info:UserInfo[])=>{
    setUserInfo(info);
  }

  const value = {userInfo,setAdditionalFetchData}

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  )
}

const useUserInfoContext = () : UserInfoState => {
  const context = useContext(UserInfoContext);
  if(!context){
    throw new Error("useCartContext must be used within a CartContext")
  }
  return context;
}

export { UserInfoContextProvider, useUserInfoContext}