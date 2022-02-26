import axios from "axios";

class TicketsService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true,
    });
  }

  getTickets = (jornada) => this.app.get(`/games/?jornada=${jornada}`);
}

export default TicketsService;
