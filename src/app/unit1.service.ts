import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Unit1Service {

  unit1compositions = [
    {
      id: 1,
      title: '19May13-AMaj-004',
      source: 'http://astext.net/audio/19May13-AMaj-004.mp3',
      caption:
        'Ableton\'s reliability and ease of use led to a complex chord bed with a flip out synth lead. Applied music theory emerging. Composed at The Chimes, 73/45 Macleay St Potts Point.',
      key: 'A major',
      year: '2013',
      show: true
    },
    {
      id: 2,
      title: '19Oct13-Piano-Emin-from07-10',
      source: 'http://astext.net/audio/19Oct13-Piano-Emin-from07-10.mp3',
      caption:
        'A big theme on piano and alto flute, treated with octave shifters, \'chance\' arpeggiators and a C minor harmonic filter applied to the original E minor key. Composed at The Chimes, 73/45 Macleay St Potts Point just before moving to Greenway.',
      key: 'E minor',
      year: '2013',
      show: true
    },
    {
      id: 3,
      title: '16Feb14_DramaPad-2015-03',
      source: 'http://astext.net/audio/16Feb14_DramaPad-2015-03.mp3',
      caption:
        'Early quirky synth n sequencer. One of the first good pieces wholly composed at Greenway, ACT. Reworked in 2015 and still only version 3.',
      key: 'chromatic',
      year: '2014',
      show: true
    },
    {
      id: 4,
      title: '01Aug14-Pathogenic-2015-06',
      source: 'http://astext.net/audio/01Aug14-Pathogenic-2015-06.mp3',
      caption:
        'The mix is rough but the intentions are good.',
      key: 'chromatic',
      year: '2014',
      show: true
    },
    {
      id: 4,
      title: '25Dec14-silkworm-ilo-03',
      source: 'http://astext.net/audio/25Dec14-silkworm-ilo-03.mp3',
      caption: 'Rough and ready toe tapper.',
      key: 'chromatic',
      year: '2014',
      show: true
    },
    {
      id: 5,
      title: '18Jan15-wholetone-tryagain-03',
      source: 'http://astext.net/audio/18Jan15-wholetone-tryagain-03.mp3',
      caption: 'Wholetone scale, experimenting.',
      key: 'wholetone',
      year: '2015',
      show: true
    },
    {
      id: 6,
      title: '07Mar15-ClusterMS20-05',
      source: 'http://astext.net/audio/07Mar15-ClusterMS20-05.mp3',
      caption:
        'Some involved synth themes using the Cluster MS20 sound library.',
      key: 'chromatic',
      year: '2015',
      show: true
    },
    {
      id: 7,
      title: '01Aug15-kick-behr-03.mp3',
      source: 'http://astext.net/audio/01Aug15-kick-behr-03.mp3',
      caption: 'A robust and intriguing drive.',
      key: 'chromatic',
      year: '2015',
      show: true
    },
    {
      id: 8,
      title: '05Sep15-Curetronic-Bmaj-03',
      source: 'http://astext.net/audio/05Sep15-Curetronic-Bmaj-03.mp3',
      caption: 'A sharpish synth beat.',
      key: 'B major',
      year: '2015',
      show: true
    },
    {
      id: 9,
      title: '26Aug15-synth-fun-03',
      source: 'http://astext.net/audio/26Aug15-synth-fun-03.mp3',
      caption: 'Bright uptempo toe tapper.',
      key: 'chromatic',
      year: '2015',
      show: true
    },
    {
      id: 10,
      title: '04Oct15-Eflatmin-Prodmod-03',
      source: 'http://astext.net/audio/04Oct15-Eflatmin-Prodmod-03.mp3',
      caption: 'Synth themes.',
      key: 'E flat minor',
      year: '2015',
      show: true
    },
    {
      id: 11,
      title: '25Feb16-stacked-5-3-4-Bflat-06',
      source: 'http://astext.net/audio/25Feb16-stacked-5-3-4-Bflat-06.mp3',
      caption: 'Some interesting intervals.',
      key: 'B flat major',
      year: '2016',
      show: true
    },
    {
      id: 12,
      title: '04Jun16-Supershapes-Eflat-04',
      source: 'http://astext.net/audio/04Jun16-Supershapes-Eflat-04.mp3',
      caption: 'Colourful synth themes.',
      key: 'E flat major',
      year: '2016',
      show: true
    },
    {
      id: 13,
      title: '30Jul16-VSCO2-Bmaj-05',
      source: 'http://astext.net/audio/30Jul16-VSCO2-Bmaj-05.mp3',
      caption: 'Wintry, orchestral, thoughtful, intense.',
      key: 'B major',
      year: '2016',
      show: true
    },
    {
      id: 14,
      title: '16Aug16-almostsnuffed-Csh-E-Gsh-05',
      source: 'http://astext.net/audio/16Aug16-almostsnuffed-Csh-E-Gsh-05.mp3',
      caption: 'Written after a bad bout of flu.',
      key: 'C sharp major',
      year: '2016',
      show: true
    },
    {
      id: 15,
      title: '03Dec16-Suite-Dflat-06',
      source: 'http://astext.net/audio/03Dec16-Suite-Dflat-06.mp3',
      caption: 'Melodramatic strings and synth prog.',
      key: 'D flat major',
      year: '2016',
      show: true
    },
    {
      id: 16,
      title: '27Dec16-Digistruments-Bflat-06',
      source: 'http://astext.net/audio/27Dec16-Digistruments-Bflat-06.mp3',
      caption: 'Another enjoyable B flat adventure.',
      key: 'B flat major',
      year: '2016',
      show: true
    },
    {
      id: 17,
      title: '14Jan17-OBx-Bflat-05',
      source: 'http://astext.net/audio/14Jan17-OBx-Bflat-fixed-05.mp3',
      caption: 'Synth themes in full flight, very enjoyable.',
      key: 'B flat major',
      year: '2017',
      show: true
    },
    {
      id: 18,
      title: '08Apr17-Study-Aflat-05',
      source: 'http://astext.net/audio/08Apr17-Study-Aflat-05.mp3',
      caption: 'Overwrought strings and piano theme.',
      key: 'A flat major',
      year: '2017',
      show: true
    },
    {
      id: 19,
      title: '22Apr17-KBrown2-Cshmin-04',
      source: 'http://astext.net/audio/22Apr17-KBrown2-Cshmin-04.mp3',
      caption: 'The second piece with Kevin Brown instruments.',
      key: 'C sharp minor',
      year: '2017',
      show: true
    },
    {
      id: 20,
      title: '23Apr17-KBrown3-Eshmin-06.mp3',
      source: 'http://astext.net/audio/23Apr17-KBrown3-Eshmin-06.mp3',
      caption: 'The third piece with Kevin Brown instruments.',
      key: 'E sharp minor',
      year: '2017',
      show: true
    },
    {
      id: 21,
      title: '29Apr17-Gmaj-Fairlight-05',
      source: 'http://astext.net/audio/29Apr17-Gmaj-Fairlight-05.mp3',
      caption: 'Uptempo theme progging.',
      key: 'G major',
      year: '2017',
      show: true
    },
    {
      id: 22,
      title: '21May17-KB4-Bflatminor-05',
      source: 'http://astext.net/audio/21May17-KB4-Bflatminor-05.mp3',
      caption: 'The fourth piece using Kevin Brown instruments.',
      key: 'B flat minor',
      year: '2017',
      show: true
    },
    {
      id: 23,
      title: '10Jun17-song-Cmin-04',
      source: 'http://astext.net/audio/10Jun17-song-Cmin-fixed-04.mp3',
      caption:
        'Some nice themes, reasonable orchestration.',
      key: 'C minor',
      year: '2017',
      show: true
    },
    {
      id: 24,
      title: '23Mar18-Who-knows-branched-06',
      source: 'http://astext.net/audio/23Mar18-Who-knows-branched-06.mp3',
      caption:
        'A moody reflective piece, very unfinished, rough mix, some good themes.',
      key: 'chromatic',
      year: '2018',
      show: true
    },
    {
      id: 25,
      title: '28Mar18-not-yet-settled-EMS-Bmin-05',
      source: 'http://astext.net/audio/28Mar18-not-yet-settled-EMS-Bmin-05.mp3',
      caption: 'More moody March blues.',
      key: 'B minor',
      year: '2018',
      show: true
    }
  ];

  // get unit1compositions
  public getUnit1compositions(): Array<{
    id: number;
    title: any;
    source: any ;
    caption: any ;
    key: any ;
    year: any ;
    show: boolean
  }> {
    return this.unit1compositions;
  }

  constructor() {}
}
