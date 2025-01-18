import { FunctionComponent } from "react";
import { useUserInfoContext } from "../context/UserInfo";

interface BlogPostItemProps {
  data:{
    userId:number;
    id:number;
    title:string;
    body:string;
  }
}

const BlogPost: FunctionComponent<BlogPostItemProps> = ({data}) =>{
  const {userInfo} = useUserInfoContext();

  const foundUserName = userInfo.find((item)=>{return item.id === data.userId})

  return (
    <tbody>
      <tr>
        <td>{data.userId}</td>
        <td>{foundUserName?.name}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>  
    </tbody>
  );
}

export default BlogPost;