angular
      .module('CardsAgainstAssembly', [])
      .directive('wdiCard', wdiCard);

      function wdiCard(){
          var directive = {
              restrict: 'EA',
              replace : true
          };
          return directive;
      }
