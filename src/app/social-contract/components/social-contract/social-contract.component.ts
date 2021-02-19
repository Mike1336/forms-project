import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { BasicInformationFormComponent } from '../../basic-information-form/components/basic-information-form/basic-information-form.component';
import { FamilyInformationFormComponent } from '../../family-information-form/components/family-information-form/family-information-form.component';
import { SocialAdaptationFormComponent } from '../../social-adaptation-form/components/social-adaptation-form/social-adaptation-form.component';
import { PaymentsInformationFormComponent } from '../../payments-information-form/components/payments-information-form/payments-information-form.component';
import { ContractExecutionFormComponent } from '../../contract-execution-form/components/contract-execution-form/contract-execution-form.component';
import { ContractTerminationFormComponent } from '../../contract-termination-form/components/contract-termination-form/contract-termination-form.component';
import { ExecutionResultFormComponent } from '../../execution-result-form/components/execution-result-form/execution-result-form.component';
import { ContractCorrectionFormComponent } from '../../contract-correction-form/components/contract-correction-form/contract-correction-form.component';
import { IFamilyMember } from '../../family-information-form/interfaces/family-member';
import { ISocialEvent } from '../../social-adaptation-form/interfaces/social-event';
import { IPayment } from '../../payments-information-form/interfaces/payment';
import { IExecutionEvent } from '../../contract-execution-form/interfaces/execution-event';
import { IResult } from '../../execution-result-form/interfaces/result';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  templateUrl: './social-contract.component.html',
  styleUrls: ['./social-contract.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialContractComponent implements OnInit {

  @ViewChild(BasicInformationFormComponent)
  public basicInformation: BasicInformationFormComponent;

  @ViewChild(FamilyInformationFormComponent)
  public familyInformation: FamilyInformationFormComponent;

  @ViewChild(SocialAdaptationFormComponent)
  public socialAdaptation: SocialAdaptationFormComponent;

  @ViewChild(PaymentsInformationFormComponent)
  public paymentsInformation: PaymentsInformationFormComponent;

  @ViewChild(ContractExecutionFormComponent)
  public contractExecution: ContractExecutionFormComponent;

  @ViewChild(ContractTerminationFormComponent)
  public contractTermination: ContractTerminationFormComponent;

  @ViewChild(ContractCorrectionFormComponent)
  public contractCorrection: ContractCorrectionFormComponent;

  @ViewChild(ExecutionResultFormComponent)
  public executionResult: ExecutionResultFormComponent;

  public get basicInformationForm(): FormGroup {
    return this.basicInformation?.getForm();
  }

  public get familyInformationForm(): FormGroup {
    return this.familyInformation?.getForm();
  }

  public get contractTerminationForm(): FormGroup {
    return this.contractTermination?.getForm();
  }

  public get contractCorrectionForm(): FormGroup {
    return this.contractCorrection?.getForm();
  }

  public get familyInformationTable(): IFamilyMember[] {
    return this.familyInformation.getTableData();
  }

  public get socialAdaptationTable(): ISocialEvent[] {
    return this.socialAdaptation.getTableData();
  }

  public get paymentsInformationTable(): IPayment[] {
    return this.paymentsInformation.getTableData();
  }

  public get contractExecutionTable(): IExecutionEvent[] {
    return this.contractExecution.getTableData();
  }

  public get executionResultTable(): IResult[] {
    return this.executionResult.getTableData();
  }

  constructor() {
  }

  public ngOnInit(): void {
  }

  public generatePDF(): void {
    if (!this._getFormValidStatus()) {
      return;
    }

    const documentDefinition = this._getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).print();
  }

  private _getDocumentDefinition(): any {
    return {
      content: [
        {
          text: 'СОЦИАЛЬНЫЙ КОНТРАКТ',
          style: 'title',
        },
        {
          text: 'Основные сведения',
          style: 'header',
        },
        this._getBasicInformationObject(),
        {
          text: 'Сведения о семье (гражданине)',
          style: 'header',
        },
        this._getFamilyInformationObject(),
        {
          text: 'Программа социальной адаптации',
          style: 'header',
          margin: [0, 100, 0, 15],
        },
        this._getSocialAdaptationObject(),
        {
          text: 'Сведения о выплатах',
          style: 'header',
        },
        this._getPaymentsInformationObject(),
        {
          text: 'Исполнение контракта',
          style: 'header',
        },
        this._getContractExecutionObject(),
        {
          text: 'Расторжение контракта',
          style: 'header',
          margin: [0, 100, 0, 15],
        },
        this._getContractTerminationObject(),
        {
          text: 'Изменение контракта',
          style: 'header',
        },
        this._getContractCorrectionObject(),
        {
          text: 'Результаты после исполнения контракта',
          style: 'header',
        },
        this._getExecutionResultObject(),
      ],
      info: {
        title: 'СОЦИАЛЬНЫЙ КОНТРАКТ',
      },
      styles: {
        title: {
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        header: {
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        point: {
          margin: [0, 10, 0, 10],
        },
        qr: {
          alignment: 'center',
          margin: [0, 15, 0, 0],
          fit: 100,
        },
        table: {
          margin: [15, 15, 15, 15],
          border: [0, '1px', 0, '1px'],
        },
        tableHeader: {
          bold: true,
        },
      },
    };
  }

  private _getBasicInformationObject(): any {
    const {
      documentNumber,
      dateEnd,
      dateOfContract,
      contractSubject,
      payOut,
      payoffAmount,
      socialAssistanceKind,
      totalAmount,
    } = this.basicInformationForm.value;

    return {
      table: {
        widths: ['*'],
        body: [
          [
            {
              columns: [
                [
                  {
                    text: `Номер договора: ${documentNumber}`,
                    style: 'point',
                  },
                  {
                    text: `Дата окончания действия контракта: ${
                    dateEnd.format('L')
                  }`,
                    style: 'point',
                  },
                  {
                    text: `Дата заключения: ${
                    dateOfContract.format('L')
                  }`,
                    style: 'point',
                  },
                  {
                    text: `Общая сумма, руб: ${totalAmount}`,
                    style: 'point',
                  },
                  {
                    text: `Выплачено, руб: ${payOut}`,
                    style: 'point',
                  },
                  {
                    text: `К выплате, руб: ${payoffAmount}`,
                    style: 'point',
                  },
                  {
                    text: `Направление социальной помощи: ${socialAssistanceKind}`,
                    style: 'point',
                  },
                  {
                    text: `Предмет контракта: ${contractSubject}`,
                    style: 'point',
                  },
                ],
              ],
            }],
        ],
      },
    };
  }

  private _getFamilyInformationObject(): any {
    const {
      familyMembersCount,
      familyIncomeCapitalByExecution,
      familyMembersCountByExecution,
      familyIncomePerCapital,
    } = this.familyInformationForm.value;

    return {
      table: {
        widths: ['*'],
        body: [
          [{
            columns: [
              [
                {
                  table: {
                    body: [
                      [
                        {
                          text: 'Фамилия',
                          style: 'tableHeader',
                        },
                        {
                          text: 'Имя',
                          style: 'tableHeader',
                        },
                        {
                          text: 'Отчество',
                          style: 'tableHeader',
                        },
                        {
                          text: 'СНИЛС',
                          style: 'tableHeader',
                        },
                        {
                          text: 'Родственная связь',
                          style: 'tableHeader',
                        },
                        {
                          text: 'Глава семьи',
                          style: 'tableHeader',
                        },
                      ],
                      ...this.familyInformationTable.map((member) => {
                        return [
                          member.lastname,
                          member.name,
                          member.patronymic,
                          member.snils,
                          member.role,
                          member.headOfFamily,
                        ];
                      }),
                    ],
                  },
                  style: 'table',
                },
                {
                  text: `Количество членов семьи на момент заключения контракта: ${
                    familyMembersCount
                  }`,
                  style: 'point',
                },
                {
                  text: `Среднедушевой доход семьи на момент заключения контракта, руб: ${
                    familyIncomeCapitalByExecution
                  }`,
                  style: 'point',
                },
                {
                  text: `Количество членов семьи на момент исполнения контракта: ${
                    familyMembersCountByExecution
                  }`,
                  style: 'point',
                },
                {
                  text: `Среднедушевой доход семьи на момент исполнения контракта, руб: ${
                    familyIncomePerCapital
                  }`,
                  style: 'point',
                },
              ],
            ],
          }],
        ],
      },
    };
  }

  private _getSocialAdaptationObject(): any {
    return {
      table: {
        body: [
          [
            {
              text: 'Мероприятие',
              style: 'tableHeader',
            },
            {
              text: 'Планируемый срок исполнения',
              style: 'tableHeader',
            },
            {
              text: 'Денежное',
              style: 'tableHeader',
            },
            {
              text: 'Социальный партнер',
              style: 'tableHeader',
            },
            {
              text: 'Контрольное заключение',
              style: 'tableHeader',
            },
          ],
          ...this.socialAdaptationTable.map((event) => {
            return [
              event.name,
              event.plannedExecutionDate,
              event.money,
              event.socialPartner,
              event.controlOpinion,
            ];
          }),
        ],
      },
      style: 'table',
    };
  }

  private _getPaymentsInformationObject(): any {
    return {
      table: {
        body: [
          [
            {
              text: 'Дата',
              style: 'tableHeader',
            },
            {
              text: 'Сумма',
              style: 'tableHeader',
            },
            {
              text: 'Мероприятие',
              style: 'tableHeader',
            },
            {
              text: 'Описание',
              style: 'tableHeader',
            },
            {
              text: 'Выплачено',
              style: 'tableHeader',
            },
          ],
          ...this.paymentsInformationTable.map((event) => {
            return [
              event.date,
              event.amount,
              event.event,
              event.description,
              event.payedOut,
            ];
          }),
        ],
      },
      style: 'table',
    };
  }

  private _getContractExecutionObject(): any {
    return {
      table: {
        body: [
          [
            {
              text: 'Мероприятие',
              style: 'tableHeader',
            },
            {
              text: 'Документ, подтверждающий исполнение',
              style: 'tableHeader',
            },
            {
              text: 'Данные о документе',
              style: 'tableHeader',
            },
            {
              text: 'Файл',
              style: 'tableHeader',
            },
          ],
          ...this.contractExecutionTable.map((event) => {
            return [
              event.name,
              event.confirmationDocument,
              event.confirmationDocumentData,
              event.fileLink,
            ];
          }),
        ],
      },
      style: 'table',
    };
  }

  private _getContractTerminationObject(): any {
    const {
      terminationDate,
      terminationInitiator,
      moratoriumPeriod,
      isUnscrupulousExecution,
      terminationReason,
    } = this.contractTerminationForm.value;

    return {
      table: {
        widths: ['*'],
        body: [
          [{
            columns: [
              [
                {
                  text: `Дата расторжения: ${terminationDate.format('L')}`,
                  style: 'point',
                },
                {
                  text: `Инициатор расторжения: ${terminationInitiator}`,
                  style: 'point',
                },
                {
                  text: `Срок моратория на заключение контракта с гражданином: ${moratoriumPeriod}`,
                  style: 'point',
                },
                {
                  text: `Недобросовестное исполнение получателем: ${isUnscrupulousExecution}`,
                  style: 'point',
                },
                {
                  text: `Причина расторжения: ${terminationReason}`,
                  style: 'point',
                },
              ],
            ],
          }],
        ],
      },
    };
  }

  private _getContractCorrectionObject(): any {
    const {
      additionalAgreementDate,
      dateEndRenewed,
      modificationReason,
    } = this.contractCorrectionForm.value;

    return {
      table: {
        widths: ['*'],
        body: [
          [{
            columns: [
              [
                {
                  text: `Дата дополнительного соглашения: ${additionalAgreementDate.format('L')}`,
                  style: 'point',
                },
                {
                  text: `Дата окончания с учетом продления: ${dateEndRenewed.format('L')}`,
                  style: 'point',
                },
                {
                  text: `Причина изменения: ${modificationReason}`,
                  style: 'point',
                },
              ],
            ],
          }],
        ],
      },
    };
  }

  private _getExecutionResultObject(): any {
    return {
      table: {
        body: [
          [
            {
              text: 'Дата обследования',
              style: 'tableHeader',
            },
            {
              text: 'Количество членов семьи',
              style: 'tableHeader',
            },
            {
              text: 'Общий доход семьи, руб',
              style: 'tableHeader',
            },
            {
              text: 'Среднедушевой доход семьи, руб',
              style: 'tableHeader',
            },
            {
              text: 'Заключен',
              style: 'tableHeader',
            },
          ],
          ...this.executionResultTable.map((result) => {
            return [
              result.date,
              result.familyMembersQuantity,
              result.totalFamilyIncome,
              result.averageFamilyIncome,
              result.concluded,
            ];
          }),
        ],
      },
      style: 'table',
    };
  }

  private _getFormValidStatus(): boolean {
    return this.basicInformationForm.valid
            && this.familyInformationForm.valid
            && this.contractTerminationForm.valid
            && this.contractCorrectionForm.valid;
  }

}
