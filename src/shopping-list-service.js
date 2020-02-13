const ShoppingListService = {
    getAllItems(knex) {
        return knex.select("*").from("shopping_list");
    },
    insertItem(knex, newItem) {
        return knex
            .insert(newItem)
            .into("shopping_list")
            .returning("*")
            .then(rows => {
                return rows[0];
            });
    },
    getById(knex, id) {
        return knex
            .from("shopping_list")
            .select("*")
            .where("column_id", id)
            .first();
    },
    deleteItem(knex, column_id) {
        return knex("shopping_list")
            .where({ column_id })
            .delete();
    },
    updateItem(knex, column_id, newItemFields) {
        return knex("shopping_list")
            .where({ column_id })
            .update(newItemFields);
    }
};

module.exports = ShoppingListService;