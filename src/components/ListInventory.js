import React, { Component } from 'react'
import InventoryService from '../service/InventoryService'

class ListInventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
                inventories: []
        }
        this.addInventory = this.addInventory.bind(this);
        this.editInventory = this.editInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    }

    deleteInventory(id){
        InventoryService.deleteInventory(id).then( res => {
            this.setState({inventories: this.state.inventories.filter(inventory => inventory.id !== id)});
        });
    }
    viewInventory(id){
        this.props.history.push(`/view-inventory/${id}`);
    }
    editInventory(id){
        this.props.history.push(`/add-inventory/${id}`);
    }

    componentDidMount(){
        InventoryService.getInventoryById().then((res) => {
            this.setState({ inventories: res.data});
        });
    }

    addInventory(){
        this.props.history.push('/add-inventory/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Inventory List</h2>
                 <div className = "row">
                    <button className="btn btn-danger" onClick={this.addInventory}> Add Inventory</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Inventory Name</th>
                                    <th> Serial No</th>
                                    <th> Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.inventories.map(
                                        inventory => 
                                        <tr key = {inventory.id}>
                                             <td> { inventory.name} </td>   
                                             <td> {inventory.serialNo}</td>
                                             <td> {inventory.description}</td>
                                             <td>
                                                 <button onClick={ () => this.editInventory(inventory.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInventory(inventory.id)} className="btn btn-info">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewInventory(inventory.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListInventory