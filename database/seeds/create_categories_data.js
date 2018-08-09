exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('categories').del()
        .then(function () {
            // Inserts seed entries
            return knex('categories').insert([
                {
                    name     : 'Liên Minh Huyền Thoại',
                    thumbnail: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/de/LoL_icon.jpg/revision/latest/scale-to-width-down/480?cb=20161009124830&path-prefix=vi"
                },
                {
                    
                    name     : 'Vaingory',
                    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Vainglory_app_icon_%28rounded_edges%29.png"
                },
                {
                    name     : 'Dota 2',
                    thumbnail: "https://seeklogo.com/images/D/dota-2-logo-7804D430C9-seeklogo.com.png"
                }
            ]);
        });
};
