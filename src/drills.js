require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
    client: "pg",
    connection: process.env.DB_URL
});
//Get all items that conatin text
function searchByItemName(searchTerm) {
    knexInstance
        .select("*")
        .from("shopping_list")
        .where("name", "ILIKE", `%${searchTerm}%`)
        .then(result => {
            console.log(result);
        });
}

//searchByItemName("Salad");

//Get all items paginated
function paginateItems(pageNumber) {
    const itemsPerPage = 6;
    const offset = itemsPerPage * (pageNumber - 1);
    knexInstance
        .select("*")
        .from("shopping_list")
        .limit(itemsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result);
        });
}
//paginateItems(2);

//Get all items added after date
function itemsAddedDaysAgo(daysAgo) {
    knexInstance
        .select("id", "name", "price", "date_added", "checked", "category")
        .from("shopping_list")
        .where(
            "date_added",
            ">",
            knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
        )
        .then(results => {
            console.log("PRODUCTS ADDED DAYS AGO");
            console.log(results);
        });
}

//itemsAddedDaysAgo(3);

//Get the total cost for each category
function costPerCategory() {
    knexInstance
        .select("category")
        .sum("price as total")
        .from("shopping_list")
        .groupBy("category")
        .then(result => {
            console.log("COST PER CATEGORY");
            console.log(result);
        });
}

costPerCategory();