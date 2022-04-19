import React, { useState, useEffect } from "react";

import "./styles.scss";
import { PokeCard } from "./components/PokeCard";
import axios from "axios";
import Tilt from "react-tilt";
import { typeToColor } from "./scripts/typeToColor";

export default function App() {
  const [pokemonCardColor, setPokemonCardColor] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHP, setPokemonHP] = useState("50HP");
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonLength, setPokemonLength] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");
  const [pokemonAttackName, setPokemonAttackName] = useState("");
  const [pokemonAttackDescription, setPokemonAttackDescription] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    setLoading(true);
    const pokemonNumber = Math.floor(Math.random() * 898) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((result) => {
        fetchPokemonAttack(result.data);
      });
  };

  const fetchPokemonAttack = (data) => {
    const attackId = Math.floor(Math.random() * data.moves.length);
    axios
      .get(data.moves[attackId].move.url)
      .then((result) => {
        changePokemon(data, attackId, result);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const changePokemon = (data, attackId, attack) => {
    setPokemonImage(
      data.sprites.other.home.front_default
        ? data.sprites.other.home.front_default
        : data.sprites.front_default
    );
    setPokemonName(data.name);
    setPokemonType(data.types[0].type.name);
    setPokemonWeight(data.weight);
    setPokemonLength(data.height);
    setPokemonCardColor(typeToColor(data.types[0].type.name));
    setPokemonHP(data.stats[0].base_stat);
    setPokemonAttackName(data.moves[attackId].move.name);
    setPokemonAttackDescription(
      formatAttackDescription(attack.data.effect_entries[0].effect)
    );
  };

  const formatAttackDescription = (attack) => {
    const percentage = Math.floor(Math.random() * 100) + 1;
    return attack.replace("$effect_chance%", `${percentage}%`);
  };

  return (
    <div className="App">
      <Tilt
        options={{
          max: 15,
          scale: 1,
          transition: true,
          easing: "ease-in-out"
        }}
      >
        <PokeCard
          pokemonCardColor={pokemonCardColor}
          pokemonName={pokemonName}
          pokemonHP={pokemonHP}
          pokemonType={pokemonType}
          pokemonWeight={pokemonWeight}
          pokemonLength={pokemonLength}
          pokemonAttackName={pokemonAttackName}
          pokemonImage={pokemonImage}
          pokemonAttackDescription={pokemonAttackDescription}
          loading={loading}
        />
      </Tilt>
      <button onClick={fetchPokemon}>Generate</button>
    </div>
  );
}
