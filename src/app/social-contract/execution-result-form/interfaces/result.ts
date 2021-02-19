export interface IResult {
  id: number;
  date: Date;
  familyMembersQuantity: string;
  totalFamilyIncome: string;
  averageFamilyIncome: string;
  concluded: string;
}

export type Result = Pick<IResult, 'id'> & IResult;
