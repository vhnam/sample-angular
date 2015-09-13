(function() {
    'use strict';

    $(document).ready(function() {

        function insertRow(artist) {
            // Create new elements
            var row = document.createElement('tr'),
                indexColumn = document.createElement('td'),
                artistColumn = document.createElement('td'),
                instrumentColumn = document.createElement('td');

            // Set data
            artistColumn.innerHTML = artist.name;
            instrumentColumn.innerHTML = artist.instrument;

            // Append children
            row.appendChild(indexColumn);
            row.appendChild(artistColumn);
            row.appendChild(instrumentColumn);
            $('#list-artist').append(row);

            // Set index
            setIndex();
        }

        function setIndex() {
            var list = $('#list-artist'),
                length = list[0].childNodes.length - 1,
                artists = list[0].childNodes;

            for (var index = 0; index < length; index++) {
                artists[index + 1].childNodes[0].innerHTML = index + 1;
            }
        }

        // Initial
        var artists = [
            { 'name': 'Louis Armstrong', 'instrument': 'Trumpet' },
            { 'name': 'Kenny G', 'instrument': 'Saxophone' },
            { 'name': 'Lucia Micarelli', 'instrument': 'Violin' },
            { 'name': 'Richard Clayderman', 'instrument': 'Piano' },
            { 'name': 'Harry James', 'instrument': 'Trumpet' },
            { 'name': 'Benny Goodman', 'instrument': 'Clarinet' },
            { 'name': 'Buddy Rich', 'instrument': 'Drum' },
            { 'name': 'Stevie Wonder', 'instrument': 'Harmonica' },
            { 'name': 'Wycliffe Gordon', 'instrument': 'Trombone' },
            { 'name': 'Yo-Yo Ma', 'instrument': 'Cello' },
            { 'name': 'Chris Botti', 'instrument': 'Trumpet' },
            { 'name': 'Artie Shaw', 'instrument': 'Clarinet' },
            { 'name': 'Fionnuala Sherry', 'instrument': 'Violin' },
            { 'name': 'Alison Balsom', 'instrument': 'Trumpet' },
            { 'name': 'Gene Krupa', 'instrument': 'Drum' },
            { 'name': 'Benny Golson', 'instrument': 'Saxophone' },
            { 'name': 'Sonny Boy Williamson', 'instrument': 'Harmonica' },
            { 'name': 'John Coltrane', 'instrument': 'Saxophone' },
            { 'name': 'Rolf Løvland', 'instrument': 'Piano' }
        ];

        artists.forEach(function(artist) {
            insertRow(artist);
        });

        // Listen input change data of User name
        $('#user-name').on('input change', function(e) {    // use 'input change' instead of 'keypress' for prevent delay
            var input = $('#user-name').val(),
                output = '';

            if (input !== undefined && input !== '') {
                output = 'Hello, ' + input;
            }

            $('#greeting').text(output);
        });

        // Listen input change data of Instrument input
        $('#instrument').on('input change', function(e) {    // use 'input change' instead of 'keypress' for prevent delay
            var keyword = $('#instrument').val().toLowerCase();

            $('#list-artist').empty();

            artists.forEach(function(artist) {
                if ((artist.instrument.toLowerCase()).indexOf(keyword) > -1) {
                    insertRow(artist);
                }
            });
        });
    });
})();