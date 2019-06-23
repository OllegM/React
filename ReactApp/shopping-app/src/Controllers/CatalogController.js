import catalog from '../catalog';

class CatalogControler {

    constructor() {
        this.initItems();
        this.refreshCategories();
        this.subscribers = [];
    }

    initItems() {
        let i = 0; // item counter
        this._items = catalog.map((item) => { item.id = (i++).toString(); return item; });
    }

    refreshCategories() {
        let c = 0; // category counter
        const uniqueCategories = new Set(this._items.map((item) => {
            return item.category;
        }));
        this._categories = [...uniqueCategories].map((cat) => {
            return {
                category: cat,
                id: c++
            }
        });
    }

    getAllItems() {
        return new Promise((resolve) => {
            resolve(this._items);
        })
    }

    getCartItems() {
        return new Promise((resolve) => {
            const cartItems = this._items.map((item) => { 
                if (item.incart) { return item } else {return null } })
            resolve(cartItems);
        })
    }

    getAllCatergories() {
        return new Promise((resolve) => {
            resolve(this._categories);
        })
    }

    updateItem = (updatedItem) => {
        // TODO: is there anything more smart for array filtering in JS?
        this._items.forEach(item => {
            if (item.id === updatedItem.id) {
                item = updatedItem;
            }
        });

        this.updateSubscribers();
    }

    updateSubscribers = () => {
        this.subscribers.forEach((action) => {
            action(this._items);
        });
    }

    addItemToCatalog = (item) => {
        this._items.push(item);
        this.refreshCategories();
    }
}

export default new CatalogControler();