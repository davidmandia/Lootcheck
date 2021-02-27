import React, { Component } from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Loot Check</h2>
                <hr />
                <Wallet />
                <hr />
                <Loot />
                <div>Powered by <a target='blank' href='https://www.coindesk,com'>coindesk</a></div>
            </div>
        )
    }
}

export default App;