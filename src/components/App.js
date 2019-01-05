import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        orders: {}
    };
    addFish = fish => {
        // 1. Take a copy of existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set new fishes object to state
        this.setState({
            fishes: fishes
        });
    }
    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"
                            tagline2 = "Kesh is cool"/>
                </div>                
                <Order />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        )
    }
}

export default App;