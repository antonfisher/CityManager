Ext.define('App.view.index.ReceiptsPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.index-ReceiptsPanel',

    layout: 'border',

    initComponent: function() {

        this.items = [
            {
                region: 'center',
                html: '...'
            }
        ];

        this.callParent(arguments);
    }

});

