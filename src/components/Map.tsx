import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.3522, 48.8566], // Paris coords
      zoom: 12,
    });

    map.current.on('styleimagemissing', (e) => {
      if (e.id === 'rectangle-yellow-5') {
        map.current!.loadImage(
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Yellow_rectangle.svg/1200px-Yellow_rectangle.svg.png',
          (error, image) => {
            if (error) throw error;
            if (!map.current!.hasImage('rectangle-yellow-5')) {
              map.current!.addImage('rectangle-yellow-5', image!);
            }
          }
        );
      }
    });
  }, []);

  return <div ref={mapContainer} className="w-full h-[500px] rounded-xl shadow-md" />;
};

export default Map;
