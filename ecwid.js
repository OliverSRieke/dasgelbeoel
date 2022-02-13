// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'How should we sign the package?' to shipping address form
ec.order.extraFields.wrapping_box_signature = {
    'title': 'Weitergabe der E-Mail-Adresse an Versanddienstleister',
    'type': 'checkbox',
    'options': [{'title':'genehmigen'}],
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

Ecwid.refreshConfig && Ecwid.refreshConfig();
