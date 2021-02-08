import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './social-contract.component.html',
  styleUrls: ['./social-contract.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialContractComponent implements OnInit {

  public basicInformationForm = new FormGroup({});

  constructor() { }

  public ngOnInit(): void {
  }
  public log(lol: boolean): void {
    console.log(this.basicInformationForm);
    console.log(lol);
  }

}
