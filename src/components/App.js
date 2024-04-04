import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Header({name}){
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

function About({image= "https://via.placeholder.com/215", about}){
  return (
    <aside>
      <img src={blogData.image} alt="blog logo"/>
      <p> {about = blogData.about}</p>
    </aside>
  )
}

function Article({title, data, date="January 1, 1970", preview, minutes}){
  let sticker;
   if (minutes < 30) {
    sticker = "☕️".repeat(Math.round(minutes / 5));
  } else {
    sticker = "🍱".repeat(Math.round(minutes / 10));
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{data} {date} . {sticker} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}
function ArticleList(){
  return (
    <main>
      {blogData.posts.map(post => <Article title={post.title} data={post.data} date={post.date} preview={post.preview} minutes= {post.minutes}/>)}
    </main>
  )
}
function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
