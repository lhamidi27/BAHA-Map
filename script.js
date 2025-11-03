  mapboxgl.accessToken = 'pk.eyJ1IjoibGhhbWlkaSIsImEiOiJjbHNsMHRtNTIwNmluMmpuMGcwYzBxbzFhIn0.FwPiicFAWPPYHUDC1-W_6w';
const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/lhamidi/cmh9r33dq00qm01sre58d36ru',
        center: [-122.262, 37.875], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        //37.874948, -122.262142
        zoom: 15 // starting zoom
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/lhamidi27/BAHA-Map/refs/heads/main/data/foundational_lab8.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#6A0087',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    // Add click event for popups
    map.on('click', 'points-layer', (e) => {
      // Copy coordinates array
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;

      // Create popup content using the actual data properties
      const popupContent = `
          <div>
              <h3>${properties.Landmark}</h3>
              <p><strong>Address:</strong> ${properties.Address}</p>
              <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
              <p><strong>Designated:</strong> ${properties.Designated}</p>
              ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
              ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
          </div>
      `;

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(popupContent)
          .addTo(map);
  });

});
