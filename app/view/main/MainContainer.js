
Ext.define('finSTAT.view.main.MainContainer', {
    extend: 'Ext.panel.Panel',

    requires: [
        'finSTAT.view.main.MainContainerController',
        'finSTAT.view.main.MainContainerModel'
    ],
    alias: 'widget.main-maincontainer',
    controller: 'main-maincontainer',
    viewModel: {
        type: 'main-maincontainer'
    }
});
