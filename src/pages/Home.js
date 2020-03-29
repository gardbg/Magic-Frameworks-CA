import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { HEROKU_BYPASS_CORS, MAGIC } from './../constants/constants';

import Character from './../components/characters';

export default function HomePage() {
    const [characterResults, setCharacterResults] = useState(undefined);
    const [filteredResults, setFilteredResults] = useState([]);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + MAGIC)
            .then((result) => {
                setCharacterResults(result.data.cards);
                setIsLoading(false)
            })
    }, [])

    const handleFiltering = (input) => {
        let filteredCharacterPosts = characterResults.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setFilteredResults(filteredCharacterPosts)
        setSearchPhrase(input.target.value)
        setIsResultsFiltered(true)
    }
    return (
        (isLoading)? 
    <div className="col-sm-12 text-center">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="loading" />
    </div> :
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Cards</h2>
                    <br />
                </div>
                <form className="Searchbar">
                    <input type='text'
                        name='username'
                        onChange={handleFiltering}
                        className="form-control Searchbar"
                        placeholder="ex.. Angel of Mercy"
                    />
                    <br />
                    <br />
                </form>
            </div>

            <div className="row">
                {
                    (isResultsFiltered) ?
                        <>
                            <h3 className="col-sm-12">Filtered Results for {searchPhrase}</h3>
                            {
                                (filteredResults.length > 0) ?
                                    filteredResults.map((value, index) => {
                                        let img;
                                        value.imageUrl !== undefined ? img = value.imageUrl : img = 'https://via.placeholder.com/446x520'
                                        return <Character key={index}
                                            name={value.name}
                                            type={value.type}
                                            colors={value.colors}
                                            rarity={value.rarity}
                                            imageUrl={img}
                                            id={value.id}
                                        />
                                    }) :
                                    <div>No Results</div>
                            }
                        </> :
                        <>
                            {
                                (characterResults !== undefined) ?
                                    characterResults.map((value, index) => {
                                        let img;
                                        value.imageUrl !== undefined ? img = value.imageUrl : img = 'https://via.placeholder.com/446x520'
                                        return <Character key={index}
                                            name={value.name}
                                            type={value.type}
                                            colors={value.colors}
                                            rarity={value.rarity}
                                            imageUrl={img}
                                            id={value.id}
                                        />
                                    }) :
                                    <div>No Data for characters yet</div>
                            }
                        </>
                }
            </div>
        </div>
    )
}