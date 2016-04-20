angular.module('CardsAgainstAssembly')
  .directive('card', cardView);

function cardView(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class
    restrict: 'E',
    replace: true,
    templateUrl:  "templates/cardDirective.html",
    scope: {
        question: '@'
    },
  };

  return directive;
}
