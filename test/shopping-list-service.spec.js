const ShoppingListService = require("../src/shopping-list-service");
const knex = require("knex");

describe(`Shopping List service object`, function() {
    let db;
    let testItems = [{
            column_id: 1,
            name: "First test item!",
            date_added: new Date("2029-01-22T16:28:32.615Z"),
            price: "12.00",
            category: "Main",
            checked: true
        },
        {
            column_id: 2,
            name: "Second test item!",
            date_added: new Date("2100-05-22T16:28:32.615Z"),
            price: "21.00",
            category: "Snack",
            checked: true
        },
        {
            column_id: 3,
            name: "Third test item!",
            date_added: new Date("1919-12-22T16:28:32.615Z"),
            price: "3.00",
            category: "Lunch",
            checked: true
        }
    ];
    before(() => {
        db = knex({
            client: "pg",
            connection: process.env.TEST_DB_URL
        });
    });
    before(() => db("shopping_list").truncate());
    afterEach(() => db("shopping_list").truncate());

    after(() => db.destroy());
    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
            return db.into("shopping_list").insert(testItems);
        });
        it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
            // test that ArticlesService.getAllArticles gets data from table
            return ShoppingListService.getAllItems(db).then(actual => {
                expect(actual).to.eql(testItems);
            });
        });
        it(`getById() resolves an item by column id from 'shopping_list' table`, () => {
            const thirdId = 3;
            const thirdTestItem = testItems[thirdId - 1];
            return ShoppingListService.getById(db, thirdId).then(actual => {
                expect(actual).to.eql({
                    column_id: thirdId,
                    name: thirdTestItem.name,
                    date_added: thirdTestItem.date_added,
                    price: thirdTestItem.price,
                    category: thirdTestItem.category,
                    checked: thirdTestItem.checked
                });
            });
        });
        it(`deleteItem() removes an item by column-id from 'shopping_list' table`, () => {
            const ItemId = 3;
            return ShoppingListService.deleteItem(db, ItemId)
                .then(() => ShoppingListService.getAllItems(db))
                .then(allItems => {
                    // copy the test articles array without the "deleted" article
                    const expected = testItems.filter(Item => Item.column_id !== ItemId);
                    expect(allItems).to.eql(expected);
                });
        });
        it(`updateItem() updates an Item from the 'shopping_list' table`, () => {
            const idOfItemToUpdate = 3;
            const newItemData = {
                name: "updated title",
                price: "99.99",
                date_added: new Date(),
                checked: true,
                category: "Lunch"
            };
            return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
                .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
                .then(item => {
                    expect(item).to.eql({
                        column_id: idOfItemToUpdate,
                        ...newItemData
                    });
                });
        });
    });
    context(`Given 'shopping_list' has no data`, () => {
        it(`getAllItems() resolves an empty array`, () => {
            return ShoppingListService.getAllItems(db).then(actual => {
                expect(actual).to.eql([]);
            });
        });
        it(`insertItem() inserts a new item and resolves the new item with an 'id'`, () => {
            const newItem = {
                name: "Test new name name",
                price: "5.05",
                date_added: new Date("2020-01-01T00:00:00.000Z"),
                checked: true,
                category: "Lunch"
            };
            return ShoppingListService.insertItem(db, newItem).then(actual => {
                expect(actual).to.eql({
                    column_id: 1,
                    name: newItem.name,
                    price: newItem.price,
                    date_added: newItem.date_added,
                    checked: newItem.checked,
                    category: newItem.category
                });
            });
        });
    });
});