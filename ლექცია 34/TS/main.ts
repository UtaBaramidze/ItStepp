interface IUser{
    Username: string;
    Password: string | number;
    Token: string;

    Login: () => boolean;
    Register: (tokens) => void;
}

class User implements IUser{
    Username: string;
    Password: string | number;
    private Token: string;

    constructor(username:string, password: string | number){
        this.Username = username;
        this.Password = password;
        this.Token = `${username} - ${password}`
    }

    Login = () => {
        let localTokens: string[] = JSON.parse(localStorage.getItem("token"));
        let userExists: boolean;
        for (const token of localTokens) {
            if(token == this.Token){
                userExists = true;
            }else{
                userExists = false;
            }
        }
        return userExists;
    };
    Register = (tokens: string[]) => {
        localStorage.setItem("token",JSON.stringify(tokens))
    };

    getToken = () => {
        return this.Token;
    }
}

let UserTokens: string[] = []

let authForm = document.getElementById("Auth") as HTMLFormElement
let userNameValue = document.getElementById("userName") as HTMLInputElement
let PasswordValue = document.getElementById("Password") as HTMLInputElement
let loginBtn = document.querySelector(".loginBtn") as HTMLButtonElement
let registerBtn = document.querySelector(".registerBtn") as HTMLButtonElement
let resultH1 = document.querySelector(".result") as HTMLElement

window.onload = () => {
    UserTokens = JSON.parse(localStorage.getItem("token"))
}
loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let username = userNameValue.value;
    let password = PasswordValue.value;

    let user = new User(username,password);

    if(user.Login()){
        resultH1.innerHTML = "Logged in"
    }else{
        resultH1.innerHTML = "Username or Password is incorrect!"
    }
})
registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let username = userNameValue.value;
    let password = PasswordValue.value;

    let user = new User(username,password);
    UserTokens.push(user.getToken())
    user.Register(UserTokens)
})