require.config({
    paths: {
        'jquery': 'lib/jquery-2.1.1.min',
        'underscore': 'lib/underscore-min'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require(
    [
        'jquery',
        'underscore'
    ],
    function($, _) {

    }
);