"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, NgbPopoverConfig) {
        this.fb = fb;
        this.authService = authService;
        this.NgbPopoverConfig = NgbPopoverConfig;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SignupComponent.prototype.onSubmit = function () {
        var isFormValid = this.validateForm();
        if (!isFormValid) {
            return false;
        }
    };
    SignupComponent.prototype.validateForm = function () {
        var formModel = this.signupForm.value;
        var invalidPassword = formModel.password !== formModel.passwordConfirmation;
        if (invalidPassword) {
            return false;
        }
        return true;
    };
    SignupComponent.prototype.prepareUserInfo = function () {
        var formModel = this.signupForm.value;
        var user = {
            username: formModel.username,
            email: formModel.email,
            name: formModel.name,
            bio: '',
            password: formModel.password
        };
        return user;
    };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this.fb.group({
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.required],
            passwordConfirmation: ['', forms_1.Validators.required]
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss'],
            providers: [NgbPopoverConfig]
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
