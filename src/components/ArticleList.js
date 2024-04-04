import Article from "./Article"
import blogData from "../data/blog";

function ArticleList(){
    return (
      <main>
        {blogData.posts.map(post => <Article title={post.title} data={post.data} date={post.date} preview={post.preview} minutes= {post.minutes}/>)}
      </main>
    )
  }

  export default ArticleList;