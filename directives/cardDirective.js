angular.module('CardsAgainstAssembly')
.directive("wdiCard", wdiCard);
function wdiCard(){
  var directive = {
    scope: {
      question:'@'
    },
    restrict:'E',
    replace:true,
    templateUrl:"templates/cardDirective.html"
  }
  return directive;
};
