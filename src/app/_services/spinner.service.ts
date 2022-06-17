import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

hideSpinner() {
  var spinner = document.getElementById('spinner')
  if(spinner != null) {spinner.style.display = 'none'}
}

showSpinner() {
  var spinner = document.getElementById('spinner')
  if(spinner != null) {spinner.style.display = 'block'}
}

}
