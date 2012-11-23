var BEMC = require('bemc');

exports.baseTechPath = require.resolve('./bemc.js');

exports.techMixin = {

    getTranslatedTemplates: function(source) {

        return BEMC.translate(source, {
            exportName: 'BEMTREE',
            devMode: process.env.BEMTREE_ENV == 'development'
        });

    },

    getSuffixes: function() {
        return ['bemtree'];
    },

    getBuildSuffixes: function() {
        return ['bemtree.js'];
    }

};
