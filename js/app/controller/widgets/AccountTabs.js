Ext.define('App.controller.widgets.AccountTabs', {
    extend: 'ExtX.app.Controller',

    views: [
        'widgets.accountTabs.Index'
    ],

    models: [],

    stores: [],

    refs: [
        //{ref: '', selector: ''}
    ],

    requires: [
        'ExtG.grid.RowEditPanel',
    ],

    init: function() {
        this.callParent(arguments);
    }

});

