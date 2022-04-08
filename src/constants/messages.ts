export interface IDirectMessage {
  id: string
  user: {
    avatar: string
    username: string
  }
  lastMessage: {
    text: string
    time: string
  }
}

export const PRIMARY_MESSAGES: IDirectMessage[] = [
  {
    id: "message-1",
    user: {
      avatar: "https://avatars.githubusercontent.com/u/6355370?v=4",
      username: "ianschmitz"
    },
    lastMessage: {
      text: "Yeah, I think we should do that",
      time: "1h"
    }
  },
  {
    id: "message-2",
    user: {
      avatar: "https://avatars.githubusercontent.com/u/22095598?v=4",
      username: "jurrehoutkamp"
    },
    lastMessage: {
      text: "Good job Mehdi!",
      time: "3h"
    }
  },
  {
    id: "message-3",
    user: {
      avatar: "https://avatars.githubusercontent.com/u/1016365?v=4",
      username: "PatrickJS"
    },
    lastMessage: {
      text: "Wow, that is a cool feature",
      time: "6h"
    }
  }
]
