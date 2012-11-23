var BEMC = require('bemc');

exports.baseTechPath = require.resolve('./bemc.js');

exports.techMixin = {

    getTranslatedTemplates: function(source) {

        return BEMC.translate(source, {
            exportName: 'BEMHTML',
            devMode: process.env.BEMHTML_ENV == 'development'
        });

    },

    getSuffixes: function() {
        return ['bemhtml'];
    },

    getBuildSuffixes: function() {
        return ['bemhtml.js'];
    }

};
