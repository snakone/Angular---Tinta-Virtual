export class Book {
  $key: string;   // $key for Firebase
  title: string;
  author: string;
  gender: string;
  type: string;
  language: string;
  image: string;
  description: string;
  likes: number;
  price: number;
  stock: number;
  new: boolean;

  constructor(bookTitle: string, bookAuthor: string, bookGender: string,
             bookType: string, bookLanguage: string, bookImage: string,
             bookDesription: string, bookLikes: number, bookPrice: number,
             bookStock: number, bookNew: boolean){

        this.title = bookTitle;
        this.author = bookAuthor;
        this.gender = bookGender;
        this.type = bookType;
        this.language = bookLanguage;
        this.image = bookImage;
        this.description = bookDesription;
        this.likes = bookLikes;
        this.price = bookPrice;
        this.stock = bookStock;
        this.new = bookNew;
      }

}
