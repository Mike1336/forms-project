import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'basic-information',
  templateUrl: './execution-result.container.html',
  styleUrls: ['./execution-result.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutionResultContainer implements OnInit, OnDestroy {

  @Input()
  public form: FormGroup;

  @Output()
  public valid = new EventEmitter<boolean>();

  private _destroy$ = new Subject<void>();

  constructor() { }

  public ngOnInit(): void {
    this._listenStatus();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _listenStatus(): void {
    this.form?.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => this.valid.emit(this.form.valid)),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

}
