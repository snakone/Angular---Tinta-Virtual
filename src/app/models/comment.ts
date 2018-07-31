export class Comment {
  $key: string;   // $key for Firebase
  name: string;
  book: string;
  comment: string;
  likes: number;

  constructor(userName: string, bookTitle: string,
              bookComment: string, commentLikes: number){
        this.name = userName;
        this.book = bookTitle;
        this.comment = bookComment;
        this.likes = commentLikes;
      }
}
