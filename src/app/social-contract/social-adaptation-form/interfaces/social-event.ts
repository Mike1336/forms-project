export interface ISocialEvent {
  id: number;
  name: string;
  plannedExecutionDate: Date;
  money: boolean;
  socialPartner: string;
  controlOpinion: string;
}

export type SocialEvent = Pick<ISocialEvent, 'id'> & ISocialEvent;
