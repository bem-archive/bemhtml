var BEM = require('bem'),
    Q = BEM.require('q'),
    VM = require('vm');

exports.techMixin = {

    getBemtree: function(prefix) {

        var path = this.getPath(prefix, 'bemtree.js');
        return BEM.util.readFile(path)
            .then(function(c) {
                /** @name BEMHTML variable appears after runInThisContext() call */
                VM.runInThisContext(c, path);
                return BEMHTML;
            });

    },

    getJson: function(prefix) {

        var path = this.getPath(prefix, 'json.js');
        return BEM.util.readFile(path)
            .then(function(c) {
                return VM.runInThisContext(c, path);
            });

    },

    getBemjson: function(bemtree, json) {

        return Q.all([bemtree, json])
            .spread(function(bemtree, json) {
                return bemtree.apply(json);
            });

    },

    getCreateResult: function(path, suffix, vars) {

        return this.getBemjson(
            this.getBemtree(vars.Prefix),
            this.getJson(vars.Prefix));

    },

    storeCreateResult: function(path, suffix, res, force) {
        // always overwrite html files
        return this.__base(path, suffix, res, true);
    },

    getDependencies: function() {
        return ['json.js', 'bemtree'];
    },

    getSuffixes: function() {
        return ['bemjson.js'];
    }

};
