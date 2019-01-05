
Ext.define('finSTAT.view.settings.Settings', {
    extend: 'Ext.panel.Panel',

    requires: [
        'finSTAT.view.settings.SettingsController',
        'finSTAT.view.settings.SettingsModel'
    ],
    alias: 'widget.settings-settings',
    controller: 'settings-settings',
    viewModel: {
        type: 'settings-settings'
    },
    html: 'Settings App'
});
