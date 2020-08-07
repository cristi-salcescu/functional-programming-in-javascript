import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { timer, combineLatest } from 'rxjs';

const dataSource1 = of(1, 2, 3, 4, 5);
const dataSource2 = of('A', 'B', 'C');

combineLatest(dataSource1, dataSource2)
    .subscribe(
    ([data1, data2]) => {
        console.log(data1)
        console.log(data2)
    }
  )