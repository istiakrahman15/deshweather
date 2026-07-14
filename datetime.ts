import { useCallback, useState } from "react";
import { DEFAULT_LOCATION } from "@/constants/districts";
import type { GeoCoordinates } from "@/types";

interface GeolocationState {
  coordinates: GeoCoordinates;
  isCurrentLocation: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    coordinates: {
      latitude: DEFAULT_LOCATION.latitude,
      longitude: DEFAULT_LOCATION.longitude,
    },
    isCurrentLocation: false,
    isLoading: false,
    error: null,
  });

  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setState((prev) => ({ ...prev, error: "Geolocation is not supported on this device." }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          coordinates: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          isCurrentLocation: true,
          isLoading: false,
          error: null,
        });
      },
      () => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Location access denied. Showing Dhaka instead.",
        }));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 5 * 60 * 1000 },
    );
  }, []);

  const setManualLocation = useCallback((coordinates: GeoCoordinates) => {
    setState({
      coordinates,
      isCurrentLocation: false,
      isLoading: false,
      error: null,
    });
  }, []);

  return { ...state, requestLocation, setManualLocation };
}
