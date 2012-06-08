Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext':  '/js/extjs/src',
        'App':  '/js/app',
        'ExtG': '/js/extjs-generator',
        'ExtX': '/js/extjs-extends'
    }
});

Ext.application({
    name: 'App',
    appFolder: '/js/app',

    controllers: [
        'Index',
        'widgets.AccountCard',
        'widgets.AccountTabs',
        'widgets.AddressTree',
        'widgets.Bars'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'index-Viewport'
            }
        });
    }
});

