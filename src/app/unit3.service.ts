import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Unit3Service {
  
  unit3compositions = [
    {
      id: 1,
      title: '2006_VST4_anothercrazy-Oct07_015_2018',
      source:
        'http://astext.net/audio/2006_VST4_anothercrazy-Oct07_015_2018.mp3',
      caption:
        'Early days. Composed at 36/117 Victoria St, my apartment between 1993 and 2008. Reworked in 2007, re-rendered in 2018',
      key: 'chromatic',
      year: '2006',
      show: true
    },
    {
      id: 2,
      title: '2006_VST15_FlutishZippedy_12_2018',
      source: 'http://astext.net/audio/2006_VST15_FlutishZippedy_12_2018.mp3',
      caption: 'Composed at 117 Victoria St. Re-rendered in 2018',
      key: 'chromatic',
      year: '2006',
      show: true
    },
    {
      id: 3,
      title: '2006_VST22_ImpressionisticProtoplasm_NEW-2011_22_2018',
      source: 'http://astext.net/audio/18Jan15-wholetone-tryagain-03.mp3',
      caption:
        'Composed at 117 Victoria St. Reworked in 2011 at Gowrie Gate, 406/115 Macleay St, my apartment between 2008 - 2012, re-rendered in 2018',
      key: 'chromatic',
      year: '2006',
      show: true
    },
    {
      id: 4,
      title: '2007_VST35_Drumsynth_29_2018',
      source: 'http://astext.net/audio/2007_VST35_Drumsynth_29_2018.mp3',
      caption:
        'Composed at 36/117 Victoria St. Reworked/re-rendered in 2018',
      key: 'chromatic',
      year: '2007',
      show: true
    },
    {
      id: 5,
      title: '2007_VST50_GTG_Oct_016_2018',
      source: 'http://astext.net/audio/2007_VST50_GTG_Oct_016_2018.mp3',
      caption:
        'Really pleased with this one. Composed at 36/117 Victoria St. Reworked/re-rendered in 2018',
      key: 'chromatic',
      year: '2007',
      show: true
    },
    {
      id: 6,
      title: '2007_VST53_AtlanticSilkwormMeditation_Apr2011_020_2018',
      source: 'http://astext.net/audio/2007_VST53_AtlanticSilkwormMeditation_Apr2011_020_2018.mp3',
      caption:
        'Much reworking, reinstrumenting and re-imagining. Composed at 36/117 Victoria St. Reworked at Gowrie Gate, 406/115 Macleay St in 2011, re-rendered in 2018',
      key: 'chromatic',
      year: '2007',
      show: true
    },
    {
      id: 7,
      title: '2007_VST64_TheCrumarRename_Nov_014VISTA_2018',
      source: 'http://astext.net/audio/2007_VST64_TheCrumarRename_Nov_014VISTA_2018.mp3',
      caption:
        'Composed at 36/117 Victoria St. Re-rendered in 2018. Looks like I did a PC OS upgrade while doing this.',
      key: 'chromatic',
      year: '2007',
      show: true
    },
    {
      id: 8,
      title: '2009_VST93-fr73-055_Sep2012-LATEST_101-PART2-2018',
      source: 'http://astext.net/audio/2009_VST93-fr73-055_Sep2012-LATEST_101-PART2-2018.mp3',
      caption:
        'Number 93, part 2. Composed at Gowrie Gate, 406/115 Macleay St. Originally from a section of piece 55 which became piece 73, a section of which was used to make 93. Uses tape loop devices for variations. Reworked in 2012 at The Chimes, my next apartment down the road at 73/45 Macleay St, re-rendered in 2018. The version number 101 is the headline version.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 9,
      title: '2009_VST93-fr73-055_Sep2012-LATEST_109-PART4_2018',
      source: 'http://astext.net/audio/2009_VST93-fr73-055_Sep2012-LATEST_109-PART4_2018.mp3',
      caption:
        'Number 93, part 4. Composed at Gowrie Gate, 406/115 Macleay St, reworked in 2012 at The Chimes, 73/45 Macleay St. From 55 to 73 to 93 with different instrumentation and arrangement. The version number 109 is incremented from part 2.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 10,
      title: '2009_VST93-fr73-055_Sep2012-newest_114-PART2-B-2018',
      source: 'http://astext.net/audio/2009_VST93-fr73-055_Sep2012-newest_114-PART2-B-2018.mp3',
      caption:
        'Number 93, part 2-B. Composed at Gowrie Gate, Macleay St, reworked in 2012 at The Chimes, 73/45 Macleay St. From 55 to 73 to 93 with different instrumentation and arrangement. The version number 114 is incremented from part 4.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 11,
      title: '2009_VST93-fr73-055_Sep2012-LATEST_128_PART6_2018',
      source: 'http://astext.net/audio/2009_VST93-fr73-055_Sep2012-LATEST_128_PART6_2018.mp3',
      caption:
        'Number 93, part 6. Composed at Gowrie Gate, Macleay St, reworked in 2012 at The Chimes, 73/45 Macleay St. From 55 to 73 to 93 with different instrumentation and arrangement. The version number 128 is incremented from part 2-B.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 12,
      title: '2009_VST94_newSqueek-reallycutdown_Nov2011_033_2018',
      source: 'http://astext.net/audio/2009_VST94_newSqueek-reallycutdown_Nov2011_033_2018.mp3',
      caption:
        'Composed at Gowrie Gate, Macleay St, reworked in 2011 at The Chimes, 73/45 Macleay St. Re-rendered in 2018.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 13,
      title: '2009_VST97_ShortTheme_AugNov_049_2018',
      source: 'http://astext.net/audio/2009_VST97_ShortTheme_AugNov_049_2018.mp3',
      caption:
        'Under developed. Composed at Gowrie Gate, 73/45 Macleay St, re-rendered in 2018.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 14,
      title: '2009_VST109-fr-v47_axons-Apr2011_064_2018',
      source: 'http://astext.net/audio/2009_VST109-fr-v47_axons-Apr2011_064_2018.mp3',
      caption:
        'Number 109 from 47, a moody synth theme. Composed at Gowrie Gate, reworked in 2011 at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2009',
      show: true
    },
    {
      id: 15,
      title: '2010_VST120_Prodigious-NEWCUT-Oct2012_051_2018',
      source: 'http://astext.net/audio/2010_VST120_Prodigious-NEWCUT-Oct2012_051_2018.mp3',
      caption:
        'Led by DSK sax with tape loops. Composed at Gowrie Gate, reworked in 2012 at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2010',
      show: true
    },
    {
      id: 16,
      title: '2011_VST126_Felixplus_Aug2012_022_2018',
      source: 'http://astext.net/audio/2011_VST126_Felixplus_Aug2012_022_2018.mp3',
      caption:
        'Composed at Gowrie Gate, reworked at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2011',
      show: true
    },
    {
      id: 17,
      title: '2011_VST132_SpringSprung_Sep2012_017_2018',
      source: 'http://astext.net/audio/2011_VST132_SpringSprung_Sep2012_017_2018.mp3',
      caption:
        'Composed at Gowrie Gate, reworked at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2011',
      show: true
    },
    {
      id: 18,
      title: '2012_VST146_LoFi-friends-ClavPiano_Jul1-Aug10_025_2018',
      source: 'http://astext.net/audio/2012_VST146_LoFi-friends-ClavPiano_Jul1-Aug10_025_2018.mp3',
      caption:
        'Tantalisingly under developed. Composed at Gowrie Gate, reworked at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2012',
      show: true
    },
    {
      id: 19,
      title: '2012_VST154_mdaSynths_Sep23_038_2018',
      source: 'http://astext.net/audio/2012_VST154_mdaSynths_Sep23_038_2018.mp3',
      caption:
        'Composed at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2012',
      show: true
    },
    {
      id: 20,
      title: '2012_VST157_fr93-73-055-2B_LoopMagic_Sep2012-wildVariant2D_024_2018',
      source: 'http://astext.net/audio/2012_VST157_fr93-73-055-2B_LoopMagic_Sep2012-wildVariant2D_024_2018.mp3',
      caption:
        'Number 157. Surprisingly, a further spawn of the prolific 55-73-93 series, from the 2B branch, a big tape loop treatment of DSK sax and other instruments. Version increment 24 is in itself, since this is a new piece (thus, 157 from 93 from 73 from 55). Composed at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2012',
      show: true
    },
    {
      id: 21,
      title: '2012_VST160_ModMod_Dec2012_005_2018',
      source: 'http://astext.net/audio/2012_VST160_ModMod_Dec2012_005_2018.mp3',
      caption:
        'Among the last pieces in the series, a smart theme and appropriately interesting, considering the very low version number of 5. Composed at The Chimes, re-rendered in 2018.',
      key: 'chromatic',
      year: '2012',
      show: true
    }

  ];

 // get unit2compositions
 public getUnit3compositions(): Array<{
  id: number;
  title: any;
  source: any ;
  caption: any ;
  key: any ;
  year: any ;
  show: boolean
}> {
  return this.unit3compositions;
}






  constructor() { }
}
