import { FunctionComponent } from "react";

interface BlogPostItemProps {
  data:{
    userId:number;
    id:number;
    title:string;
    body:string;
  }
}

const BlogPost: FunctionComponent<BlogPostItemProps> = ({data}) =>{
  console.log('props', data);
  return (
    <tbody>
      <tr>
        <td>{data.userId}</td>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>  
    </tbody>
  );
}

export default BlogPost;