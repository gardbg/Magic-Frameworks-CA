import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { MAGIC } from './../constants/constants';

import { Link } from 'react-router-dom';

export default function CharacterSpecific(props) {
    const [characterResults, setcharacterResults] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(MAGIC + '/' + props.match.params.id)
            .then(result => {
                setcharacterResults(result.data.card);
                setIsLoading(false)
            })
    }, [props])

    return (
        (isLoading) ?
            <div className="col-sm-12 loadingImage">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="loading" />
            </div> :
            <div className="row">
                <div className="col-md-12 rowCardSpecific">
                    <h1>{characterResults.name}</h1>
                    <br />
                    {
                        (characterResults !== undefined) ?
                            <>
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4>{characterResults.text}</h4>
                                    </div>
                                    <div className="col-md-4 textCardSpecific">
                                        <img src={characterResults.imageUrl} alt={characterResults.name} className="img-fluid"></img>
                                    </div>
                                    <div className="col-md-4">
                                        <h4>Type: {characterResults.type}</h4>
                                        <h4>Rarity: {characterResults.rarity}</h4>
                                        <h4>Color: {characterResults.colors}</h4>
                                    </div>
                                </div>
                            </> :
                            <div>No data</div>
                    }
                    <br />
                    <div className="btnCardSpecific">
                        <Link className="btn btn-dark btnCardSpecific" to="/">Go back</Link>
                    </div>
                </div>
            </div>
    );
}