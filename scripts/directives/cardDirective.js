angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    scope: {
      question: '@' //string = '@' function = '&' object = '='
    }
    restrict: 'EA',
    replace: true,
    templateUrl: 'templates/cardDirective.html'
  }
  return directive;
};
