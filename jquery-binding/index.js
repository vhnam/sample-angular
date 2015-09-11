(function() {
    'use strict';

    $(document).ready(function() {
        function setIndex() {
            var list = $('#list-artist'),
                length = list[0].childNodes.length - 1,
                artists = list[0].childNodes;

            for (var index = 0; index < length; index++) {
                artists[index + 1].childNodes[0].innerHTML = index + 1;
            }
        }

        $('#btn-insert').click(function() {
            // Get data
            var name = $('#artist-name').val(),
                instrument = $('#artist-instrument').val();

            // Create new elements
            var row = document.createElement('tr'),
                indexColumn = document.createElement('td'),
                artistColumn = document.createElement('td'),
                instrumentColumn = document.createElement('td');

            // Set data
            artistColumn.innerHTML = name;
            instrumentColumn.innerHTML = instrument;

            // Append children
            row.appendChild(indexColumn);
            row.appendChild(artistColumn);
            row.appendChild(instrumentColumn);
            $('#list-artist').append(row);

            // Set index
            setIndex();

            // Clear data in form
            $('#artist-name').val('');
            $('#artist-instrument').val('');
        });
    });
})();