import Post from './Post'
const Posts = () => {
  return (
    <section>
      <Post
        likes="3,846"
        time="2 hours ago"
        name="Faizur Rehman"
        username="fazurrehman"
        imgName="e1c0bf86-c283-4d77-96c5-af2948131fdb"
        status="unseen"
      />
      <Post
        likes="1,538"
        time="5 hours ago"
        name="UI/UX Migulko"
        username="ui_migulko"
        imgName="f3474bb2-6d63-485c-9745-a62b640fbc6f"
        status="seen"
      />
      <Post
        status="seen"
        likes="2,245"
        time="10 hours ago"
        name="Dhanish Gajjar"
        username="dhanishgajjar"
        imgName="903f882b-8723-404f-bb7b-0e0b545309b0"
      />
    </section>
  )
}

export default Posts
