// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'How should we sign the package?' to shipping address form
ec.order.extraFields.wrapping_box_signature = {
    'title': 'Weitergabe der E-Mail-Adresse an Versanddienstleister',
    'type': 'checkbox',
    'options': [{'title':'Ich willige ein, dass meine E-Mail-Adresse im Rahmen der Vertragsabwicklung an den Versanddienstleister weitergegeben wird, um über den Status der Lieferung informiert zu werden. Dieser Verwendung der E-Mail-Adresse kann jederzeit durch eine Mitteilung an uns widersprochen werden. Die Kontaktdaten für die Ausübung des Widerspruchs finden Sie im Impressum.'}],
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

Ecwid.refreshConfig && Ecwid.refreshConfig();
