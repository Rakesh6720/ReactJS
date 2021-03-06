import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

    addToOrder = (key) => {
        // 1. Take a copy of existing state
        const order = {...this.state.order};
        // 2. Either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update state object
        this.setState({order : order});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    
                    <Header tagline="Fresh Seafood Market"
                            tagline2 = "Kesh is cool"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                                />))}
                    </ul>
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