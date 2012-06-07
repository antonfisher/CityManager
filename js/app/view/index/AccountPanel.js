Ext.define('App.view.index.AccountPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.index-AccountPanel',

    layout: 'border',

    initComponent: function() {

        this.items = [
            {
                region: 'center',
                xtype: 'panel',
                title: '',
                border: 0,
                layout: {
                    type: 'border',
                    border: 0,
                    padding: 0
                },
                defaults: {
                    border: 0
                },
                items: [
                    {
                        region: 'north',
                        xtype: 'widgets-accountCard-Index',
                        border: 0
                    },{
                        region: 'center',
                        xtype: 'widgets-accountTabs-Index',
                        border: 0
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }

});

