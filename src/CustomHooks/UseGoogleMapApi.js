import { useEffect, useState, useCallback } from "react";
import loadScript from "load-script";
// import each from 'lodash/each'
var googleMapsApi;
var loading = false;
var callbacks = [];

const useGoogleMapsApi = () => {
  const [api, setApi] = useState();

  const callback = useCallback(() => {
    setApi(window.google.maps);
  }, []);

  useEffect(() => {
    if (loading) {
      callbacks.push(callback);
    } else {
      if (!googleMapsApi) {
        loading = true;
        loadScript(
          //   `https://maps.googleapis.com/maps/api/js?key=AIzaSyCSrbTKBMIAHKMRrFIE8_8p61rJe95DuCY&libraries=places`, //mechanic
          // `https://maps.googleapis.com/maps/api/js?key=AIzaSyBgyxrBsv1usXTpA3KAJsb0FdDjtrUyFzg&libraries=places`,
          { async: true },
          () => {
            loading = false;
            googleMapsApi = window.google.maps;
            setApi(window.google.maps);
            // each(callbacks, init => init())
            callbacks = [];
          }
        );
      }
    }
  }, []);

  return googleMapsApi;
};

export default useGoogleMapsApi;
