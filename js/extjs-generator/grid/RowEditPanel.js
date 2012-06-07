Ext.define('ExtG.grid.RowEditPanel', {
    extend: 'ExtG.grid.PaginatorPanel',
    alias: 'widget.ExtG-grid-RowEditPanel',
    split: true,
    selType: 'rowmodel',

    // confirm destroy window
    showConfirmDestroy: true,
    confirmDestroyTitle: 'Confirm',
    confirmDestroyText: 'You are sure?',

    initComponent: function() {
        var me = this;

        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing');

        this.plugins = [
            rowEditing
        ];

        me.tbar = [
            {
                text: '✓ Add',
                role: 'create',
                listeners: {
                    click: function(obj){
                        var modelName = me.store.storeId;
                        var model = new App.model[modelName];
                        me.store.insert(0, model);
                        rowEditing.startEdit(0, 0);
                    }
                }
            }, '-', {
                text: '✕ Delete',
                role: 'remove',
                disabled: false,
                listeners: {
                    click: function(obj) {
                        var selection = me.getView().getSelectionModel().getSelection()[0];
                        if (selection) {
                            if (me.showConfirmDestroy) {
                                Ext.Msg.confirm(me.confirmDestroyTitle, me.confirmDestroyText, function(btn){
                                    if ('yes' == btn) {
                                        me.store.remove(selection);
                                    }
                                })
                            } else {
                                me.store.remove(selection);
                            }
                        } else {
                            Ext.Msg.alert('Warning', 'Pleace, select some item to delete.');
                        }
                    }
                }
            }
        ];

        this.callParent(arguments);

    }

});

