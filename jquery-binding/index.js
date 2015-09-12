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

        function removeArtist() {
            // Remove selected row
            var row  = $(this).parents()[1];
            $(row).remove();

            // Set index
            setIndex();
        }

        function insertRow(artist) {
            // Create new elements
            var row = document.createElement('tr'),
                indexColumn = document.createElement('td'),
                artistColumn = document.createElement('td'),
                instrumentColumn = document.createElement('td'),
                buttonColumn = document.createElement('td'),
                removeButton = document.createElement('button'),
                removeIcon = document.createElement('span');

            // Set data
            artistColumn.innerHTML = artist.name;
            instrumentColumn.innerHTML = artist.instrument;

            // Create remove button
            $(removeIcon).addClass('glyphicon glyphicon-remove');
            $(removeButton).addClass('btn btn-danger btn-remove');
            $(removeButton).attr('type', 'button');
            removeButton.addEventListener('click', removeArtist);
            removeButton.appendChild(removeIcon);
            buttonColumn.appendChild(removeButton);

            // Append children
            row.appendChild(indexColumn);
            row.appendChild(artistColumn);
            row.appendChild(instrumentColumn);
            row.appendChild(buttonColumn);
            $('#list-artist').append(row);

            // Set index
            setIndex();
        }

        $('#btn-insert').click(function() {
            // Create an artist
            var artist = {
                'name' : $('#artist-name').val(),
                'instrument' : $('#artist-instrument').val()
            };

            // Insert into list
            insertRow(artist);

            // Clear data in form
            $('#artist-name').val('');
            $('#artist-instrument').val('');
        });

        // Initial
        var artists = [
            { 'name': 'Louis Armstrong', 'instrument': 'Trumpet' },
            { 'name': 'Kenny G', 'instrument': 'Saxophone' },
            { 'name': 'Lucia Micarelli', 'instrument': 'Violin' }
        ];

        artists.forEach(function(artist) {
            insertRow(artist);
        });
    });
})();