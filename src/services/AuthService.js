export default class AuthService {
    constructor() {
        AuthService.state = { loggedIn: false };
    }

    init() {
    }

    static verifyLogin(username, password) {
        console.log("Username", username);
        console.log("Password", password);
        return true;
    }

    static login(username, password) {
        if (this.verifyLogin(username, password)) {
            this.state.loggedIn = true;
        } else {
            this.state.loggedIn = false;
        }
    }

    static logout(props) {
        this.state.loggedIn = false;
    }

    static isLoggedIn() {
        return AuthService.state.loggedIn;
    }

}