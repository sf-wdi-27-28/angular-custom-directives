angular
      .module('CardsAgainstAssembly', [])
      .directive('wdiCard', wdiCard);

      function wdiCard(){
          var directive = {
            scope: {
              question: '@'
            },
              restrict: 'EA',
              replace : true,
              templateUrl: 'templates/cardDirectory.html',
              controller: 'WdiCardController',
              controllerAs: 'wdiCardCtrl'
          };
          return directive;
      }

      function WdiCardController () {
        var vm = this;
      }
