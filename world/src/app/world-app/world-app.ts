import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-world-app',
  imports: [],
  templateUrl: './world-app.html',
  styleUrl: './world-app.css'
})

export class WorldApp implements OnInit {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}  

  loadCountryData(svgCountry: SVGPathElement): Observable<any> {
    let api: string = `https://api.worldbank.org/v2/country/${svgCountry.id}?format=json`;
    return this.http.get(api);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

      Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {

        svgCountry.addEventListener('click', () => {
          this.loadCountryData(svgCountry).subscribe(data => {
            let dataPath: any = data[1];

            //API call
            let name: string = dataPath[0].name;
            document.getElementById('name')!.innerText = name;

            let capital: string = dataPath[0].capitalCity;
            document.getElementById('capital')!.innerText = capital;

            let region: string = dataPath[0].region.value;
            document.getElementById('region')!.innerText = region;

            let income: string = dataPath[0].incomeLevel.value;
            document.getElementById('income')!.innerText = income;

            let longitude: string = dataPath[0].longitude;
            document.getElementById('longitude')!.innerText = longitude;

            let latitude: string = dataPath[0].latitude;
            document.getElementById('latitude')!.innerText = latitude;

          });
      });
    });
  }
}

onSave(event: any) {
  console.log(event.target.id);
}

}
