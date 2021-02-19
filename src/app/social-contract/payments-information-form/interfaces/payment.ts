export interface IPayment {
  id: number;
  date: string;
  amount: string;
  event: string;
  description: string;
  payedOut: boolean;
}

export type Payment = Pick<IPayment, 'id'> & IPayment;
