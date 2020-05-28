import React from "react";
import "./style.css";

const names = [
  "https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDExMX0&auto=format&fit=crop&w=1349&q=80",
  "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80",
  "https://images.unsplash.com/photo-1466853817435-05b43fe45b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1289&q=80",
  "https://images.wallpaperscraft.com/image/night_city_buildings_architecture_170738_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/night_city_buildings_architecture_170412_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/ladder_purple_light_118353_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/ladder_arrows_neon_139370_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/trolley_stop_city_evening_lighting_119292_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/hong_kong_china_skyscrapers_night_city_city_lights_119347_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/hong_kong_lantau_island_cable_car_cabin_109604_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/hong_kong_building_top_view_sky_110104_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/night_city_skyscrapers_city_lights_124277_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/night_city_city_lights_metropolis_127751_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/bridge_night_fog_123534_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/street_neon_night_city_139596_2560x1080.jpg",
  "https://images.wallpaperscraft.com/image/railway_train_station_134586_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/night_city_signs_neon_139551_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/tokyo_night_city_skyscrapers_121628_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/coastal_city_coast_sea_125251_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/night_city_aerial_view_city_lights_129810_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/japan_shirakawa_houses_mountains_trees_112963_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/street_city_tram_147646_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/skyscrapers_night_city_city_lights_133388_2560x1080.jpg",
  "https://images.wallpaperscraft.com/image/moscow_city_landscape_sports_kremlin_bridge_river_58946_3840x2400.jpg",
  "https://images.wallpaperscraft.com/image/city_resort_architecture_135608_2560x1080.jpg",
  'https://images.wallpaperscraft.com/image/street_puddle_neon_145261_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_night_neon_142112_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_neon_rain_144838_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_city_night_142165_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_neon_lights_142512_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_night_city_buildings_140672_3840x2400.jpg',
  'https://images.wallpaperscraft.com/image/street_road_neon_160679_3840x2400.jpg',
  
];

function Donus() {
  return (
    <div id="wallBox">
      {names.map((name) => (
        <div id="picBox">
          <a href={name}>
            <img src={name} alt="donus" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Donus;
