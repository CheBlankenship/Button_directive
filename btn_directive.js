var buttonDirective = angular.module( "buttonDirective", [] );

buttonDirective.directive('glyph', function() {
  return {
    scope: {
      icon: '@'
    },
    template: '<span class="glphicon glyphicon-{{icon}}" aria-hidden="true"></span>'
  };
});
