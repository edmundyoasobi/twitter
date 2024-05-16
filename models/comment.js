class Comment{
    constructor(id,userId,userComment,tweetId){
        this.id = id;
        this.userId = userId;
        this.tweetId = tweetId;
        this.userComment = userComment;
        this.tweetLikes =  2
        this.retweetUsersId = []
        this.comments = []

    }
    likeTweet(){
        this.tweetLikes+=1
        
    }
}
export default Comment;