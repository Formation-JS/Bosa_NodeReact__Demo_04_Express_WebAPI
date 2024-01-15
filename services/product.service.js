
// TODO FakeDB -> Replace by Database =)
const fakeDB = {
    data: [
        {
            id: 1,
            name: 'Pomme',
            price: 3.14
        },
        {
            id: 2,
            name: 'Fleur',
            price: 4.99
        }
    ],
    nextId: 3 
};

export default class ProductService {

    getAll() {
        const products = fakeDB.data.map(p => ({ id: p.id, name: p.name }));
        return products;
    }

    getById(id) {
        const product = fakeDB.data.find(p => p.id === id);
        return product;
    }

    add({name, price}) {
        const productAdded = {
            id: fakeDB.nextId,
            name,
            price
        };

        fakeDB.data.push(productAdded);
        fakeDB.nextId++

        return productAdded;
    }

    delete(id) {
        fakeDB.data = fakeDB.data.filter(p => p.id !== id);
    }
}