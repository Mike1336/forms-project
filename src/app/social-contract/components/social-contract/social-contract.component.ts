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
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'social-contract-form',
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
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Основные сведения',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
        this._getBasicInformationObject(),
        {
          text: 'Сведения о семье (гражданине)',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 15, 0, 10],
        },
        this._getFamilyInformationObject(),
        {
          text: 'Расторжение контракта',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 15, 0, 10],
        },
        this._getContractTerminationObject(),
        {
          text: 'Изменение контракта',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 15, 0, 10],
        },
        this._getContractCorrectionObject(),
        {
          columns: [
            {
              qr: +', Contact No : ' + 'lol',
              alignment: 'center',
              margin: [0, 15, 0, 0],
              fit: 100,
            },
          ],
        },
      ],
      info: {
        title: 'СОЦИАЛЬНЫЙ КОНТРАКТ',
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
          [{
            columns: [
              [
                {
                  text: `Номер договора: ${documentNumber}`,
                },
                {
                  text: `Дата окончания действия контракта: ${
                    dateEnd.format('L')
                  }`,
                },
                {
                  text: `Дата заключения: ${
                    dateOfContract.format('L')
                  }`,
                },
                {
                  text: `Общая сумма, руб: ${totalAmount}`,
                },
                {
                  text: `Выплачено, руб: ${payOut}`,
                },
                {
                  text: `К выплате, руб: ${payoffAmount}`,
                },
                {
                  text: `Направление социальной помощи: ${socialAssistanceKind}`,
                },
                {
                  text: `Предмет контракта: ${contractSubject}`,
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
                  text: `Количество членов семьи на момент заключения контракта: ${
                    familyMembersCount
                  }`,
                },
                {
                  text: `Среднедушевой доход семьи на момент заключения контракта, руб: ${
                    familyIncomeCapitalByExecution
                  }`,
                },
                {
                  text: `Количество членов семьи на момент исполнения контракта: ${
                    familyMembersCountByExecution
                  }`,
                },
                {
                  text: `Среднедушевой доход семьи на момент исполнения контракта, руб: ${
                    familyIncomePerCapital
                  }`,
                },
              ],
            ],
          }],
        ],
      },
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
                },
                {
                  text: `Инициатор расторжения: ${terminationInitiator}`,
                },
                {
                  text: `Срок моратория на заключение контракта с гражданином: ${moratoriumPeriod}`,
                },
                {
                  text: `Недобросовестное исполнение получателем: ${isUnscrupulousExecution}`,
                },
                {
                  text: `Причина расторжения: ${terminationReason}`,
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
                },
                {
                  text: `Дата окончания с учетом продления: ${dateEndRenewed.format('L')}`,
                },
                {
                  text: `Причина изменения: ${modificationReason}`,
                },
              ],
            ],
          }],
        ],
      },
    };
  }

  private _getFormValidStatus(): boolean {
    return this.basicInformationForm.valid
            && this.familyInformationForm.valid
            && this.contractTerminationForm.valid
            && this.contractCorrectionForm.valid;
  }

}
