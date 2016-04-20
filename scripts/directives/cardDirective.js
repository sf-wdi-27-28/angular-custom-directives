angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);


  function wdiCard(){
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: "templates/cardDirective.html",
      scope: {
        question: '@'
      },
      controller: WdiCardController,
      controllerAs: 'wdiCardCtrl'
    };
    return directive;
  }

  function WdiCardController(){
    var vm = this;

    vm.alert = function(){
      window.alert("working?");
    };

  }
