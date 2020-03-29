import React from 'react';

import { Link } from 'react-router-dom';

const Characters = ({ name, imageUrl, id, }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <img src={imageUrl} alt={name} className="img-fluid"></img>
                    <Link className="btn btn-dark" to={`/character-specific/${id}`}>View more</Link>
                </div>
            </div>
        </div>
    )
}

export default Characters;