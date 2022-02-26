import axios from "axios";

class MatchService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true,
    });
  }

  getTicketCreate = (id, quantity) =>
    this.app.post(`/tickets/createTicket`, { id, quantity });
}

export default MatchService;
