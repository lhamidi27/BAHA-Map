mapboxgl.accessToken = 'pk.eyJ1IjoibGhhbWlkaSIsImEiOiJjbHNsMHRtNTIwNmluMmpuMGcwYzBxbzFhIn0.FwPiicFAWPPYHUDC1-W_6w';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/lhamidi/cmh9r33dq00qm01sre58d36ru', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });