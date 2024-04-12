import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getValueTypes } from "../Redux/pokemonsSlice";

const useTypes = () => {
    const dispatch = useDispatch();

    const types = useSelector((state) => state.pokemon.allTypes);

    useEffect(() => {
        fetch('https://backend-pokemons-production.up.railway.app/types')
        .then((response) => response.json())
        .then((data) => {
            dispatch(getValueTypes(data));
        })
        
    }, []);

    return { types };
}

export default useTypes;