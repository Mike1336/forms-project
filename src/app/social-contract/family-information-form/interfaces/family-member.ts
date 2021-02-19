export interface IFamilyMember {
  id: number;
  lastname: string;
  name: string;
  patronymic: string;
  snils: string;
  role: string;
  headOfFamily: boolean;
}

export type FamilyMember = Pick<IFamilyMember, 'id'> & IFamilyMember;
