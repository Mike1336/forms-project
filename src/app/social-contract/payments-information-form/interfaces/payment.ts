export interface IPayment {
  id: number;
  date: Date;
  amount: string;
  event: string;
  description: string;
  payedOut: boolean;
}

export type Payment = Pick<IPayment, 'id'> & IPayment;
