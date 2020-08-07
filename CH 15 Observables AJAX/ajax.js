import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

ajax('https://api.github.com/gists/public').subscribe(console.log);

ajax('https://api.github.com/gists/public').pipe(
  map(data => data.response),
).subscribe(console.log);

ajax.getJSON('https://api.github.com/gists/public')
  .subscribe(console.log);