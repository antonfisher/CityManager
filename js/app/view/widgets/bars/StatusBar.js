Ext.define('App.view.widgets.bars.StatusBar', {
    extend: 'Ext.ux.statusbar.StatusBar',
    alias: 'widget.widgets-bars-StatusBar',

    statusAlign: 'left',

    defaultText: 'Application ready',
    busyText: 'Loading...',

    initComponent: function() {
        this.callParent(arguments);
    }

});

