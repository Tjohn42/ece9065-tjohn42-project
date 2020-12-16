(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daftyler/ECE9065/ece9065-tjohn42-project/scheduleApp/src/main.ts */"zUnb");


/***/ }),

/***/ "14yi":
/*!*************************************!*\
  !*** ./src/app/user-roles.guard.ts ***!
  \*************************************/
/*! exports provided: UserRolesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesGuard", function() { return UserRolesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserRolesGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('access_token') && localStorage.getItem('admin') == "1") {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
UserRolesGuard.ɵfac = function UserRolesGuard_Factory(t) { return new (t || UserRolesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserRolesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRolesGuard, factory: UserRolesGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRolesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RegisterComponent_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class RegisterComponent {
    constructor(rs, router) {
        this.rs = rs;
        this.router = router;
    }
    submit() {
        //console.log(this.username, this.password,this.email);
        console.log(this.username);
        if (this.username == null) {
            this.exist = "Username must not be empty!";
            return;
        }
        else if (this.password == null) {
            this.exist = "Password must not be empty!";
            return;
        }
        else if (this.email == null) {
            this.exist = "Email must not be empty!";
            return;
        }
        this.rs.registerUser(this.username, this.password, this.email).subscribe((response) => {
            console.log(response.text);
            this.exist = "USER CREATED, WELCOME!";
        }, (error) => { this.exist = "USER ALREADY EXISTS!"; console.log(error); });
        // this.auth.login(this.username, this.password)
        //   .pipe(first())
        //   .subscribe(
        //     result => this.router.navigate(['secure-user']),
        //     err => this.error = 'Could not authenticate'
        //   );
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 18, vars: 5, consts: [[4, "ngIf"], [3, "submit"], [1, "form-group", "col-3"], ["for", "username"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_h4_0_Template, 2, 1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.exist, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "2yus":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: rest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return rest; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class rest {
    constructor(http) {
        this.http = http;
        this.allCourses = "http://localhost:5000/api/courses";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token') })
        };
    }
    getCourse() {
        return this.http.get(this.allCourses, this.httpOptions);
    }
    searchCourse(subject, course, component, keyword) {
        if (course && subject && component) {
            return this.http.get("http://localhost:5000/api/courses/" + `${subject}` + "/" + `${course}` + "/" + `${component}`);
        }
        else if (course && subject) {
            return this.http.get("http://localhost:5000/api/courses/" + `${subject}` + "/" + `${course}`);
        }
        else if (subject) {
            return this.http.get(`http://localhost:5000/api/subject/${subject}`);
        }
        else if (keyword) {
            return this.http.get(`http://localhost:5000/api/keyword/${keyword}`);
        }
        else {
            console.log("");
        }
    }
    searchDB(scheduleName, Email) {
        return this.http.get("http://localhost:5000/api/schedules/" + `${scheduleName}` + "/" + `${Email}`, this.httpOptions);
    }
    deleteSch(schName) {
        return this.http.delete("http://localhost:5000/api/delete/" + `${schName}`, this.httpOptions);
    }
    deleteAllUsers(email) {
        return this.http.delete("http://localhost:5000/api/deleteUser/" + `${email}`, this.httpOptions);
    }
    deleteAll() {
        return this.http.delete("http://localhost:5000/api/delete/", this.httpOptions);
    }
    getAllSchedules(user) {
        return this.http.get("http://localhost:5000/api/scheduleList/" + `${user}`, this.httpOptions);
    }
    registerUser(Username, Password, Email) {
        return this.http.post("http://localhost:5000/api/User/" + `${Username}` + "/" + `${Email}` + "/" + `${Password}`, this.httpOptions);
    }
    registerUserGmail(Username, Email) {
        return this.http.post("http://localhost:5000/api/gmailUser/" + `${Username}` + "/" + `${Email}`, this.httpOptions);
    }
    saveSchedule(scheduleName) {
        const scheduleInfo = JSON.stringify(scheduleName);
        return this.http.post("http://localhost:5000/api/schedule/", scheduleInfo, this.httpOptions);
    }
    getPublic() {
        return this.http.get("http://localhost:5000/api/publicSchedule", this.httpOptions);
    }
    addReview(review) {
        const reviewInfo = JSON.stringify(review);
        return this.http.post("http://localhost:5000/api/addReview/", reviewInfo, this.httpOptions);
    }
    getReviews(username, subject, course, component) {
        //const reviewInfo = JSON.stringify(review);
        // console.log(reviewInfo);
        return this.http.get("http://localhost:5000/api/getReviews/" + `${username}` + "/" + `${subject}` + "/" + `${course}` + "/" + `${component}`, this.httpOptions);
    }
    getReviewsAdmin(username, subject, course, component) {
        return this.http.get("http://localhost:5000/api/getReviewsAdmin/" + `${username}` + "/" + `${subject}` + "/" + `${course}` + "/" + `${component}`, this.httpOptions);
    }
    hideReview(review) {
        const reviewInfo = JSON.stringify(review);
        // console.log(reviewInfo);
        return this.http.post("http://localhost:5000/api/flagReview", reviewInfo, this.httpOptions);
    }
    getUser(email) {
        return this.http.get("http://localhost:5000/api/getUsersAdmin/" + `${email}`, this.httpOptions);
    }
    findComments(email) {
        return this.http.get("http://localhost:5000/api/getUsersComments/" + `${email}`, this.httpOptions);
    }
    makeAdmin(email) {
        const EmailJSON = JSON.stringify(email);
        return this.http.post("http://localhost:5000/api/makeAdmin", EmailJSON, this.httpOptions);
    }
    deactivateAccount(email) {
        const EmailJSON = JSON.stringify(email);
        return this.http.post("http://localhost:5000/api/deactivateAccount", EmailJSON, this.httpOptions);
    }
    doesExist(email) {
        return this.http.get("http://localhost:5000/api/getUsers/" + `${email}`, this.httpOptions);
    }
    resendEmail(email) {
        return this.http.post("http://localhost:5000/api/resendEmail/" + `${email}`, this.httpOptions);
    }
    updateSchedule(schedule) {
        const scheduleINFO = JSON.stringify(schedule);
        return this.http.post("http://localhost:5000/api/updateSchedule", scheduleINFO, this.httpOptions);
    }
}
rest.ɵfac = function rest_Factory(t) { return new (t || rest)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
rest.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: rest, factory: rest.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](rest, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C2D/":
/*!******************************************!*\
  !*** ./src/app/heros/heros.component.ts ***!
  \******************************************/
/*! exports provided: HerosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerosComponent", function() { return HerosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HerosComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", course_r2.subject, " ", course_r2.courseNum, "--", course_r2.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", course_r2.days, " Start Time: ", course_r2.startTime, " End Time: ", course_r2.endTime, " Component: ", course_r2.courseComp, " Section: ", course_r2.section, " --- ", course_r2.yearTaken, "");
} }
function HerosComponent_li_41_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sched_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", sched_r8.subject, " ", sched_r8.courseNum, "--", sched_r8.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", sched_r8.days, " Start Time: ", sched_r8.startTime, " End Time: ", sched_r8.endTime, " Component: ", sched_r8.courseComp, " Section: ", sched_r8.section, " --- ", sched_r8.yearTaken, " ");
} }
function HerosComponent_li_41_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HerosComponent_li_41_ul_5_li_1_Template, 5, 9, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.schedule);
} }
function HerosComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerosComponent_li_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r5 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.review(ctx_r9.final[i_r5], i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HerosComponent_li_41_ul_5_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ls_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ls_r4.Username, "'s ", ls_r4.ScheduleName, " Schedule -- Contains ", ls_r4.NumberCourses, " Course(s). Created: ", ls_r4.Date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ls_r4.ScheduleName == ctx_r1.findSchedule);
} }
//var schedule: any[]= [];
class HerosComponent {
    constructor(rs) {
        this.rs = rs;
        this.subject = "";
        this.course = "";
        this.component = "";
        this.keywords = "";
        this.scheduleName = "";
        this.year = "";
        this.hero = {
            id: 1,
            subject: "",
            catalog: "",
            component: "",
            scheduleName: "",
            schedule: [],
            exist: false,
            values: ""
        };
        this.courses = [];
        this.schedule = [];
        this.list = [];
        this.final = [];
        this.findSchedule = "";
    }
    search() {
        this.rs.getCourse().subscribe((response) => {
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                this.courses[i].startTime = element.startTime;
                this.year = element.courseNum.toString().slice(0, 1);
                switch (this.year) {
                    case "0":
                        this.courses[i].yearTaken = "Preliminary Course";
                        break;
                    case "1":
                        this.courses[i].yearTaken = ("1st Year Course");
                        break;
                    case "2":
                        this.courses[i].yearTaken = "2nd Year Course";
                        break;
                    case "3":
                        this.courses[i].yearTaken = ("3rd Year Course");
                        break;
                    case "4":
                        this.courses[i].yearTaken = ("4th Year Course");
                        break;
                    case "5":
                        this.courses[i].yearTaken = ("5th Year Course");
                        break;
                }
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    findCourse(sub, cor, com, key) {
        var _a;
        console.log(sub);
        sub = sub.trim();
        sub = sub.toUpperCase();
        cor = cor.trim();
        cor = cor.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        key = key.trim();
        key = key.toUpperCase();
        if (key != "" && key.length < 4) {
            alert("Keyword Search must contain 4 characters!");
            return;
        }
        (_a = this.rs.searchCourse(sub, cor, com, key)) === null || _a === void 0 ? void 0 : _a.subscribe //why error????
        ((response) => {
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    searchDB(sch) {
        //@ts-ignore
        this.rs.searchDB(sch).subscribe //why error????
        ((response) => {
            console.log(response);
            this.schedule = response;
            var i = 0;
            response.forEach(element => {
                //@ts-ignore
                this.schedule[i].courseNum = element.Course;
                //@ts-ignore
                this.schedule[i].subject = element.Subject;
                //@ts-ignore
                this.schedule[i].courseComp = element.Component;
                //@ts-ignore
                this.schedule[i].days = element.Days;
                //@ts-ignore
                this.schedule[i].section = element.Section;
                //@ts-ignore
                this.schedule[i].endTime = element.EndTime;
                //@ts-ignore
                this.schedule[i].description = element.Description;
                //@ts-ignore
                this.schedule[i].startTime = element.StartTime;
                i++;
            });
        }, (error) => console.log(error));
    }
    getSchedules() {
        var email = localStorage.getItem('Email');
        this.rs.getPublic().subscribe((response) => {
            //@ts-ignore
            this.list = response;
            var size = [], scheduleList = [], prev;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].ScheduleName !== prev) {
                    scheduleList.push(this.list[i]);
                    size.push(1);
                }
                else {
                    size[size.length - 1]++;
                }
                prev = this.list[i].ScheduleName;
            }
            for (var j = 0; j < size.length; j++) {
                var subDate = this.list[j].Date.slice(0, 19);
                this.final.push({
                    "ScheduleName": scheduleList[j].ScheduleName,
                    "NumberCourses": size[j],
                    "Course": "",
                    "Subject": "",
                    "Component": "",
                    "Days": "",
                    "Section": "",
                    "EndTime": "",
                    "Description": "",
                    "StartTime": "",
                    "Username": this.list[j].Username,
                    "Date": subDate
                });
            }
            console.log(this.final);
        }, (error) => console.log(error));
    }
    review(sName, j) {
        this.schedule = [];
        this.findSchedule = this.final[j].ScheduleName;
        for (var i = 0; i < this.final[j].NumberCourses; i++) {
            //@ts-ignore
            this.schedule.push(this.list[i]);
            //@ts-ignore
            this.schedule[i].courseNum = this.list[i].Course;
            //@ts-ignore
            this.schedule[i].subject = this.list[i].Subject;
            //@ts-ignore
            this.schedule[i].courseComp = this.list[i].Component;
            //@ts-ignore
            this.schedule[i].days = this.list[i].Days;
            //@ts-ignore
            this.schedule[i].section = this.list[i].Section;
            //@ts-ignore
            this.schedule[i].endTime = this.list[i].EndTime;
            //@ts-ignore
            this.schedule[i].description = this.list[i].Description;
            //@ts-ignore
            this.schedule[i].startTime = this.list[i].StartTime;
            this.year = this.list[i].Course.toString().slice(0, 1);
            switch (this.year) {
                case "0":
                    this.schedule[i].yearTaken = "Preliminary Course";
                    break;
                case "1":
                    this.schedule[i].yearTaken = ("1st Year Course");
                    break;
                case "2":
                    this.schedule[i].yearTaken = "2nd Year Course";
                    break;
                case "3":
                    this.schedule[i].yearTaken = ("3rd Year Course");
                    break;
                case "4":
                    this.schedule[i].yearTaken = ("4th Year Course");
                    break;
                case "5":
                    this.schedule[i].yearTaken = ("5th Year Course");
                    break;
            }
        }
        //this.schedule.push(this.list[1])
    }
    saveSchedule() {
        console.log(this.schedule);
    }
    deleteSch(sch) {
        this.rs.deleteSch(sch).subscribe((response) => { }, (error) => console.log(error));
    }
    deleteAll() {
        this.rs.deleteAll().subscribe((response) => { }, (error) => console.log(error));
    }
    add(course) {
        this.schedule.push(course);
        console.log(this.schedule);
    }
    ngOnInit() {
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
}
HerosComponent.ɵfac = function HerosComponent_Factory(t) { return new (t || HerosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"])); };
HerosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HerosComponent, selectors: [["app-heros"]], decls: 42, vars: 7, consts: [[1, "intro"], ["for", "subject"], ["type", "text", "id", "subject", "placeholder", "Ex: ECE", 3, "ngModel", "ngModelChange"], ["for", "cCode"], ["type", "text", "id", "catalog", "placeholder", "Ex: 1021B", 3, "ngModel", "ngModelChange"], ["for", "component"], ["type", "text", "id", "type", "placeholder", "Ex: LEC", 3, "ngModel", "ngModelChange"], ["for", "keywords"], ["type", "text", "id", "keyword", "placeholder", "Ex: ACTU for ACTURSCI", 3, "ngModel", "ngModelChange"], ["id", "but", 1, "button", 3, "click"], ["id", "allCourses", 1, "button", 3, "click"], ["onClick", "window.location.reload();"], [1, "courses"], [4, "ngFor", "ngForOf"], ["id", "courseList"], [1, "public"], [3, "click"], ["id", "all"], [1, "badge"], [4, "ngIf"]], template: function HerosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subject: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HerosComponent_Template_input_ngModelChange_7_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Course Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HerosComponent_Template_input_ngModelChange_12_listener($event) { return ctx.course = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Course Component: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HerosComponent_Template_input_ngModelChange_17_listener($event) { return ctx.component = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Keywords: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HerosComponent_Template_input_ngModelChange_22_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerosComponent_Template_button_click_25_listener() { return ctx.findCourse(ctx.subject, ctx.course, ctx.component, ctx.keywords); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerosComponent_Template_button_click_27_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " All Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reload Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HerosComponent_li_32_Template, 5, 9, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Public Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HerosComponent_Template_button_click_38_listener() { return ctx.getSchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Show Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HerosComponent_li_41_Template, 6, 5, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Search ", ctx.hero.subject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.final);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #CFD8DC;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #069db1;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nli[_ngcontent-%COMP%]{\n  margin: 5px 0;\n  padding: 5px;\n  border: 1px solid #000000;\n  list-style-type: none;\n  width: 60%;\n  background-color: #7FFFD4;\n  \n}\n.intro[_ngcontent-%COMP%]{\n  border: 5px outset red;\n  background-color: lightblue;    \n  text-align: left;\n  padding: 12px 20px;\n}\n.public[_ngcontent-%COMP%]{\n  border: 5px outset rgb(0, 81, 255);\n  background-color: rgb(204, 173, 230);    \n  text-align: left;\n  padding: 12px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Imhlcm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmhlcm9lcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxNWVtO1xufVxuLmhlcm9lcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuLmhlcm9lcyBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5ZGIxO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVyb2VzIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxubGl7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0ZGRkQ0O1xuICBcbn1cbi5pbnRyb3tcbiAgYm9yZGVyOiA1cHggb3V0c2V0IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAgICBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xufVxuLnB1YmxpY3tcbiAgYm9yZGVyOiA1cHggb3V0c2V0IHJnYigwLCA4MSwgMjU1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTczLCAyMzApOyAgICBcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HerosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heros',
                templateUrl: './heros.component.html',
                styleUrls: ['./heros.component.css'],
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 3, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css")], [1, "top"], [1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "nav", "navbar-nav"], ["class", "nav-link", "routerLink", "registerUser", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "routerLink", "login", "routerLinkActive", "active", 4, "ngIf"], ["class", "nav-link", "href", "#", 3, "click", 4, "ngIf"], ["routerLink", "registerUser", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bootstrap Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Western Course and Schedule Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This is a schedule maker - There are three user types: Guest, Authorized and Admin. Guests may see courses and public schedules. Authorized Users may create Schedules and leave reviews. Admins can edit other user previliges and hide content. Have fun! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_a_19_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_a_21_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["h1[_ngcontent-%COMP%] {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    color: #444;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody[_ngcontent-%COMP%] {\n    margin: 2em;\n  }\nbody[_ngcontent-%COMP%], input[type=\"text\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n    color: #333;\n    font-family: Cambria, Georgia;\n  }\n\n*[_ngcontent-%COMP%] {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n.top[_ngcontent-%COMP%]{\n    border: 5px outset rgb(0, 0, 0);   \n    text-align: center;\n    padding: 12px 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjtBQUNBLG9CQUFvQjtBQUNwQjtJQUNFLHlDQUF5QztFQUMzQztBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBsaWNhdGlvbi13aWRlIFN0eWxlcyAqL1xuaDEge1xuICAgIGNvbG9yOiAjMzY5O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjUwJTtcbiAgfVxuICBoMiwgaDMge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMmVtO1xuICB9XG4gIGJvZHksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBidXR0b24ge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xuICB9XG4gIC8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xuICAqIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuICAudG9we1xuICAgIGJvcmRlcjogNXB4IG91dHNldCByZ2IoMCwgMCwgMCk7ICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heros/heros.component */ "C2D/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./secure-user/secure-user.component */ "uBIy");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./administrator/administrator.component */ "uUZd");
















//import { HeroesComponent } from './heroes/heroes.component';
function tokenGetter() {
    return localStorage.getItem('access_token');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        //TodoService,
        //UserService,
        _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ['localhost:4200'],
                    disallowedRoutes: ['localhost:4200/api/auth']
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _heros_heros_component__WEBPACK_IMPORTED_MODULE_4__["HerosComponent"],
        _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_11__["SecureUserComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_11__["SecureUserComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_13__["AdministratorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _heros_heros_component__WEBPACK_IMPORTED_MODULE_4__["HerosComponent"],
                    _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_11__["SecureUserComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_11__["SecureUserComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                    _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_13__["AdministratorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            allowedDomains: ['localhost:4200'],
                            disallowedRoutes: ['localhost:4200/api/auth']
                        }
                    })
                ],
                providers: [
                    //TodoService,
                    //UserService,
                    _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                    _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        return this.http.post('http://localhost:5000/api/auth', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            localStorage.setItem('access_token', result.token);
            //@ts-ignore
            localStorage.setItem('username', result.user);
            //@ts-ignore
            if (result.admin == 1) {
                //@ts-ignore
                localStorage.setItem('admin', result.admin);
            }
            else {
                localStorage.setItem('admin', "0");
            }
            return true;
        }));
    }
    logout() {
        localStorage.removeItem('access_token');
    }
    get loggedIn() {
        return (localStorage.getItem('access_token') !== null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "uBIy":
/*!******************************************************!*\
  !*** ./src/app/secure-user/secure-user.component.ts ***!
  \******************************************************/
/*! exports provided: SecureUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureUserComponent", function() { return SecureUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SecureUserComponent_li_31_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rev_r9.Username, "'s Review: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rev_r9.uReview);
} }
function SecureUserComponent_li_31_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SecureUserComponent_li_31_ul_11_li_1_Template, 5, 2, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r9 = ctx.$implicit;
    const course_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r5.subject == rev_r9.Subject && course_r5.courseNum == rev_r9.Course && course_r5.courseComp == rev_r9.Component);
} }
function SecureUserComponent_li_31_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_li_31_li_13_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.userReview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_31_li_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const course_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.submitReview(ctx_r16.userReview, course_r5.subject, course_r5.courseNum, course_r5.courseComp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.userReview);
} }
function SecureUserComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_31_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r6 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.add(ctx_r18.courses[i_r6]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add to Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_31_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const course_r5 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.viewReviews(course_r5.subject, course_r5.courseNum, course_r5.courseComp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Review's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_31_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r6 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addReview(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SecureUserComponent_li_31_ul_11_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SecureUserComponent_li_31_li_13_Template, 4, 1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", course_r5.subject, " ", course_r5.courseNum, "--", course_r5.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", course_r5.days, " Start Time: ", course_r5.startTime, " End Time: ", course_r5.endTime, " Component: ", course_r5.courseComp, " Section: ", course_r5.section, " --- ", course_r5.yearTaken, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r5.subject == ctx_r0.findSubject && course_r5.courseNum == ctx_r0.findCourseNum && course_r5.courseComp == ctx_r0.findComp);
} }
function SecureUserComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_49_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const i_r23 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.removeCourse(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remove from Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sched_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", sched_r22.subject, " ", sched_r22.courseNum, "--", sched_r22.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", sched_r22.days, " Start Time: ", sched_r22.startTime, " End Time: ", sched_r22.endTime, " Component: ", sched_r22.courseComp, " Section: ", sched_r22.section, " --- ", sched_r22.yearTaken, " ");
} }
function SecureUserComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.saveSchedule(ctx_r26.scheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecureUserComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.updateSchedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SecureUserComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_57_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const i_r31 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.review(ctx_r32.final[i_r31], i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_li_57_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ls_r30 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.deleteSch(ls_r30.ScheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ls_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ls_r30.Username, "'s ", ls_r30.ScheduleName, " Schedule -- Contains ", ls_r30.NumberCourses, " Course(s)");
} }
//var schedule: any[]= [];
class SecureUserComponent {
    constructor(rs) {
        this.rs = rs;
        this.subject = "";
        this.course = "";
        this.component = "";
        this.scheduleName = "";
        this.keywords = "";
        this.numSch = "";
        this.check = 1;
        this.year = "";
        this.displaySch = "";
        this.isReview = false;
        this.findSubject = "";
        this.findCourseNum = "";
        this.findComp = "";
        this.userReview = "";
        this.update = false;
        this.hero = {
            id: 1,
            subject: "",
            catalog: "",
            component: "",
            scheduleName: "",
            schedule: [],
            exist: false,
            values: ""
        };
        this.courses = [];
        this.schedule = [];
        this.list = [];
        this.final = [];
        this.reviews = [];
    }
    change() { this.check = 0; }
    addReview(j) {
        console.log(this.courses[j].subject);
        this.findSubject = this.courses[j].subject;
        this.findCourseNum = this.courses[j].courseNum;
        this.findComp = this.courses[j].courseComp;
    }
    submitReview(reviewInfo, sub, cour, com) {
        sub = sub.trim();
        sub = sub.toUpperCase();
        cour = cour.trim();
        cour = cour.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('Email');
        var reviewList = [];
        reviewList.push(reviewInfo, username, sub, cour, com, email);
        console.log(reviewList);
        this.rs.addReview(reviewList).subscribe((response) => { }, (error) => console.log(error));
    }
    viewReviews(sub, cour, com) {
        sub = sub.trim();
        sub = sub.toUpperCase();
        cour = cour.trim();
        cour = cour.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        const username = localStorage.getItem('username');
        //const email = localStorage.getItem('Email');
        var getReviews = [];
        getReviews.push(sub, cour, com);
        this.rs.getReviews(username, sub, cour, com).subscribe((response) => {
            this.reviews = response;
            console.log(this.reviews);
            var i = 0;
            response.forEach(element => {
                this.reviews[i].uReview = element.uReview;
                this.reviews[i].hideReview = element.hideReview;
                this.reviews[i].Username = element.Username;
                this.reviews[i].Subject = element.Subject;
                this.reviews[i].Course = element.Course;
                this.reviews[i].Component = element.Component;
                i++;
            });
        }, (error) => console.log(error));
    }
    removeCourse(i) {
        console.log(i);
        this.update = true;
        console.log(this.schedule[i]);
        this.schedule.splice(i, 1);
        console.log(this.schedule);
    }
    updateSchedule() {
        console.log(this.final[0].ScheduleName);
        console.log(this.schedule);
        this.deleteSch(this.final[0].ScheduleName);
        this.rs.updateSchedule(this.schedule).subscribe((response) => {
            console.log(response);
        }, (error) => console.log(error));
    }
    search() {
        this.rs.getCourse().subscribe((response) => {
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                this.year = element.courseNum.toString().slice(0, 1);
                switch (this.year) {
                    case "0":
                        this.courses[i].yearTaken = "Preliminary Course";
                        break;
                    case "1":
                        this.courses[i].yearTaken = ("1st Year Course");
                        break;
                    case "2":
                        this.courses[i].yearTaken = "2nd Year Course";
                        break;
                    case "3":
                        this.courses[i].yearTaken = ("3rd Year Course");
                        break;
                    case "4":
                        this.courses[i].yearTaken = ("4th Year Course");
                        break;
                    case "5":
                        this.courses[i].yearTaken = ("5th Year Course");
                        break;
                }
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    findCourse(sub, cor, com, key) {
        var _a;
        //console.log(this.hero.subject);
        sub = sub.trim();
        sub = sub.toUpperCase();
        cor = cor.trim();
        cor = cor.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        key = key.trim();
        key = key.toUpperCase();
        console.log(key);
        console.log(typeof key);
        if (key != "" && key.length < 4) {
            alert("Keyword Search must contain 4 characters!");
            return;
        }
        (_a = this.rs.searchCourse(sub, cor, com, key)) === null || _a === void 0 ? void 0 : _a.subscribe //why error????
        ((response) => {
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    getSchedules() {
        var email = localStorage.getItem('Email');
        this.rs.getAllSchedules(email).subscribe //CHANGE TEST
        ((response) => {
            //@ts-ignore
            this.list = response;
            var size = [], scheduleList = [], prev;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].ScheduleName !== prev) {
                    scheduleList.push(this.list[i]);
                    size.push(1);
                }
                else {
                    size[size.length - 1]++;
                }
                prev = this.list[i].ScheduleName;
            }
            for (var j = 0; j < size.length; j++) {
                this.final.push({
                    "ScheduleName": scheduleList[j].ScheduleName,
                    "NumberCourses": size[j],
                    "Course": "",
                    "Subject": "",
                    "Component": "",
                    "Days": "",
                    "Section": "",
                    "EndTime": "",
                    "Description": "",
                    "StartTime": "",
                    "Username": this.list[j].Username
                });
            }
            console.log(this.final);
        }, (error) => console.log(error));
    }
    review(item, j) {
        console.log(j);
        for (var i = 0; i < this.final[j].NumberCourses; i++) {
            //@ts-ignore
            this.schedule.push(this.list[i]);
            //@ts-ignore
            this.schedule[i].courseNum = this.list[i].Course;
            //@ts-ignore
            this.schedule[i].subject = this.list[i].Subject;
            //@ts-ignore
            this.schedule[i].courseComp = this.list[i].Component;
            //@ts-ignore
            this.schedule[i].days = this.list[i].Days;
            //@ts-ignore
            this.schedule[i].section = this.list[i].Section;
            //@ts-ignore
            this.schedule[i].endTime = this.list[i].EndTime;
            //@ts-ignore
            this.schedule[i].description = this.list[i].Description;
            //@ts-ignore
            this.schedule[i].startTime = this.list[i].StartTime;
            this.year = this.list[i].Course.toString().slice(0, 1);
            switch (this.year) {
                case "0":
                    this.schedule[i].yearTaken = "Preliminary Course";
                    break;
                case "1":
                    this.schedule[i].yearTaken = ("1st Year Course");
                    break;
                case "2":
                    this.schedule[i].yearTaken = "2nd Year Course";
                    break;
                case "3":
                    this.schedule[i].yearTaken = ("3rd Year Course");
                    break;
                case "4":
                    this.schedule[i].yearTaken = ("4th Year Course");
                    break;
                case "5":
                    this.schedule[i].yearTaken = ("5th Year Course");
                    break;
            }
            //this.schedule[i].Username = this.list[i].Username;
        }
        //this.schedule.push(this.list[1])
    }
    searchDB(sch) {
        var email = localStorage.getItem('Email');
        this.rs.searchDB(sch, email).subscribe((response) => {
            //@ts-ignore
            this.list = response;
            var size = [], scheduleList = [], prev;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].ScheduleName !== prev) {
                    scheduleList.push(this.list[i]);
                    size.push(1);
                }
                else {
                    size[size.length - 1]++;
                }
                prev = this.list[i].ScheduleName;
            }
            for (var j = 0; j < size.length; j++) {
                this.final.push({
                    "ScheduleName": scheduleList[j].ScheduleName,
                    "NumberCourses": size[j],
                    "Course": "",
                    "Subject": "",
                    "Component": "",
                    "Days": "",
                    "Section": "",
                    "EndTime": "",
                    "Description": "",
                    "StartTime": "",
                    "Username": this.list[j].Username
                });
            }
            console.log(this.final);
        }, (error) => console.log(error));
    }
    saveSchedule(scheduleDB) {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('Email');
        scheduleDB = scheduleDB.trim();
        for (var i = 0; i < this.schedule.length; i++) {
            this.schedule[i].ScheduleName = scheduleDB; //@ts-ignore
            this.schedule[i].Username = username; //@ts-ignore
            this.schedule[i].Email = email; //@ts-ignore
            this.schedule[i].isPrivate = this.check;
        }
        this.rs.saveSchedule(this.schedule).subscribe((response) => { alert("Schedule Savesd Succcessful!"); }, (error) => console.log(error));
    }
    deleteSch(sch) {
        this.rs.deleteSch(sch).subscribe((response) => { }, (error) => console.log(error));
    }
    deleteAll() {
        if (confirm("Are you sure you want all Schedules Deleted?")) {
            const username = localStorage.getItem('username');
            this.rs.deleteAllUsers(username).subscribe((response) => { }, (error) => console.log(error));
            console.log();
        }
    }
    add(course) {
        this.schedule.push(course);
        console.log(this.schedule);
    }
    ngOnInit() {
        this.update = false;
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
}
SecureUserComponent.ɵfac = function SecureUserComponent_Factory(t) { return new (t || SecureUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"])); };
SecureUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecureUserComponent, selectors: [["app-secure-user"]], decls: 59, vars: 12, consts: [[1, "intro"], ["for", "subject"], ["type", "text", "id", "subject", "placeholder", "Ex: ECE", 3, "ngModel", "ngModelChange"], ["for", "cCode"], ["type", "text", "id", "catalog", "placeholder", "Ex: 1021B", 3, "ngModel", "ngModelChange"], ["for", "component"], ["type", "text", "id", "type", "placeholder", "Ex: LEC", 3, "ngModel", "ngModelChange"], ["for", "keywords"], ["type", "text", "id", "keyword", "placeholder", "Ex: ACTU for ACTURSCI", 3, "ngModel", "ngModelChange"], ["id", "but", 1, "button", 3, "click"], ["id", "allCourses", 1, "button", 3, "click"], ["onClick", "window.location.reload();"], [1, "courses"], [4, "ngFor", "ngForOf"], ["id", "courseList"], [1, "schedule"], ["id", "warning"], ["for", "sName"], ["type", "text", "id", "schedule", "placeholder", "Ex: FallSchedule", 3, "ngModel", "ngModelChange"], ["id", "search", 3, "click"], ["id", "deleteALL", 3, "click"], ["id", "sch"], ["id", "toDatabase", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "click"], ["id", "show", 3, "click"], ["id", "all"], [1, "badge"], [3, "click"], [4, "ngIf"], [2, "display", "inline"], ["placeholder", "Max 255 Characters", "rows", "6", "cols", "70", 3, "ngModel", "ngModelChange"], ["id", "toDatabase", 3, "click"], ["id", "delete", 3, "click"]], template: function SecureUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subject: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_Template_input_ngModelChange_6_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Course Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_Template_input_ngModelChange_11_listener($event) { return ctx.course = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Course Component: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_Template_input_ngModelChange_16_listener($event) { return ctx.component = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Keywords: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_Template_input_ngModelChange_21_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_button_click_24_listener() { return ctx.findCourse(ctx.subject, ctx.course, ctx.component, ctx.keywords); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_button_click_26_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " All Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reload Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SecureUserComponent_li_31_Template, 14, 11, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "A schedule requires a name and at least 1 class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Schedule Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecureUserComponent_Template_input_ngModelChange_42_listener($event) { return ctx.scheduleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_button_click_43_listener() { return ctx.searchDB(ctx.scheduleName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_button_click_45_listener() { return ctx.deleteAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Delete ALL Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SecureUserComponent_li_49_Template, 7, 9, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SecureUserComponent_button_50_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SecureUserComponent_button_51_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Make Public:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_input_click_53_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecureUserComponent_Template_button_click_54_listener() { return ctx.getSchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "All Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SecureUserComponent_li_57_Template, 7, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Search ", ctx.hero.subject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scheduleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displaySch, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.update == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.update == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.final);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".heroes[_ngcontent-%COMP%] {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n    background-color: #CFD8DC;\n    color: white;\n  }\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n    background-color: #069db1;\n    color: white;\n  }\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color:#405061;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\nli[_ngcontent-%COMP%]{\n    margin: 5px 0;\n    padding: 5px;\n    border: 1px solid #000000;\n    list-style-type: none;\n    width: 60%;\n    background-color: #7FFFD4;\n  }\n.intro[_ngcontent-%COMP%]{\n    border: 5px outset red;\n    background-color: lightblue;    \n    text-align: left;\n    padding: 12px 20px;\n  }\n.schedule[_ngcontent-%COMP%]{\n    border: 5px outset rgb(0, 81, 255);\n    background-color: rgb(204, 173, 230);    \n    text-align: left;\n    padding: 12px 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlDQUF5QztBQUN6QztJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic2VjdXJlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uaGVyb2VzIHtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTVlbTtcbiAgfVxuICAuaGVyb2VzIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5oZXJvZXMgbGk6aG92ZXIge1xuICAgIGNvbG9yOiAjNjA3RDhCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgbGVmdDogLjFlbTtcbiAgfVxuICAuaGVyb2VzIGxpLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaGVyb2VzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5ZGIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaGVyb2VzIC5iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdGRkZENDtcbiAgfVxuICAuaW50cm97XG4gICAgYm9yZGVyOiA1cHggb3V0c2V0IHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG4gIC5zY2hlZHVsZXtcbiAgICBib3JkZXI6IDVweCBvdXRzZXQgcmdiKDAsIDgxLCAyNTUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE3MywgMjMwKTsgICAgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIH1cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecureUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secure-user',
                templateUrl: './secure-user.component.html',
                styleUrls: ['./secure-user.component.css'],
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"] }]; }, null); })();


/***/ }),

/***/ "uUZd":
/*!**********************************************************!*\
  !*** ./src/app/administrator/administrator.component.ts ***!
  \**********************************************************/
/*! exports provided: AdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorComponent", function() { return AdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AdministratorComponent_li_33_ul_11_li_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_ul_11_li_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.hideReview(i_r9, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_33_ul_11_li_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_ul_11_li_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.hideReview(i_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UnFlag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_33_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdministratorComponent_li_33_ul_11_li_1_button_5_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdministratorComponent_li_33_ul_11_li_1_button_6_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rev_r8.Username, "'s Review: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rev_r8.uReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r8.hideReview == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r8.hideReview == 1);
} }
function AdministratorComponent_li_33_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdministratorComponent_li_33_ul_11_li_1_Template, 7, 4, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r8 = ctx.$implicit;
    const course_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r4.subject == rev_r8.Subject && course_r4.courseNum == rev_r8.Course && course_r4.courseComp == rev_r8.Component);
} }
function AdministratorComponent_li_33_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_li_33_li_13_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.userReview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_li_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const course_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submitReview(ctx_r23.userReview, course_r4.subject, course_r4.courseNum, course_r4.courseComp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.userReview);
} }
function AdministratorComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r5 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.add(ctx_r25.courses[i_r5]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add to Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const course_r4 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.viewReviews(course_r4.subject, course_r4.courseNum, course_r4.courseComp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Review's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_33_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r5 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addReview(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdministratorComponent_li_33_ul_11_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdministratorComponent_li_33_li_13_Template, 4, 1, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", course_r4.subject, " ", course_r4.courseNum, "--", course_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", course_r4.days, " Start Time: ", course_r4.startTime, " End Time: ", course_r4.endTime, " Component: ", course_r4.courseComp, " Section: ", course_r4.section, " --- ", course_r4.yearTaken, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r4.subject == ctx_r0.findSubject && course_r4.courseNum == ctx_r0.findCourseNum && course_r4.courseComp == ctx_r0.findComp);
} }
function AdministratorComponent_li_51_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_51_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.removeCourse(ctx_r30.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remove from Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sched_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", sched_r29.subject, " ", sched_r29.courseNum, "--", sched_r29.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("Days: ", sched_r29.days, " Start Time: ", sched_r29.startTime, " End Time: ", sched_r29.endTime, " Component: ", sched_r29.courseComp, " Section: ", sched_r29.section, " --- ", sched_r29.yearTaken, "");
} }
function AdministratorComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_59_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const i_r33 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.review(ctx_r34.final[i_r33], i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_59_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ls_r32 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.deleteSch(ls_r32.ScheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ls_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ls_r32.Username, "'s ", ls_r32.ScheduleName, " Schedule -- Contains ", ls_r32.NumberCourses, " Course(s)");
} }
function AdministratorComponent_li_67_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.makeAdmin(i_r38, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Make Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.makeAdmin(i_r38, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.deactivateAccount(i_r38, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deactivate User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.deactivateAccount(i_r38, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Activate User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_ul_20_li_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_ul_20_li_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.hideReview(i_r59, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_ul_20_li_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_ul_20_li_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.hideReview(i_r59, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UnFlag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdministratorComponent_li_67_ul_20_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdministratorComponent_li_67_ul_20_li_1_button_5_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdministratorComponent_li_67_ul_20_li_1_button_6_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", rev_r58.Username, "'s Review: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rev_r58.uReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r58.hideReview == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rev_r58.hideReview == 1);
} }
function AdministratorComponent_li_67_ul_20_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_li_67_ul_20_li_2_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r71.userReview = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_ul_20_li_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r73.submitReview(ctx_r73.userReview, ctx_r73.course.subject, ctx_r73.course.courseNum, ctx_r73.course.courseComp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r61.userReview);
} }
function AdministratorComponent_li_67_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdministratorComponent_li_67_ul_20_li_1_Template, 7, 4, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdministratorComponent_li_67_ul_20_li_2_Template, 4, 1, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rev_r58 = ctx.$implicit;
    const user_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.Username == rev_r58.Username && user_r37.Email == rev_r58.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.course.subject == ctx_r45.findSubject && ctx_r45.course.courseNum == ctx_r45.findCourseNum && ctx_r45.course.courseComp == ctx_r45.findComp);
} }
function AdministratorComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Admin User: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdministratorComponent_li_67_p_11_Template, 2, 0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdministratorComponent_li_67_p_12_Template, 2, 0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_li_67_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const i_r38 = ctx.index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.findComments(i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "User Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdministratorComponent_li_67_button_16_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdministratorComponent_li_67_button_17_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdministratorComponent_li_67_button_18_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdministratorComponent_li_67_button_19_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdministratorComponent_li_67_ul_20_Template, 3, 2, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r37 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r37.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r37.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.isAdmin == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.isAdmin == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.isAdmin == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.isAdmin == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.activeUser == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r37.activeUser == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.reviews);
} }
//var schedule: any[]= [];
class AdministratorComponent {
    constructor(rs) {
        this.rs = rs;
        this.subject = "";
        this.course = "";
        this.component = "";
        this.scheduleName = "";
        this.keywords = "";
        this.numSch = "";
        this.check = 1;
        this.displaySch = "";
        this.isReview = false;
        this.findSubject = "";
        this.findCourseNum = "";
        this.findComp = "";
        this.userReview = "";
        this.year = "";
        this.showUser = localStorage.getItem('username');
        this.hero = {
            id: 1,
            subject: "",
            catalog: "",
            component: "",
            scheduleName: "",
            schedule: [],
            exist: false,
            values: ""
        };
        this.courses = [];
        this.schedule = [];
        this.list = [];
        this.final = [];
        this.reviews = [];
        this.users = [];
    }
    change() { this.check = 0; }
    addReview(j) {
        this.findSubject = this.courses[j].subject;
        this.findCourseNum = this.courses[j].courseNum;
        this.findComp = this.courses[j].courseComp;
    }
    submitReview(reviewInfo, sub, cour, com) {
        sub = sub.trim();
        sub = sub.toUpperCase();
        cour = cour.trim();
        cour = cour.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        const username = localStorage.getItem('username');
        var reviewList = [];
        reviewList.push(reviewInfo, username, sub, cour, com);
        console.log(reviewList);
        this.rs.addReview(reviewList).subscribe((response) => { }, (error) => console.log(error));
    }
    hideReview(i, type) {
        if (type) {
            this.reviews[i].hideReview = "0";
        }
        else {
            this.reviews[i].hideReview = "1";
        }
        this.rs.hideReview(this.reviews[i]).subscribe((response) => { }, (error) => console.log(error));
    }
    viewReviews(sub, cour, com) {
        sub = sub.trim();
        sub = sub.toUpperCase();
        cour = cour.trim();
        cour = cour.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        const username = localStorage.getItem('username');
        //const email = localStorage.getItem('Email');
        var getReviews = [];
        getReviews.push(sub, cour, com);
        this.rs.getReviewsAdmin(username, sub, cour, com).subscribe((response) => {
            this.reviews = [];
            this.reviews = response;
            console.log(this.reviews);
            var i = 0;
            response.forEach(element => {
                this.reviews[i].uReview = element.uReview;
                this.reviews[i].hideReview = element.hideReview;
                this.reviews[i].Username = element.Username;
                this.reviews[i].Subject = element.Subject;
                this.reviews[i].Course = element.Course;
                this.reviews[i].Component = element.Component;
                this.reviews[i].Email = element.Email;
                i++;
            });
        }, (error) => console.log(error));
    }
    findComments(i) {
        console.log(this.users[i].Email);
        this.rs.findComments(this.users[i].Email).subscribe((response) => {
            this.reviews = [];
            this.reviews = response;
            console.log(this.reviews);
            var i = 0;
            response.forEach(element => {
                this.reviews[i].uReview = element.uReview;
                this.reviews[i].hideReview = element.hideReview;
                this.reviews[i].Username = element.Username;
                this.reviews[i].Subject = element.Subject;
                this.reviews[i].Course = element.Course;
                this.reviews[i].Component = element.Component;
                this.reviews[i].Email = element.Email;
                i++;
            });
        }, (error) => console.log(error));
    }
    getUsers() {
        const email = localStorage.getItem('Email');
        this.rs.getUser(email).subscribe((response) => {
            this.users = response;
            var i = 0;
            response.forEach(element => {
                this.users[i].Username = element.Username;
                this.users[i].Email = element.Email;
                this.users[i].isAdmin = element.isAdmin;
                this.users[i].activeUser = element.activeUser;
                i++;
            });
        }, (error) => console.log(error));
    }
    makeAdmin(i, type) {
        if (type) {
            this.users[i].isAdmin = "1";
        }
        else {
            this.users[i].isAdmin = "0";
        }
        console.log(this.users[i].Email);
        this.rs.makeAdmin(this.users[i]).subscribe((response) => { }, (error) => console.log(error));
    }
    deactivateAccount(i, type) {
        if (type) {
            this.users[i].activeUser = "1";
        }
        else {
            this.users[i].activeUser = "0";
        }
        console.log(this.users[i].Email);
        this.rs.deactivateAccount(this.users[i]).subscribe((response) => { }, (error) => console.log(error));
    }
    search() {
        this.rs.getCourse().subscribe((response) => {
            this.reviews = [];
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                this.year = element.courseNum.toString().slice(0, 1);
                switch (this.year) {
                    case "0":
                        this.courses[i].yearTaken = "Preliminary Course";
                        break;
                    case "1":
                        this.courses[i].yearTaken = ("1st Year Course");
                        break;
                    case "2":
                        this.courses[i].yearTaken = "2nd Year Course";
                        break;
                    case "3":
                        this.courses[i].yearTaken = ("3rd Year Course");
                        break;
                    case "4":
                        this.courses[i].yearTaken = ("4th Year Course");
                        break;
                    case "5":
                        this.courses[i].yearTaken = ("5th Year Course");
                        break;
                }
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    findCourse(sub, cor, com, key) {
        var _a;
        //console.log(this.hero.subject);
        sub = sub.trim();
        sub = sub.toUpperCase();
        cor = cor.trim();
        cor = cor.toUpperCase();
        com = com.trim();
        com = com.toUpperCase();
        key = key.trim();
        key = key.toUpperCase();
        if (key != "" && key.length < 4) {
            alert("Keyword Search must contain 4 characters!");
            return;
        }
        console.log(sub);
        (_a = this.rs.searchCourse(sub, cor, com, key)) === null || _a === void 0 ? void 0 : _a.subscribe //why error????
        ((response) => {
            this.courses = response;
            console.log(response);
            var i = 0;
            response.forEach(element => {
                this.courses[i].courseNum = element.courseNum;
                this.courses[i].subject = element.subject;
                this.courses[i].courseComp = element.courseComp;
                this.courses[i].days = element.days;
                this.courses[i].section = element.section;
                this.courses[i].endTime = element.endTime;
                this.courses[i].description = element.description;
                this.courses[i].startTime = element.startTime;
                i++;
            });
            console.log(this.courses[0]);
        }, (error) => console.log(error));
    }
    getSchedules() {
        var email = localStorage.getItem('Email');
        this.rs.getAllSchedules(email).subscribe //CHANGE TEST
        ((response) => {
            //@ts-ignore
            this.list = response;
            var size = [], scheduleList = [], prev;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].ScheduleName !== prev) {
                    scheduleList.push(this.list[i]);
                    size.push(1);
                }
                else {
                    size[size.length - 1]++;
                }
                prev = this.list[i].ScheduleName;
            }
            for (var j = 0; j < size.length; j++) {
                this.final.push({
                    "ScheduleName": scheduleList[j].ScheduleName,
                    "NumberCourses": size[j],
                    "Course": "",
                    "Subject": "",
                    "Component": "",
                    "Days": "",
                    "Section": "",
                    "EndTime": "",
                    "Description": "",
                    "StartTime": "",
                    "Username": this.list[j].Username
                });
            }
            console.log(this.final);
        }, (error) => console.log(error));
    }
    review(item, j) {
        console.log(j);
        for (var i = 0; i < this.final[j].NumberCourses; i++) {
            //@ts-ignore
            this.schedule.push(this.list[i]);
            //@ts-ignore
            this.schedule[i].courseNum = this.list[i].Course;
            //@ts-ignore
            this.schedule[i].subject = this.list[i].Subject;
            //@ts-ignore
            this.schedule[i].courseComp = this.list[i].Component;
            //@ts-ignore
            this.schedule[i].days = this.list[i].Days;
            //@ts-ignore
            this.schedule[i].section = this.list[i].Section;
            //@ts-ignore
            this.schedule[i].endTime = this.list[i].EndTime;
            //@ts-ignore
            this.schedule[i].description = this.list[i].Description;
            //@ts-ignore
            this.schedule[i].startTime = this.list[i].StartTime;
            this.year = this.list[i].Course.toString().slice(0, 1);
            switch (this.year) {
                case "0":
                    this.schedule[i].yearTaken = "Preliminary Course";
                    break;
                case "1":
                    this.schedule[i].yearTaken = ("1st Year Course");
                    break;
                case "2":
                    this.schedule[i].yearTaken = "2nd Year Course";
                    break;
                case "3":
                    this.schedule[i].yearTaken = ("3rd Year Course");
                    break;
                case "4":
                    this.schedule[i].yearTaken = ("4th Year Course");
                    break;
                case "5":
                    this.schedule[i].yearTaken = ("5th Year Course");
                    break;
            }
            //this.schedule[i].Username = this.list[i].Username;
        }
        //this.schedule.push(this.list[1])
    }
    searchDB(sch) {
        var email = localStorage.getItem('Email');
        this.rs.searchDB(sch, email).subscribe((response) => {
            this.schedule = response;
            var i = 0;
            response.forEach(element => {
                //@ts-ignore
                this.schedule[i].courseNum = element.Course;
                //@ts-ignore
                this.schedule[i].subject = element.Subject;
                //@ts-ignore
                this.schedule[i].courseComp = element.Component;
                //@ts-ignore
                this.schedule[i].days = element.Days;
                //@ts-ignore
                this.schedule[i].section = element.Section;
                //@ts-ignore
                this.schedule[i].endTime = element.EndTime;
                //@ts-ignore
                this.schedule[i].description = element.Description;
                //@ts-ignore
                this.schedule[i].startTime = element.StartTime;
                this.schedule[i].ScheduleName = element.ScheduleName;
                this.displaySch = element.ScheduleName + " Schedule";
                i++;
            });
        }, (error) => {
            console.log(error);
            this.displaySch = "Schedule Not Found";
        });
    }
    saveSchedule(scheduleDB) {
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('Email');
        scheduleDB = scheduleDB.trim();
        for (var i = 0; i < this.schedule.length; i++) {
            this.schedule[i].ScheduleName = scheduleDB;
            //@ts-ignore
            this.schedule[i].Username = username;
            //@ts-ignore
            this.schedule[i].Email = email;
            //@ts-ignore
            this.schedule[i].isPrivate = this.check;
        }
        this.rs.saveSchedule(this.schedule).subscribe((response) => { }, (error) => console.log(error));
    }
    deleteSch(sch) {
        this.rs.deleteSch(sch).subscribe((response) => { }, (error) => console.log(error));
    }
    deleteAll() {
        if (confirm("Are you sure you want ALL Schedules Deleted? This action will remove ALL user schedules and is not reversble")) {
            this.rs.deleteAll().subscribe((response) => { }, (error) => console.log(error));
        }
    }
    add(course) {
        this.schedule.push(course);
        console.log(this.schedule);
    }
    ngOnInit() {
    }
    onSelect(hero) {
        this.selectedHero = hero;
    }
}
AdministratorComponent.ɵfac = function AdministratorComponent_Factory(t) { return new (t || AdministratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"])); };
AdministratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministratorComponent, selectors: [["app-administrator"]], decls: 68, vars: 12, consts: [[1, "intro"], ["for", "subject"], ["type", "text", "id", "subject", "placeholder", "Ex: ECE", 3, "ngModel", "ngModelChange"], ["for", "cCode"], ["type", "text", "id", "catalog", "placeholder", "Ex: 1021B", 3, "ngModel", "ngModelChange"], ["for", "component"], ["type", "text", "id", "type", "placeholder", "Ex: LEC", 3, "ngModel", "ngModelChange"], ["for", "keywords"], ["type", "text", "id", "keyword", "placeholder", "Ex: ACTU for ACTURSCI", 3, "ngModel", "ngModelChange"], ["id", "but", 1, "button", 3, "click"], ["id", "allCourses", 1, "button", 3, "click"], ["onClick", "window.location.reload();"], [1, "courses"], [4, "ngFor", "ngForOf"], ["id", "courseList"], [1, "schedule"], ["id", "warning"], ["for", "sName"], ["type", "text", "id", "schedule", "placeholder", "Ex: FallSchedule", 3, "ngModel", "ngModelChange"], ["id", "search", 3, "click"], ["id", "deleteALL", 3, "click"], ["id", "sch"], ["id", "toDatabase", 3, "click"], ["type", "checkbox", 3, "click"], ["id", "show", 3, "click"], ["id", "all"], [1, "users"], [3, "click"], ["id", "userList"], [1, "badge"], [4, "ngIf"], [2, "display", "inline"], ["title", "Mark Innapropriate", 3, "click", 4, "ngIf"], ["title", "Mark Safe", 3, "click", 4, "ngIf"], ["title", "Mark Innapropriate", 3, "click"], ["title", "Mark Safe", 3, "click"], ["placeholder", "Max 255 Characters", "rows", "6", "cols", "70", 3, "ngModel", "ngModelChange"], ["id", "delete", 3, "click"], ["style", "display:inline", 4, "ngIf"], [3, "click", 4, "ngIf"]], template: function AdministratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subject: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_Template_input_ngModelChange_8_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Course Code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_Template_input_ngModelChange_13_listener($event) { return ctx.course = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Course Component: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_Template_input_ngModelChange_18_listener($event) { return ctx.component = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Keywords: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_Template_input_ngModelChange_23_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_26_listener() { return ctx.findCourse(ctx.subject, ctx.course, ctx.component, ctx.keywords); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_28_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " All Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reload Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdministratorComponent_li_33_Template, 14, 11, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "A schedule requires a name and at least 1 class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Schedule Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministratorComponent_Template_input_ngModelChange_44_listener($event) { return ctx.scheduleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_45_listener() { return ctx.searchDB(ctx.scheduleName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_47_listener() { return ctx.deleteAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Delete ALL Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AdministratorComponent_li_51_Template, 7, 9, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_52_listener() { return ctx.saveSchedule(ctx.scheduleName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Save Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Make Public:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_input_click_55_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_56_listener() { return ctx.getSchedules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "All Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AdministratorComponent_li_59_Template, 7, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "User Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministratorComponent_Template_button_click_64_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Retrieve Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AdministratorComponent_li_67_Template, 21, 9, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Admin page for ", ctx.showUser, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Search ", ctx.hero.subject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.component);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scheduleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displaySch, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.final);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".heroes[_ngcontent-%COMP%] {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n    background-color: #CFD8DC;\n    color: white;\n  }\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n    background-color: #069db1;\n    color: white;\n  }\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color:#405061;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\nli[_ngcontent-%COMP%]{\n    margin: 5px 0;\n    padding: 5px;\n    border: 1px solid #000000;\n    list-style-type: none;\n    width: 60%;\n    background-color: #7FFFD4;\n    \n  }\n.intro[_ngcontent-%COMP%]{\n    border: 5px outset red;\n    background-color: lightblue;    \n    text-align: left;\n    padding: 12px 20px;\n  }\n.schedule[_ngcontent-%COMP%]{\n    border: 5px outset rgb(0, 81, 255);\n    background-color: rgb(204, 173, 230);    \n    text-align: left;\n    padding: 12px 20px;\n  }\n.users[_ngcontent-%COMP%]{\n    border: 5px outset rgb(2, 0, 136);\n    background-color: rgb(204, 153, 86);    \n    text-align: left;\n    padding: 12px 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUNBQXlDO0FBQ3pDO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YseUJBQXlCOztFQUUzQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGlDQUFpQztJQUNqQyxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJhZG1pbmlzdHJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmhlcm9lcyB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1ZW07XG4gIH1cbiAgLmhlcm9lcyBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gMDtcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuaGVyb2VzIGxpOmhvdmVyIHtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cbiAgLmhlcm9lcyBsaS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmhlcm9lcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2OWRiMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmhlcm9lcyAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzQwNTA2MTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICBsaXtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkZGRDQ7XG4gICAgXG4gIH1cbiAgLmludHJve1xuICAgIGJvcmRlcjogNXB4IG91dHNldCByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlOyAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxuICAuc2NoZWR1bGV7XG4gICAgYm9yZGVyOiA1cHggb3V0c2V0IHJnYigwLCA4MSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxNzMsIDIzMCk7ICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG4gIC51c2Vyc3tcbiAgICBib3JkZXI6IDVweCBvdXRzZXQgcmdiKDIsIDAsIDEzNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTUzLCA4Nik7ICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICB9XG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdministratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-administrator',
                templateUrl: './administrator.component.html',
                styleUrls: ['./administrator.component.css']
            }]
    }], function () { return [{ type: _rest_service__WEBPACK_IMPORTED_MODULE_1__["rest"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secure-user/secure-user.component */ "uBIy");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administrator/administrator.component */ "uUZd");
/* harmony import */ var _user_roles_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-roles.guard */ "14yi");










const routes = [
    { path: 'secure-user', component: _secure_user_secure_user_component__WEBPACK_IMPORTED_MODULE_4__["SecureUserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'administrator', component: _administrator_administrator_component__WEBPACK_IMPORTED_MODULE_6__["AdministratorComponent"], canActivate: [_user_roles_guard__WEBPACK_IMPORTED_MODULE_7__["UserRolesGuard"]] },
    { path: 'registerUser', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '**', redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "2yus");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../heros/heros.component */ "C2D/");









const _c0 = ["loginRef"];
function LoginComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function LoginComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.resendEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth, router, rs) {
        this.auth = auth;
        this.router = router;
        this.rs = rs;
        this.admin = false;
        this.resend = false;
    }
    submit() {
        if (this.email == null || this.password == null) {
            alert("Email/Password cannot be empty!");
            return;
        }
        localStorage.setItem('Email', this.email);
        this.email = this.email.trim();
        this.email = this.email.toUpperCase();
        this.password = this.password.trim();
        var sanCheck = /[^a-zA-Z@._0-9]/g;
        this.email = this.email.replace(sanCheck, "");
        console.log(this.email);
        if (this.email.substring(this.email.indexOf("@")) == "@gmail.com") {
            alert("Login Using Gmail Button!");
            return;
        }
        this.auth.login(this.email, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(result => {
            if (localStorage.getItem("admin") == "1") {
                this.router.navigate(['administrator']);
            }
            else {
                alert("Login Succcessful!");
                this.router.navigate(['secure-user']);
            }
        }, err => {
            if (err.status == 401) {
                this.admin = true;
                this.error = 'This Account has been Suspended, Contact an Administrator: Admin@website.com';
            }
            else if (err.status == 403) {
                this.resend = true;
                this.error = 'Please confirm your account with the email that was sent!';
            }
            else if (err.status == 402) {
                this.error = 'Incorrect credentials!';
            }
            else {
                this.error = 'User not found, please insure you have the correct credentials';
            }
        });
    }
    submitGmail() {
        localStorage.setItem('Email', this.email);
        var username = this.email.substring(0, this.email.indexOf("@"));
        console.log(username);
        this.rs.doesExist(this.email).subscribe((response) => {
            if (response.isAdmin == "1") { //@ts-ignore
                localStorage.setItem('admin', response.isAdmin);
            }
            else {
                localStorage.setItem('admin', "0");
            }
        }, (error) => {
            this.rs.registerUserGmail(username, this.email).subscribe((response) => {
                console.log(response);
            }, (error) => { console.log(error); });
        });
    }
    resendEmail() {
        this.rs.resendEmail(this.email).subscribe((response) => {
            alert("Email Resent!");
            console.log(response);
        }, (error) => console.log(error));
    }
    ngOnInit() {
        this.googleInitialize();
        this.resend = false;
    }
    googleInitialize() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '488489254485-k0umpsqlt7l9m9noc97vbd9tjpp2mpr9.apps.googleusercontent.com',
                    cookie_policy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.prepareLogin();
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id; //@ts-ignore
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded"; //@ts-ignore
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    prepareLogin() {
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, //@ts-ignore
        (googleUser) => {
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            if (profile.getEmail() && googleUser.getAuthResponse().id_token) {
                this.email = profile.getEmail();
                this.submitGmail();
            } //@ts-ignore
        }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["rest"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginElement = _t.first);
    } }, decls: 20, vars: 4, consts: [["style", "display:inline", 4, "ngIf"], ["style", "display:inline", 3, "click", 4, "ngIf"], [3, "submit"], [1, "container"], ["for", "email"], ["type", "text", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 2, "display", "inline"], ["loginRef", ""], [2, "display", "inline"], [2, "display", "inline", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_h4_1_Template, 2, 1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_button_2_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login with Google\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-heros");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resend == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _heros_heros_component__WEBPACK_IMPORTED_MODULE_7__["HerosComponent"]], styles: [".container[_ngcontent-%COMP%] {\n    width: 500px;\n    clear: both;\n  }\n  \n  .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    clear: both;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAuY29udGFpbmVyIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjbGVhcjogYm90aDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["rest"] }]; }, { loginElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loginRef', { static: true }]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map