import axios from "axios";

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
      withCredentials: true,
    });
  }

  login = (email, password) => this.app.post("/login", { email, password });
  signUp = (username, email, password, password2, address) => {
    return this.app.post("/signUp", { username, email, password, address });
  };
  logout = () => this.app.get("/logout");
  isloggedin = () => this.app.get("/isloggedin");
}

export default AuthService;
