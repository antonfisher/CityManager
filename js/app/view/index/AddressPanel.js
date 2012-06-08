Ext.define('App.view.index.AddressPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.index-AddressPanel',

    layout: 'border',

    initComponent: function() {

        this.items = [
            {
                region: 'center',
                xtype: 'widgets-addressTree-Index',
                border: 0
            }
        ];

        this.callParent(arguments);
    }

});

