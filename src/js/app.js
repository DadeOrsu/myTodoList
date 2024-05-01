App = {
    web3Provider: null,
    contracts: {},

    init: async function() {
        return await App.initWeb3();
    },

    initWeb3: async function () {
        if (window.ethereum) {
          App.web3Provider = window.ethereum;
          try {
            await window.ethereum.enable();		// Request account access
          } catch (error) {
            console.error("User denied account access");	// User was denied account access
          }
        }
        else if (window.web3) {
          App.web3Provider = window.web3.currentProvider;
        }
        else {
          App.web3Provider = new Web3.provider.HttpProvider("http://localhost:7545");
        }
        web3 = new Web3(App.web3Provider);
        web3.eth.defaultAccount = web3.eth.accounts[0];
        return App.initContract();
    },

    initContract: async function () {
        $.getJSON("TodoList.json", function (data) {
          var TodoListArtifact = data;
          App.contracts.TodoList = TruffleContract(TodoListArtifact);
          App.contracts.TodoList.setProvider(App.web3Provider);
          return App.markTasks();
        });
        return App.bindEvents();
    },

    bindEvents: function () {
        $(document).on('click', '#newTaskButton', App.createTask);
        $(document).on('click', '#toggleCompletedButton', App.toggleCompleted);
    },

    markTasks: async function() {
        var todoListInstance;
        App.contracts.TodoList.deployed().then(function(instance) {
          todoListInstance = instance;
          return todoListInstance.taskCount();
        }).then(function(taskCount) {
          var taskList = $("#taskList");
          taskList.empty();
          for (var i = 1; i <= taskCount; i++) {
              todoListInstance.tasks(i).then(function(task) {
              var id = task[0];
              var content = task[1];
              var completed = task[2];

              // Render task
              var taskTemplate = "<tr><th>" + id + "</th><td>" + content + "</td><td>" + completed + "</td></tr>";
              taskList.append(taskTemplate);
              });
          }
        }).catch(function(error) {
        console.warn(error);
      });
    },

    createTask: async function() {
        var content = $("#newTask").val();
        App.contracts.TodoList.deployed().then(function(instance) {
          return instance.createTask(content);
        }).then(function(result) {
          // Reload page to reflect the addition of the task
          App.markTasks();
        }).catch(function(err) {
          console.error(err);
        });
      },
    
      toggleCompleted: async function() {
        var taskId = $("#taskId").val();
    
        App.contracts.TodoList.deployed().then(function(instance) {
          return instance.toggleCompleted(taskId);
        }).then(function(result) {
          // Reload page to reflect the change in task completion status
          App.markTasks();
        }).catch(function(err) {
          console.error(err);
        });
      },
}

$(function() {
    $(window).load(function() {
      App.init();
    });
});