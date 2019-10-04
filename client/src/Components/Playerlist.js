import React from 'react';
import axios from 'axios';

class Playerlist extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }
    componentDidMount() {
            fetch('http://localhost:5000/api/players')
            .then(res => res.json())
            .then(player => this.setState({players:player}))
            .catch(err => console.log("No data returned", err));
    }
    render() {
        return (
            <div>
                {this.state.players.map(player => (
                    <div className="card">
                        <h1 data-testid="player-name">{player.name}</h1>
                        <h3>{player.country}</h3>
                        <h3>{player.searches}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default Playerlist;