import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  loc: string;
  seoTags: any = [
    {
      wt:{
        home:{
          en: {
            "desc": {
              "name":"description",
              "content":"Play the Lottery Online - We bring the world's leading Lotteries Online. PowerBall, Euromillions, Megamillions and many others. Let us do all the work, all you have to do is play and we send you your winnings!",
            },
            "title": "Play the Lottery Online"
          },
          es:{
            "desc": {
              "name":"description",
              "content":"Juegue a la Lotería Online - Le traemos las principales loterías, online. Powerball, Euromillones, Megamillones y muchas más. Permítanos hacer todo el trabajo por usted, lo único que tiene que hacer es jugar!",
            },
            "title": "Jugar a la lotería online"
          }
          
        },
        lotteries:{
          en: {
            "desc": {
              "name":"description",
              "content":"Play online lotteries from all over the world. Offers the world's richest official online lotteries, lottery results and highest jackpots."
            },
            "title": "Play Lottery Online"
          },
          es: {
            "desc": {
              "name":"description",
              "content":"Juegue online a juegos de lotería de todo el mundo. Trillonario le ofrece las loterías oficiales más grandes del mundo, resultados de lotería e increíbles premios."
            },
            "title": "Juegue a la Lotería Online | Trillonario.com"
          }
         
        },
        sindicates:{
          en: {
            "desc":{
              "name":"description",
              "content":"World's richest lottery syndicates. Play Lottery Syndicates online and increase your chances of winning the lottery. Check lottery results here."
            },
            "title": "Lottery Syndicates | Play Syndicates Online"
          },
          es: {
            "desc":{
              "name":"description",
              "content":"Grupos de Juego con las loterías más grandes del mundo. Juegue en Grupos de Juego online e incremente sus chances de ganar la lotería. Vea los resultados aquí en Trillonario."
            },
            "title": "Grupos de Juego | Juegue Online en Grupos de Juego | Trillonario.com"
          }
        },
        games:{
          en: {
            "desc":{
              "name":"description",
              "content":"Play Lottery Casino Games online."
            },
            "title": "Games"
          },
          es: {
            "desc":{
              "name":"description",
              "content":"Jugar Juegos de Casino online."
            },
            "title": "Juegos | Trillonario.com"
          }
        }
    
      },
      ltk:{
        home:{
          en: {
            "desc":{
              "name":"description",
              "content":"Play any lottery Online and check all your lottery results with your online lottery agent - LottoKings"
            },
            "title":""
          }
          
        }
      }
    }
  ]

  constructor(public location: Location, public router: Router, private meta: Meta, private title: Title) { 
    this.loc = this.location.path();
  }

  getLocationPath(){
    return this.loc; 
  };

  getIsLocationHome() {
    if(this.loc === '/home' || this.loc === ''){
      return true;
    }else {
      return false;
    }
  }

  getRoute(){
    return location;
  }

  getMeta(site:string, lang: string){
    for (let item of this.seoTags){
      let setMetaTag:any = item[site].home[lang].desc,
      setTitleTag: any = item[site].home[lang].title;
      switch (this.loc){
        case ('/home'):
          this.title.setTitle(setTitleTag); 
          this.meta.updateTag(setMetaTag); 
          break;
      }
    } 
  }

}
