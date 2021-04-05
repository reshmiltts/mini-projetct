import React, { Component } from 'react'
import InventoryService from '../service/InventoryService'

class viewInventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            inventory: {}
        }
    }

    componentDidMount(){
        InventoryService.getInventoryById(this.state.id).then( res => {
            this.setState({inventory: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Inventory Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Inventory Name: </label>
                            <div> { this.state.inventory.name }</div>
                        </div>
                        <div className = "row">
                            <label> Serial No: </label>
                            <div> { this.state.inventory.serialNo }</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.inventory.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default viewInventory