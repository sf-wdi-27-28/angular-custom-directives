angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    scope: {
      question: '@'
    },
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/cardDirective.html',
    controller: WdiCardController,
    controllerAs: 'wdiCardCtrl'
  };
  return directive;
}

function WdiCardController(){
  this.boom = function(){
    alert('Boom!');
  };
}
