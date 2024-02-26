// components/Player.js

import React from 'react';

const Player = ({ name, position }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Position: {position}</p>
        </div>
    );
};

export default Player;
