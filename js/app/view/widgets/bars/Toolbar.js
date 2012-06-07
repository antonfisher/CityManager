Ext.define('App.view.widgets.bars.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.widgets-bars-Toolbar',

    initComponent: function() {
        this.items = [];

        this.items.push('<span style="font-size:bold">CityManager</span>');
        this.items.push('-');
        this.items.push('demo-user');

        this.items.push('->');

        this.items.push({
            text: 'Abonents',
            tooltip: 'Abonents',
            scale: 'large',
            listeners: {
                'click': {
                    fn: function(obj) {
                        this.up('tabpanel').setActiveTab(0);
                        //obj.pressed = true;
                    },
                    scope: this
                }
            }
        });

        this.items.push({
            text: 'Addresses',
            tooltip: 'Addresses',
            scale: 'large',
            listeners: {
                'click': {
                    fn: function(obj) {
                        this.up('tabpanel').setActiveTab(1);
                        //obj.pressed = true;
                    },
                    scope: this
                }
            }
        });

        this.items.push({
            text: 'Receipts',
            tooltip: 'Receipts',
            scale: 'large',
            listeners: {
                'click': {
                    fn: function(obj) {
                        this.up('tabpanel').setActiveTab(2);
                        //obj.pressed = true;
                    },
                    scope: this
                }
            }
        });

        this.callParent(arguments);
    }

});

