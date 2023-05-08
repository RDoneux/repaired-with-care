import { Injectable } from '@angular/core';
import {
  Connectable,
  Observable,
  Subject,
  distinctUntilChanged,
  filter,
  from,
  scan,
  switchMap,
} from 'rxjs';
import { IMessage } from 'src/interfaces/i-message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private baseSubject: Subject<any> = new Subject();
  private targetSubject = this.baseSubject.pipe(
    scan((acc, item: IMessage) => ({ ...acc, [item.stream]: item }), {}),
    distinctUntilChanged()
  ) as Connectable<any>;

  public send(value: IMessage) {
    this.baseSubject.next(value);
  }

  public listen$(): Observable<any> {
    return this.targetSubject.pipe(
      switchMap((obj) => from(Object.values(obj)))
    ) as Observable<any>;
  }

  public getStream$(filterName: string): Observable<any> {
    return this.targetSubject.pipe(
      switchMap((obj) => from(Object.values(obj))),
      filter((stream) => stream === filterName)
    );
  }
}
