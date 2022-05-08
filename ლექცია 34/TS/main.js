var User = /** @class */ (function () {
    function User(username, password) {
        var _this = this;
        this.Login = function () {
            var localTokens = JSON.parse(localStorage.getItem("token"));
            var userExists;
            for (var _i = 0, localTokens_1 = localTokens; _i < localTokens_1.length; _i++) {
                var token = localTokens_1[_i];
                if (token == _this.Token) {
                    userExists = true;
                }
                else {
                    userExists = false;
                }
            }
            return userExists;
        };
        this.Register = function (tokens) {
            localStorage.setItem("token", JSON.stringify(tokens));
        };
        this.getToken = function () {
            return _this.Token;
        };
        this.Username = username;
        this.Password = password;
        this.Token = "".concat(username, " - ").concat(password);
    }
    return User;
}());
var UserTokens = [];
var authForm = document.getElementById("Auth");
var userNameValue = document.getElementById("userName");
var PasswordValue = document.getElementById("Password");
var loginBtn = document.querySelector(".loginBtn");
var registerBtn = document.querySelector(".registerBtn");
var resultH1 = document.querySelector(".result");
window.onload = function () {
    UserTokens = JSON.parse(localStorage.getItem("token"));
};
loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var username = userNameValue.value;
    var password = PasswordValue.value;
    var user = new User(username, password);
    if (user.Login()) {
        resultH1.innerHTML = "Logged in";
    }
    else {
        resultH1.innerHTML = "Username or Password is incorrect!";
    }
});
registerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var username = userNameValue.value;
    var password = PasswordValue.value;
    var user = new User(username, password);
    UserTokens.push(user.getToken());
    user.Register(UserTokens);
});
