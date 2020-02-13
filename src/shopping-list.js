require("dotenv").config();

const knex = require("knex");
const ShoppingListService = require("./shopping-list-service");

const knexInstance = knex({
    client: "pg",
    connection: process.env.DB_URL
});

// use all the ShoppingListService methods!!
ShoppingListService.getAllItems(knexInstance)
    .then(items => console.log(items))
    .then(() =>
        ShoppingListService.insertItem(knexInstance, {
            name: "New name",
            price: "5.00",
            date_added: new Date(),
            checked: true,
            category: "Lunch"
        })
    )
    .then(newItem => {
        console.log(newItem);
        return ShoppingListService.updateItem(knexInstance, newItem.id, {
            name: "Updated name"
        }).then(() => ShoppingListService.getById(knexInstance, newItem.id));
    })
    .then(item => {
        console.log(item);
        return ShoppingListService.deleteItem(knexInstance, item.id);
    });