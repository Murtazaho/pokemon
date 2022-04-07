import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import { useParams } from "react-router-dom";
import _ from "lodash";

const Pokemon = (props)=> {
    const {pokemon} = useParams();
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);
    React.useEffect(() => {
        dispatch(GetPokemon(pokemon))
    }, []);
    

    const ShowData = () => {
        if(!_.isEmpty(pokemonState.data[pokemon])) {
            return <p>have data</p>
        }
        if (pokemonState.loading){
            return <p>Loading...</p>
        }
        if (pokemonState.errorMsg !== ""){
            return <p>{pokemonState.errorMsg}</p>
        }
        return <p>error getting pokemon</p>     
    
    }
    
    return(
        <div>
            <h1>{pokemon}</h1>
            {ShowData()}
        
        </div>
    )
}
export default Pokemon