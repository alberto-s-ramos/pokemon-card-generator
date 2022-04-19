import React from "react";
import "../styles/PokeCard.scss";

export const PokeCard = (props) => {
  return (
    <div className="cardWrapper">
      <article
        className="card"
        style={{
          background: props.pokemonCardColor
        }}
      >
        <section>
          <header className="card__header">
            <h1>{props.pokemonName}</h1>
            <h3>{props.pokemonHP}HP</h3>
          </header>
          <figure className="card__image">
            <figure className="card__imageContainer">
              {!props.loading ? (
                <img src={props.pokemonImage} alt="Pokemon" />
              ) : (
                ""
              )}
            </figure>
            <figcaption>
              <b>
                {props.pokemonType} Pokémon. Length:{props.pokemonLength}",
                Weight:{props.pokemonWeight} lbs.
              </b>
            </figcaption>
          </figure>
        </section>
        <section>
          <div className="card__description">
            <p>
              <b>{props.pokemonAttackName}</b>. {props.pokemonAttackDescription}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
