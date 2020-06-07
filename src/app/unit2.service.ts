import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Unit2Service {

  unit2compositions = [
    {
      id: 1,
      title: 'tinsheds_31-10-1978',
      source:
      'http://astext.net/audio/tinsheds_31-10-1978.mp3',
      caption: 'Stephen Hill - vocals, Anthony Sallis - guitar, Bob Filth & Jim Flowers (Urban Guerillas) random drums and bass. Live performance at the Tin Sheds annex, Sydney University, 31 October 1978. Our first unofficial SPK gig. Recorded by Sally Robinson.',
      key: 'punk',
      year: '1978',
      show: true, 
    },
    {
      id: 2,
      title: 'No More trio',
      source: 'http://astext.net/audio/no_more_trio.mp3',
      caption: 'Stephen and I rehearsing with Voigt/465 drummer Mark Boswell in a Darlinghurst garage studio, early 1979. You can hear Stephen building up his OTT performance on this one. We were developing an extended \'loony\' opening with the \'chop chop chop\' that never quite made it to the SPK single version. This take is very clear and highlights my shortcomings on guitar. Recorded on a Nakamichi 500. Language warning!',
      key: 'punk',
      year: '1978',
      show: true 
    },
    {
      id: 3,
      title: 'Shortfuse',
      source: 'http://astext.net/audio/shortfuse-hill-sallis-1978.mp3',
      caption: 'Another great song in our first set, in rehearsal with drummer Mark Boswell in a Darlinghurst garage, early 1979. Nakamich 500 recording.',
      key: 'punk',
      year: '1978',
      show: true 
    },
    {
      id: 4,
      title: 'No More - the single',
      source: 'http://astext.net/audio/SPK-NoMore-single-1979.mp3',
      caption: 'First SPK single, SPK 1, 2mins, Side Effects Records, 1979, Hill (as Ne/H/il)/Sallis (as Vostra)/Rumour. Despite the butchering of the song due to studio jitters, and the neurotic brevity, I do love Graeme\'s AKS synthi and Danny\'s great guitar on this. Language warning!',
      key: 'punk',
      year: '1978-9',
      show: true 
    },
    {
      id: 5,
      title: 'No More live',
      source: 'http://astext.net/audio/SPK_NoMore-liveGaribaldis-April1979.mp3',
      caption: 'Rehearsing for the first official SPK gig at Garibaldis Restaurant, Riley St, in April 1979. Ne/H/il vocals, CR-78 rhythm machine, Danny Rumour guitar, Vostra bass, Graeme Revell AKS suitcase synth. Recorded on Sally\'s Nakamichi 500 at Mansion House, Liverpool St.',
      key: 'punk',
      year: '1979',
      show: true 
    },
    {
      id: 6,
      title: 'Panik',
      source: 'http://astext.net/audio/SPK_Panic_1979-2.mp3',
      caption: 'Cover version of Metal Urbain\'s Panik. Ne/H/il vocals and CR-78 rhythm machine, Danny Rumour guitar, Vostra bass, Graeme Revell translation and AKS synth. Recorded at Mansion House, Liverpool St, while rehearsing for the Garibaldis set in April 1979',
      key: 'punk',
      year: '1979',
      show: true 
    }
  ];



 // get unit2compositions
 public getUnit2compositions(): Array<{
  id: number;
  title: any;
  source: any ;
  caption: any ;
  key: any ;
  year: any ;
  show: boolean
}> {
  return this.unit2compositions;
}




  constructor() { }
}
