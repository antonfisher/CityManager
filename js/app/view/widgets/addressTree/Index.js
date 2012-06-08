Ext.define('App.view.widgets.addressTree.Index', {
    extend: 'Ext.form.Panel',
    alias: 'widget.widgets-addressTree-Index',
    id: 'widgets-addressTree-Index',

    bodyPadding: 0,
    defaults: {
        border: 0
    },

    title: 'Address tree',
    layout: 'border',

    initComponent: function() {
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Krasnodar',
                        children: [
                            {
                                text: 'Krasnaya',
                                children: [
                                    {text: '1', leaf: true},
                                    {text: '2', leaf: true}
                                ]
                            },
                            {
                                text: 'Lenina',
                                children: [
                                    {text: '1', leaf: true},
                                    {text: '2', leaf: true},
                                    {text: '3', leaf: true}
                                ]
                            }
                        ]
                    },{
                        text: 'Moscow',
                        children: [
                            {
                                text: 'Krasnaya',
                                children: [
                                    {text: '1', leaf: true},
                                    {text: '2', leaf: true}
                                ]
                            },{
                                text: 'Lenina',
                                children: [
                                    {text: '1', leaf: true},
                                    {text: '2', leaf: true},
                                    {text: '3', leaf: true}
                                ]
                            },{
                                text: 'Krivaiya',
                                children: [
                                    {text: '1', leaf: true},
                                    {text: '2', leaf: true}
                                ]
                            }
                        ]
                    },
                ]
            }
        });

        this.items = [
            {
                region: 'center',
                xtype: 'treepanel',
                rootVisible: false,
                store: store,
                tbar:[
                    {
                        xtype: 'textfield',
                        emptyText: 'City, Street, Number'
                    },{
                        xtype: 'button',
                        text: 'Filter'
                    }
                ]
            },{
                region: 'east',
                xtype: 'container',
                width: '300',
                padding: 10,
                border: 1,
                html: 'Information:'
            }
        ];

        this.callParent(arguments);
    }

});

