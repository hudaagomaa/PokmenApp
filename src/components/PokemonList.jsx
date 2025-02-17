import React from 'react';

export default function PokemonList({ poke }) {
  return (

    <div>
      {
        poke.map((p) => (<h6  key={p}>{p}</h6>))
      }
    </div>

  );
}
