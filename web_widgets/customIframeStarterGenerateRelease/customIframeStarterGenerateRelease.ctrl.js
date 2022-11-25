/**
 * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template
 * 
 * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties
 * To use AngularJS standard services, you must declare them in the main function arguments.
 * 
 * You can leave the controller empty if you do not need it. 
 */
 
 
function ($scope, $sce){
    
    /*this.getAbsolutePath = function() {
        var loc = window.location.host;
        var protocol = window.location.protocol;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
            //return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
            return protocol + "/" +loc;
    };*/
    
    this.getLink = function(){
        return  $sce.trustAsResourceUrl("/bonita/portal/resource/process/"+$scope.properties.NameProcess+"/"+$scope.properties.VersionProcess+"/content/?id="+$scope.properties.IdProcess+"&_l=es");
    };
    
}

