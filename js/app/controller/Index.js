Ext.define('App.controller.Index', {
    extend: 'ExtX.app.Controller',

    views: [
        'index.Viewport',
        'index.AccountPanel',
        'index.AddressPanel',
        'index.ReceiptsPanel'
    ],

    stores: [],

    models: [],

    requires: [],

    init: function () {
        this.callParent(arguments);
    }

});

