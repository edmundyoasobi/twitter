class Tweet{
    constructor(id,userId,tweeetContext){
        this.id = id; 
        this.userId = userId;
        this.tweeetContext = tweeetContext
        this.tweetLikes =  0
        this.retweetUsersId = []
        this.comments = []
    }

    addComment(comment){
        this.comments.push(comment)
    }

    addRetweetUserId(userId){
        this.retweetUsersId.push(userId)
    }

    likeTweet(){
        this.tweetLikes+=1
        
    }

    dislikeTweet(){
        this.tweetLikes-=1
    }
}

export default Tweet;