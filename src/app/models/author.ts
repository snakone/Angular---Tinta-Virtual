export class Author {
  $key: string;  // $key for Firebase
  name: string;
  image: string;
  birth: string;
  country: string;
  bio: string;
  likes: number;

  constructor(authorName: string, authorImage: string, authorBirth: string,
			  authorCountry: string, authorBio: string, authorLikes: number){
				  this.name = authorName;
				  this.image = authorImage;
				  this.birth = authorBirth;
				  this.country = authorCountry;
				  this.bio = authorBio;
				  this.likes = authorLikes;
			  }
}
