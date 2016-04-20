angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {

    restrict: 'EA',
    templateUrl: 'templates/cardDirective.html',
    controller: WdiCardController,
    controllerAs: 'wdiCardCtrl',
    scope:{
      question: '@'
    }
  };
  return directive;
}

function WdiCardController(){
  var vm = this;
}
