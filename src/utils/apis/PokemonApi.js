import axios from "axios";

class PokemonApi {

    static requestHeaders() {
        // {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
      return {'Content-Type': `application/json`}
    }
  
    static getAllPokemons() {
        // const headers = this.requestHeaders();
        // get the list of pokemon from local json
        return axios.get("./pokemonlist.json")
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    }
  
  
    // static createCat(cat) {
    //   const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    //   const request = new Request(`${process.env.API_HOST}/api/v1/cats`, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({cat: cat})
    //   });
  
  
    //   return fetch(request).then(response => {
    //     return response.json();
    //   }).catch(error => {
    //     return error;
    //   });
    // }
  
    // static deleteCat(cat) {
    //   const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    //   const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
    //     method: 'DELETE', 
    //     headers: headers
    //   });
  
    //   return fetch(request).then(response => {
    //     return response.json();
    //   }).catch(error => {
    //     return error;
    //   });
    // }
  }
  
  export default PokemonApi