var LORIPSUM = LORIPSUM || (function(){
    var _args = {};

    return {
        init : function(Args) {
            _args = Args;
        },
        helloWorld : function() {
            alert('Hello World! -' + _args[0]);
        }
    };
}());
