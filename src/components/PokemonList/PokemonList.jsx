import { useState } from 'react';
import './PokemonList.css';
import pokemonJSON from '../../data/pokemon.json';
import PokemonItem from '../PokemonItem/PokemonItem';
import InputForm from '../InputForm/InputForm';

const PokemonList = () => {
	const [pokemons] = useState(pokemonJSON);
	const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

	const handleSearch = (e) => {
		let search = pokemons.filter((item) => {
			return item.name.toLowerCase().includes(e.target.value);
		});

		setFilterPokemons(search);
	};

	return (
		<>
			<InputForm
				type="search"
				placeholder="Search Pokemon"
				onChange={handleSearch}
			/>

			<div className="list-pokemon">
				{filterPokemons.length == 0 ? (
					<h1>Data Tidak Ditemukan</h1>
				) : (
					filterPokemons.map((pokemon) => (
						<PokemonItem
							key={pokemon.id}
							pokemon={pokemon}
						/>
					))
				)}
			</div>
		</>
	);
};

export default PokemonList;
