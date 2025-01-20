// Create a shopping list
let shoppingList = ["Ski Boots", "Helmet", "Ski Boards"];

// add two more items to the shopping list, and output
shoppingList.push("Ski Goggles", "Ski Poles");
console.log(shoppingList); 
//The output is as below:
//[ 'Ski Boots', 'Helmet', 'Ski Boards', 'Ski Goggles', 'Ski Poles' ]


//Shopping list is full alert
function checkIfShoppingListFull(shoppingList) {
    if (shoppingList.length >= 5) {
        console.log("You Shopping List is full!")
        itemIndex = 1
        shoppingList.forEach(item => {
            console.log(`${itemIndex}. ${item}`);
            itemIndex++;
        });
    }
}
checkIfShoppingListFull(shoppingList);
//The output is as below:
/*You Shopping List is full!
1. Ski Boots
2. Helmet
3. Ski Boards
4. Ski Goggles
5. Ski Poles
*/


//Check if an item is on the shopping list
function checkIsItemOnShoppingList(itemName) {
    return shoppingList.includes(itemName);
}

console.log(checkIsItemOnShoppingList("Helmet")); //true
console.log(checkIsItemOnShoppingList("Ski Sockes")); //false

//create an item object
let item = {
    name: "Helmet",
    price: "200 AUD",
    quantity: 1
}