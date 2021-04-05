import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/inventory";

class InventoryService {

    getInventory(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

    createInventory(inventory){
        return axios.post(INVENTORY_API_BASE_URL, inventory);
    }

    getInventoryById(inventoryId){
        return axios.get(INVENTORY_API_BASE_URL + '/' + inventoryId);
    }

    updateInventory(inventory, inventoryId){
        return axios.put(INVENTORY_API_BASE_URL + '/' + inventoryId, inventory);
    }

    deleteInventory(inventoryId){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + inventoryId);
    }
}

export default new InventoryService()