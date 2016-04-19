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
              templateUrl: 'templates/cardDirectory.html'
          };
          return directive;
      }
