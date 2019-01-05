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

export default Inventory;