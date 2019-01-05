<<<<<<< HEAD
import React from 'react';
import AddFishForm from './AddFishForm.js';

class Inventory extends React.Component {
    render(){
        return (
            <div className="Inventory">
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish}/>
                <button 
                    onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>
        );
    }
}

=======
import React from 'react';
import AddFishForm from './AddFishForm.js';

class Inventory extends React.Component {
    render(){
        return (
            <div className="Inventory">
                <h2>Inventory</h2>
                <AddFishForm/>
            </div>
        );
    }
}

>>>>>>> 6ea5f477453f884d729f0ac7b7aa939fbcb24f8c
export default Inventory;