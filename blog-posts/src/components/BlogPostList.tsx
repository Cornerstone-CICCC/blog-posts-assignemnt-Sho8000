import { FunctionComponent } from "react";
import BlogPost from "./BlogPost";
import "./BlogPostList.css"

interface BlogPostListProps {
  data:{
    userId:number;
    id:number;
    title:string;
    body:string;
  }[]
}

const BlogPostList: FunctionComponent<BlogPostListProps> = ({data}) =>{
  return (<>
    <h1>Blog Post Assignment</h1>
    <table>
      <thead>
        <tr>
          <th>UserId</th>
          <th>UserName</th>
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