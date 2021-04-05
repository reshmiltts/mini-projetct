import React, { Component } from 'react'
import InventoryService from '../service/InventoryService';

class CreateInventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            serialNo: '',
            description: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSerialNoHandler = this.changeSerialNoHandler.bind(this);
        this.saveOrUpdateInventory = this.saveOrUpdateInventory.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            InventoryService.getInventoryById(this.state.id).then( (res) =>{
                let inventory = res.data;
                this.setState({name: inventory.name,
                    serialNo: inventory.serialNo,
                    description : inventory.description
                });
            });
        }        
    }
    saveOrUpdateInventory = (e) => {
        e.preventDefault();
        let inventory = {name: this.state.name, serialNo: this.state.serialNo, description: this.state.description};
        console.log('inventory => ' + JSON.stringify(inventory));

        // step 5
        if(this.state.id === '_add'){
            InventoryService.createInventory(inventory).then(res =>{
                this.props.history.push('/inventory');
            });
        }else{
            InventoryService.updateInventory(inventory, this.state.id).then( res => {
                this.props.history.push('/inventory');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeSerialNoHandler= (event) => {
        this.setState({serialNo: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/inventory');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Inventory</h3>
        }else{
            return <h3 className="text-center">Update Inventory</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Serial No: </label>
                                            <input placeholder="Serial No" name="serialNo" className="form-control" 
                                                value={this.state.serialNo} onChange={this.changeSerialNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateInventory}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateInventory