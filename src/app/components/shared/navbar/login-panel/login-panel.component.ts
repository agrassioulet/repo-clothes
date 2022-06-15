import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit, OnChanges {
  @Input() activePane: PaneType = 'left';
  @Input() _togglePanel!: boolean;
  openPanel = true
  result: ResultType = ''
  message = ''
  mode: ModeType = 'connexion';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);


  constructor(
    private _api: ApiService,
    public _auth: AuthService,
    private _router: Router
  ) { }
  ngOnChanges(): void {
    this.togglePanel()
  }

  ngOnInit(): void {
    this.updateDisplay()
  }


  togglePanel() {
    this.message = ''
    this.resetAllInputs()
    this.openPanel = !this.openPanel
    this.updateDisplay()
  }

  updateDisplay() {
    var element = document.getElementById("login_panel")
    let content = document.getElementById("content")
    if (element != null && content != null) {
      if (this.openPanel) {
        element.style.right = "0"
        content.style.filter = "grayscale(0.7)"
      }
      else {
        element.style.right = "-50vw"
        content.style.filter = "none"
      }
    }
  }



  onLogin() {

    if (this.loginFormControl.valid && this.passwordFormControl.valid) {
      console.log("postTypeRequest")
      this._api.postTypeRequest('user/login', {
        login: this.loginFormControl.value,
        password: this.passwordFormControl.value

      }).subscribe((res: any) => {
        // Si la connexion a pu s'établir
        if (res.status && res.status == 1) {

          this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
          this._auth.setDataInLocalStorage('token', res.token);
          this.message = 'Vous êtes connecté'
          this.resetAllInputs()
          //this._router.navigate(['']);
        }// sinon
        else {
          this.message = "La connexion a échouée"
        }
      })
    }
  }


  onRegister() {
    console.log("OnRegister")
    if (this.loginFormControl.valid && this.passwordFormControl.valid) {
      console.log('form fields valid')
      this._api.postTypeRequest('user/register', {
        login: this.loginFormControl.value,
        password: this.passwordFormControl.value,
      }).subscribe((result: any) => {
        console.log("result", result)
        // Si la connexion a pu s'établir
        if (result.status && result.status == 1) {

          this._auth.setDataInLocalStorage('userData', JSON.stringify(result.data));
          this._auth.setDataInLocalStorage('token', result.token);
          this.message = 'Vous êtes connecté'
        }// sinon
        else {
          this.message = "L'inscription a échouée"
        }
      })
    }
  }

  onLogout() {
    this._auth.clearStorage()
  }


  resetAllInputs() {
    this.emailFormControl.reset()
    this.loginFormControl.reset()
    this.passwordFormControl.reset()
  }



}

type PaneType = 'left' | 'right';
type ModeType = 'connexion' | 'subscription';
type ResultType = '' | 'connected' | 'registerFail' | 'loginFail';


