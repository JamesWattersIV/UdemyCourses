export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  setMarkerContent(): string;
  colour: string;
}

export class Map {
  private googleMap: google.maps.Map;

  private mapOptions = {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0,
    },
  };

  constructor(htmlID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlID),
      this.mapOptions
    );
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.setMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
