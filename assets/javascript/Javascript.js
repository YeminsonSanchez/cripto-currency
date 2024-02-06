$(document).ready(function () {
    $('#cryptoTable').DataTable({
        // Your DataTables configuration here
    });
});

$.getJSON('URL_OF_YOUR_API', function (data) {
    var table = $('#cryptoTable').DataTable();
    data.forEach(function (item) {
        table.row.add([
            item.name,
            item.symbol,
            item.market_cap,
            item.price,
            item.volume_24h,
            item.circulating_supply,
            item.change_24h
        ]).draw(false);
    });
});
