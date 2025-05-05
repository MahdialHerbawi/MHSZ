export interface Car {
    selectedClientId: number;
    clientId: number;
    ownerId: number;
    id: number|any;
    owner: string;
    model: string;
    year: number;
    price: number;
    available: boolean;
    type: 'rent' | 'purchase';
    description: string;
    imageUrl?: string; // optional field
  }
  