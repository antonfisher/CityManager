Ext.define('App.controller.widgets.Bars', {
    extend: 'ExtX.app.Controller',

    views: [
        'widgets.bars.Toolbar',
        'widgets.bars.StatusBar'
    ],

    models: [],

    stores: [],

    refs: [],

    init: function() {
        this.callParent(arguments);
    }

});

