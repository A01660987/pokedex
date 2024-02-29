import axios from "axios";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
})

export const PokeApi={
    getPokemonById: async function(id:any){
        return api.get(`/pokemon/${id}`)
    }
}