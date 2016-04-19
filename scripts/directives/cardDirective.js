angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    restrict: 'EA',
    replace: true,
    templateUrl: 'templates/cardDirective.html',
    scope: {
      question: '@' //string = '@' function = '&' object = '='
    }
  };
  return directive;
};

function WdiCardController(){
  var vm = this;
}
