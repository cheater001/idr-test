export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
}
