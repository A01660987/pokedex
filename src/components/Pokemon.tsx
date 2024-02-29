import { Pokemon } from '../models/Pokemon';
import './pokemon.css';

interface PokemonProps{
    pokemon: Pokemon;
}

export default function PokemonComponent(props:PokemonProps){
    return(
        <>
            <p className={"text-5xl text-center text-white py-3"}>{props.pokemon.name} <span className={"font-bold text-zinc-300"}>#{props.pokemon.id.toString().padStart(4, '0')}</span></p>
            <img width={"500px"} className={"mx-auto"} src={props.pokemon?.sprites.other['official-artwork'].front_default} alt={props.pokemon.name}></img>
            <p className={"text-3xl text-center font-bold text-white"}>Type</p>
            <div className={"typeList justify-center py-4 flex"}>
                {props.pokemon.types.map((type)=>{
                    return (
                        <div className={"text-3xl text-white font-medium rounded-lg px-3 py-2 mx-4 type capitalize " + type.type.name} key={type.type.name}>{type.type.name}</div>
                    )
                })}
            </div>
        </>
    )
}