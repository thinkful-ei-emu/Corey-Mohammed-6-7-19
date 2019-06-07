/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';


//this will render the shopping list in the DOM
function renderShoppingList() {
  console.log('render test for shopping list');
}

//this will add a new item to the shopping list on click submit
function handleNewItemSubmit() {
  console.log('handle new item test');
}

//this will check or uncheck item in shopping list with button click
function handleItemCheckClicked() {
  console.log('handle checked item test');
}
  
//this will delete item from list with button click
function handleDeleteItemClicked() {
  console.log('handle delete item test');
}
 
//this will call all of our functions after the page has loaded
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleDeleteItemClicked();

}

$(handleShoppingList);