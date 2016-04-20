console.log("JS is loaded & running!!");

angular
      .module('CardsAgainstAssembly', [])
      .controller('CardsController', CardsController)
      .directive('card', cardDirective);
