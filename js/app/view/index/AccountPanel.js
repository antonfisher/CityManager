Ext.define('App.view.index.AccountPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.index-AccountPanel',

    layout: 'border',

    initComponent: function() {

        this.items = [
            {
                region: 'north',
                xtype: 'widgets-accountCard-Index',
                border: 0
            },{
                region: 'center',
                xtype: 'widgets-accountTabs-Index',
                border: 0
            }
        ];

        this.callParent(arguments);
    }

});

