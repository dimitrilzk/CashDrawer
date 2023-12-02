class CashTable {
    constructor(anno) {
        this.Anno = anno;
        this.Stipendio = 0;
        // ... altre proprietà ...
        this.Rimanenza = 0;
    }
    // ... altre definizioni o metodi se necessario ...
}

$(function () {
    // Dati di esempio per la tabella
    var cashTable = new CashTable("2023"); // Utilizza il tuo oggetto CashTable con dati reali

    // Creazione della tabella
    var tabella = $('<table>').addClass('table'); // Aggiungi classi CSS se necessario
    var thead = $('<thead>');
    var tbody = $('<tbody>');

    // Intestazione della tabella
    var intestazione = $('<tr>');
    intestazione.append($('<th>').text('Campo'));
    intestazione.append($('<th>').text('Valore'));
    thead.append(intestazione);
    tabella.append(thead);

    // Aggiungi le righe della tabella basate sui dati della tua classe CashTable
    Object.entries(cashTable).forEach(function ([campo, valore]) {
        var tr = $('<tr>');
        tr.append($('<td>').text(campo));
        tr.append($('<td>').text(valore));
        tbody.append(tr);
    });

    // Aggiungi il corpo della tabella al suo interno
    tabella.append(tbody);

    // Aggiungi la tabella al contenitore desiderato
    $('#tabella-container').append(tabella);
});