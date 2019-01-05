/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('finSTAT.Application', {
    extend: 'Ext.app.Application',

    name: 'finSTAT',

    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    defaultToken: 'finSTAT',

    routes: {
        'finSTAT/settings': 'onSettings',
        'finSTAT/legal': 'onLegal'
    },

    onSettings: function () {
        console.log('onSetting');
        this.resetMainView();
        this.getMainView().add({
            xtype: 'settings-settings'
        });
    },

    onLegal: function () {
        console.log('onSetting');
        this.resetMainView();
        this.getMainView().add({
            xtype: 'legal-legal'
        });
    },

    resetMainView: function () {
        var mainView = this.getMainView();
        var items = mainView.items.items;

        for(var i =0; i< items.length; i++) {
            mainView.remove(items[i]);
        }
    }

});
