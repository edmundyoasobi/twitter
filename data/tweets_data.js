import Tweet from "../models/tweet";
import Profile from "../models/profile";
import Comment from "../models/comment";

export const PROFILES = [ 
    new Profile(1,"Edmundd Cheong","@_edmund","edmund"),
    new Profile(2,"Haldona","@hal12gt","haldona")
];

export const TWEETS = [
    new Tweet(1,1,"Welcome to my first post"),
    new Tweet(2,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(3,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(4,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(5,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(6,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(7,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(8,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑"),
    new Tweet(9,2,"BIRTH Vol.10 ありがとうございました初アンコール嬉しかったなまた来年もライブで会えますように聴きにきてくれてありがとう写真はKey.サポートしてくれた野口文くんと！このポーズで撮りたかったみたいです。よくわかんなくて面白いね。笑")

];

export const COMMENTS =[
    new Comment(1,2,"Welcome to Twitter!",1),
    new Comment(2,2,"Welcome to Twitter!",1),
    new Comment(3,2,"Welcome to Twitter!",1),
    new Comment(4,2,"Welcome to Twitter!",1),
    new Comment(5,2,"Welcome to Twitter!",1),
    new Comment(6,2,"Welcome to Twitter!",1),
    new Comment(7,2,"Welcome to Twitter!",1),
    new Comment(8,2,"Welcome to Twitter!",1),
    new Comment(9,2,"Welcome to Twitter!",1),
    new Comment(10,2,"Welcome to Twitter!",1),
    new Comment(11,2,"Welcome to Twitter!",1),
]

TWEETS[0].likeTweet()
TWEETS[0].likeTweet()
TWEETS[0].likeTweet()
TWEETS[0].likeTweet()
TWEETS[1].likeTweet()
TWEETS[1].likeTweet()
TWEETS[1].likeTweet()
TWEETS[1].likeTweet()
TWEETS[1].likeTweet()
TWEETS[1].likeTweet()