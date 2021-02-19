export interface IExecutionEvent {
  id: number;
  name: string;
  confirmationDocument: string;
  confirmationDocumentData: string;
  fileLink: string;
}

export type ExecutionEvent = Pick<IExecutionEvent, 'id'> & IExecutionEvent;
