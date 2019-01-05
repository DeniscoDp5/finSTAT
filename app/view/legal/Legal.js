
Ext.define('finSTAT.view.legal.Legal',{
    extend: 'Ext.panel.Panel',

    requires: [
        'finSTAT.view.legal.LegalController',
        'finSTAT.view.legal.LegalModel'
    ],
    alias: 'widget.legal-legal',
    controller: 'legal-legal',
    viewModel: {
        type: 'legal-legal'
    },

    html: 'Legal Information'
});
