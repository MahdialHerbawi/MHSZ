export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'client' | 'customer';
    status: 'pending' | 'approved' | 'rejected';
    blocked:boolean;
  }