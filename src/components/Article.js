
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

  export default Article;