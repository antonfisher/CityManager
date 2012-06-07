Ext.define('App.view.widgets.accountTabs.Index', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.widgets-accountTabs-Index',

    initComponent: function() {
        this.defaults = {
            flex: 1,
            layout: 'fit',
            border: 0,
            columnLines: true,
            xtype: 'ExtG-grid-RowEditPanel',
            store: [{}, {}, {}, {}, {}]
        },

        this.items = [
            {
                title: 'Common information',
                columns: [
                    {header: 'Service',       dataIndex: 'service', editor: 'combobox', flex: 1},
                    {header: 'Value',         dataIndex: 'value',   editor: 'numberfield'},
                    {header: 'Debt',          dataIndex: 'debt',    editor: 'numberfield'},
                    {header: 'Total payment', dataIndex: 'total',   editor: 'numberfield'},
                ],
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['service', 'value', 'debt', 'total'],
                    data: [
                        ['Water',              '120',  '50',  '100', '50'],
                        ['Gas',                '10',   '0',   '120', '120'],
                        ['Garbage collection', '-',    '100', '10',  '0'],
                    ]
                })
            },{
                title: 'Payments',
                columns: [
                    {header: 'Service',  dataIndex: 'service',  editor: 'combobox', flex: 1},
                    {header: 'Date',     dataIndex: 'date',     editor: 'datefield'},
                    {header: 'Summ',     dataIndex: 'summ',     editor: 'numberfield'},
                    {header: 'Operator', dataIndex: 'operator', editor: 'textfield'}
                ],
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['service', 'date', 'summ', 'operator'],
                    data: [
                        ['Water', '2012-12-21',  '100',  'A'],
                        ['Gas',   '2012-12-12',  '200',  'B']
                    ]
                })
            },{
                title: 'Devices',
                columns: [
                    {header: 'Name',       dataIndex: 'name',       editor: 'combobox', flex: 1},
                    {header: 'Value',      dataIndex: 'value',      editor: 'numberfield'},
                    {header: 'Value date', dataIndex: 'value_date', editor: 'datefield'}
                ],
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: ['name', 'value', 'value_date'],
                    data: [
                        ['Water 1', '42939', '2012-12-01'],
                        ['Gas 1', '2393',  '2012-12-01']
                    ]
                })
            }
        ];

        this.callParent(arguments);
    }
});

