Ext.define('App.view.index.Viewport', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.index-Viewport',

    layout: 'fit',

    initComponent: function() {

        this.items = {
            xtype: 'tabpanel',
            tabBar: {
                hidden: true
            },
            defaults: {
                tbar: {
                    xtype: 'widgets-bars-Toolbar'
                },
                bbar: {
                    xtype: 'widgets-bars-StatusBar'
                }
            },
            items: [
                {
                    xtype: 'index-AccountPanel'
                },{
                    html: 'index-AddressPanel'
                },{
                    html: 'index-ReceiptsPanel'
                }
            ]
        };

        this.callParent(arguments);
    }

});

