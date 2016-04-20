angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard() {
  var directive = {
    scope: {
      myQuestion: '@'
    },
    restrict: 'E',
    replace: true,
    templateUrl: 'template/templateUrl.html'
  };
  return directive;
}
