"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticateUser = function (user) {
    };
    AuthService.prototype.getUserInfo = function () {
        var user = {
            username: 'alexandressh',
            email: 'alexandressh@gmail.com',
            bio: 'This is a short bio',
            name: 'Henrique Alexandre',
            password: '123456789'
        };
        return user;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
