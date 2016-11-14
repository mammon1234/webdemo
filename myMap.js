var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AtzhLS1Zy7h39DFuvbNJWCFq0j7GtzW2uQvuIdzwGWk0sBpXu95RQs8Rx2pMAHdX'
    });
    add_pokemon_layer();
}
//1 define pokemon data format,create mock pokemon data

map_items = [
    {
      "pokemon_id" : 12,
      "expire" : 1476589403,
      "longitude" : -74.434976,
      "latitude" : 40.5260308,
    }
]
// 2. Create pokemon image on map
function get_pokemon_layer_from_map_items(map_items) {
    var layer = new Microsoft.Maps.Layer();
    var pushpins = []
    //produce random pushpin
    //var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
    for (var i in map_items) {
      var map_item = map_items[i];
      var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                               { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png'});
      pushpins.push(pushpin)
    }
    layer.add(pushpins);
    return layer;
}
function add_pokemon_layer() {
    var pokemon_layer = get_pokemon_layer_from_map_items(map_items)
    map.layers.insert(pokemon_layer);
}
// 3. Add pokemon counter down refresh.

// 4. Connect with REST API
