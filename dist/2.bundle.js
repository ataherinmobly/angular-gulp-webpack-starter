webpackJsonp([2],[,,,function(module,exports,__webpack_require__){"use strict";var captainListController=__webpack_require__(6),captainListService=__webpack_require__(7);__webpack_require__(11),module.exports=angular.module("starTrekApp.captainList",[]).factory("CaptainListService",captainListService).controller("CaptainListController",["$scope","CaptainListService",captainListController])},,,function(module){"use strict";module.exports=function($scope,captainListService){$scope.captains=captainListService.getData()}},function(module){"use strict";module.exports=function(){var data=[{name:"James T. Kirk"},{name:"Jean L. Picard"},{name:"Benjamin Sisko"},{name:"Katherine Janeway"}];return{getData:function(){return data}}}},,,,function(module,exports,__webpack_require__){var content=__webpack_require__(12);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(13)(content,{})},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(14)(),exports.push([module.id,".captain{margin-bottom:1em}",""])}]);