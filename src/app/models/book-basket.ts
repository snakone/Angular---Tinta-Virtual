export class BookBasket {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  subTotal: number;

  constructor(bookId: number, bookTitle: string, bookImage: string,
              bookPrice: number, bookQuantity: number,
              subTotalPrice: number){

        this.id = bookId;
        this.title = bookTitle;
        this.image = bookImage;
        this.price = bookPrice;
        this.quantity = bookQuantity;
        this.subTotal = subTotalPrice;
      }
}
