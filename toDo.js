(function(){
    angular.module('myApp', []) //creates an angular object
        .controller('myController', myController)
        
        function myController(){
            var myCtrl = this
            
            myCtrl.title = 'To Do List'
            myCtrl.chores = ['Dishes', 'Laundry', 'Groceries', 'Meal Prep', 'Mow Lawn', 'Study','Bills']  

            myCtrl.addItem = function(){
                myCtrl.chores.push(myCtrl.newItem)
                myCtrl.newItem = []
            }
        }
}());

