Ext.define('ExtX.app.Controller', {
    extend: 'Ext.app.Controller',

    /**
     * Load mask object instance
     *
     * @var Ext.LoadMask
     */
    loadMaskInstance: null,

    /**
     * Show global load mask
     *
     * @param {String} msg message to show
     * @return {null}
     */
    showLoadMask: function (msg) {
        msg = msg || 'Please, wait..';
        if (!this.loadMaskInstance) {
            this.loadMaskInstance = new Ext.LoadMask(Ext.getBody(), {msg: msg});
        }
        this.loadMaskInstance.show();
    },

    /**
     * Hide global load mask
     *
     * @return {null}
     */
    hideLoadMask: function () {
        if ('hide' in this.loadMaskInstance) {
            this.loadMaskInstance.hide();
        }
    }

});

