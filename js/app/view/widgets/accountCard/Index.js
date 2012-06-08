Ext.define('App.view.widgets.accountCard.Index', {
    extend: 'Ext.form.Panel',
    alias: 'widget.widgets-accountCard-Index',
    id: 'widgets-accountCard-Index',

    bodyPadding: 0,
    defaults: {
        border: 0
    },

    initComponent: function() {

        this.items = [
            {
                layout: {
                    type: 'hbox',
                    flex: 1,
                    pack: 'start',
                    shrinkToFit : false
                },
                floatable: true,
                defaults: {
                    margin: '10 0 5 10'
                },
                items: [
                    {
                        flex: 1,
                        xtype: 'container',
                        items: {
                            xtype: 'label',
                            html: '<span style="font-size:17px">ID:</span> <b style="font-size:17px">12345</b><br><span style="font-size:17px">Account:</span> <b style="font-size:22px">Anton Fisher</b>'
                        }
                    },{
                        xtype: 'textfield',
                        emptyText: 'ID or name',
                        margin: '15 3 0 0'
                    },{
                        xtype: 'button',
                        text: 'Search',
                        font:{size: 19},
                        margin: '15 3 0 0'
                    }
                ]
            },{
                title: '',
                headerPosition: 'bottom',
                collapseDirection: 'top',
                floatable: true,
                margin: '6',
                layout: {
                    type: 'hbox',
                    flex: 1,
                    pack: 'start',
                    shrinkToFit : false
                },
                defaults: {
                    margin: 2,
                    padding: 4,
                    minHeight: '135',
                    flex: 10
                },
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Address',
                        defaults: {
                            xtype: 'combobox',
                            store: [[],[],[]]
                        },
                        items: [
                            {
                                fieldLabel: 'City',
                                store: [[1, 'Krasnodar'],[2, 'Moscow']],
                                value: 1
                            },{
                                fieldLabel: 'Street',
                                store: [[1, 'Krasnaya st.'],[2, 'Lenina st.']],
                                value: 1
                            },{
                                fieldLabel: 'House number',
                                store: [[1, '1'],[2, '2']],
                                value: 1
                            },{
                                fieldLabel: 'Flat number',
                                store: [[1, '10'],[2, '11']],
                                value: 2
                            }
                        ]
                    },{
                        xtype: 'fieldset',
                        title: 'House / Flat params',
                        defaults: {
                            xtype: 'numberfield',
                            minValue: 0,
                            decimalPrecision: 2,
                            step: 0.1,
                            labelWidth: 120
                        },
                        items: [
                            {
                                fieldLabel: 'Count rooms',
                                step: 1,
                                value: 2
                            },{
                                fieldLabel: 'Total square (m&sup2;)',
                                value: '40.15'
                            },{
                                fieldLabel: 'Living square (m&sup2;)',
                                value: '25.25'
                            },{
                                fieldLabel: 'Heated square (m&sup2;)',
                                value: '40.15'
                            }
                        ]
                    },{
                        xtype: 'fieldset',
                        title: 'Other params',
                        defaults: {
                            xtype: 'checkbox',
                            margin: '2 0 2 3'
                        },
                        items: [
                            {
                                boxLabel: 'Enable account',
                                checked: true
                            },{
                                boxLabel: 'Print receipt',
                                checked: true
                            },{
                                boxLabel: 'Verified account'
                            },{
                                boxLabel: 'VIP account'
                            },{
                                boxLabel: 'Account is dangerous'
                            }
                        ]
                    },{
                        xtype: 'fieldset',
                        title: 'Operations',
                        defaults: {
                            xtype: 'button',
                            margin: '2 0 2 3'
                        },
                        items: [
                            {
                                text: 'Print receipt',
                                handler: function(obj) {
                                    Ext.Msg.progress('Waiting..', 'Printing..', '0%');
                                }
                            }
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }

});

