import { FunctionComponent } from "react";
import BlogPost from "./BlogPost";
import "./BlogPostList.css"
import { useUserInfoContext } from "../context/UserInfo";

interface BlogPostListProps {
  data:{
    userId:number;
    id:number;
    title:string;
    body:string;
  }[]
}

const BlogPostList: FunctionComponent<BlogPostListProps> = ({data}) =>{
  const {userInfo} = useUserInfoContext();
  console.log("new info",userInfo)

  return (<>
    <h1>Blog Post Assignment</h1>
    <table>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Post</th>
        </tr>
      </thead>
      {
        data.map((item,index) =>
            <BlogPost data={item} key={index}/>
        )
      }
    </table> 
  </>);
}

export default BlogPostList;