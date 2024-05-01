const TodoList = artifacts.require("../contracts/TodoList.sol");

module.exports = function (instance) {
  instance.deploy(TodoList);
};