import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {
    name: 'Обучение',
    confirmationDocument: 'Сертификат о прохождении обучения',
    confirmationDocumentData: 'А232 от 10.02.2020',
    fileLink: 'ссылка',
  },
  {
    name: 'Открытие ИП',
    confirmationDocument: 'Выписка из ФНС',
    confirmationDocumentData: '1232 от 14.02.2020',
    fileLink: 'ссылка',
  },
  {
    name: 'Открытие ИП',
    confirmationDocument: 'Квитанция об оплате госпошлины',
    confirmationDocumentData: '12 от 10.02.2020',
    fileLink: 'ссылка',
  },
  {
    name: 'Покупка оборудования 1',
    confirmationDocument: 'Товарный и кассовый чек',
    confirmationDocumentData: 'от 20.02.2020',
    fileLink: 'ссылка',
  },
];

@Component({
  selector: 'contract-execution-form',
  templateUrl: './contract-execution-form.component.html',
  styleUrls: ['./contract-execution-form.component.scss'],
})
export class ContractExecutionFormComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'confirmationDocument', 'confirmationDocumentData', 'fileLink', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  public ngOnInit(): void {
  }

}
