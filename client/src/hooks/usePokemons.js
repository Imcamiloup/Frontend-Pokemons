import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { getAllPokemons } from "../Redux/pokemonsSlice";


const useFetch = () => {
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemon.allPokemons);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    
    useEffect(() => {
        setLoading(true);
        fetch('https://backend-pokemons-production.up.railway.app/pokemons')
        .then((response) => response.json())
        .then((data) => {
            dispatch(getAllPokemons(data));
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    

    return {pokemons, loading, error};
    }

export default useFetch;