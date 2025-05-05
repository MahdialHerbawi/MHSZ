export interface Request {
    id: number;
    carId: number;
    carModel: string;
    customerName: string;
    customerId: number;
    price:number
    type: 'rent' | 'purchase';
    status: 'pending' | 'approved' | 'rejected';
  }