import axios from 'axios';

const apiKey = "916f7023c320440daebd11eb40e66e2e"

export default {

  retrieveGames() {
    return axios.get('https://api.rawg.io/api/games?key=916f7023c320440daebd11eb40e66e2e&page=1')
  }

}
