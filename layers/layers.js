var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aranmula_1 = new ol.format.GeoJSON();
var features_aranmula_1 = format_aranmula_1.readFeatures(json_aranmula_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aranmula_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aranmula_1.addFeatures(features_aranmula_1);
var lyr_aranmula_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aranmula_1, 
                style: style_aranmula_1,
                popuplayertitle: 'aranmula',
                interactive: true,
                title: '<img src="styles/legend/aranmula_1.png" /> aranmula'
            });

lyr_OSMStandard_0.setVisible(true);lyr_aranmula_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aranmula_1];
lyr_aranmula_1.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_aranmula_1.set('fieldImages', {'gml_parent': '', 'gml_pare_1': '', 'gml_id': '', 'geom': '', 'District': '', 'LSGD': '', 'Ward_Name': '', 'Ward_No': '', 'Lsgd_Type': '', 'Created_Da': '', 'Surveyor': '', 'Mob_No': '', 'Remarks': '', '_distLsgd': '', 'OBJECTID': '', '_result': '', '_ulid': '', '_distLsgd2': '', });
lyr_aranmula_1.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_aranmula_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});