module.exports = function (){
    return {
      add: function(num1, num2) { 
           return num1 + num2
      },
      multiply: function(num1, num2) {
           return num1 * num2
      },
      square: function(num) {
            return Math.sqrt(num)
      },
      random: function(num1, num2) {
           return Math.random(num1, num2)
      }
    }
  };