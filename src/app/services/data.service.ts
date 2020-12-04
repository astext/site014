import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  contacts = [
    {
      id: 1,
      name: "Contact 001",
      description: "Contact 001 des",
      email: "c001@email.com"
    },
    {
      id: 2,
      name: "Contact 002",
      description: "Contact 002 des",
      email: "c002@email.com"
    },
    {
      id: 3,
      name: "Contact 003",
      description: "Contact 003 des",
      email: "c003@email.com"
    },
    {
      id: 4,
      name: "Contact 004",
      description: "Contact 004 des",
      email: "c004@email.com"
    }
  ];

  constructor() {}

  public getContacts(): Array<{
    id: any;
    name: any;
    description: any;
    email: any;
  }> {
    return this.contacts;
  }
  public createContact(contact: {
    id: any;
    name: any;
    description: any;
    email: any;
  }) {
    this.contacts.push(contact);
  }

  // contents
  contents = [
    {
      id: 1,
      link: "/units/unit1",
      title: "Selected pieces",
      info: "Interesting semi-recent work",
      date: "2013-2019",
      using: "Ableton Live, VST plugins (64bit)",
      show: true
    },
    {
      id: 2,
      link: "/units/unit2",
      title: "Ne/H/il + Vostra",
      info: "Rare works by Hill & Sallis from the Sydney punk era",
      date: "1978-9",
      using: "guitar, bass, drums, vocals: recordings, rehearsals & gigs",
      show: true
    },
    {
      id: 3,
      link: "/units/unit3",
      title: "VST Series One",
      info: "First compositions in DAW and software synth tech",
      date: "2006-2012",
      using: "Tunafish DAW, VST plugins (32bit)",
      show: true
    },
    {
      id: 4,
      link: "/units/unit4",
      title: "SoundCloud",
      info: "Compositions on SoundCloud",
      date: "2012-2019",
      using: "Electronica, sample based",
      show: true
    },
    {
      id: 5,
      link: "/units/unit5",
      title: "Previews",
      info: "Advanced releases of unfinished works",
      date: "2020-21",
      using: "Ableton 10, VST3, 64bit",
      show: true
    },
    {
      id: 6,
      link: "/units/unit6",
      title: "Oldest works",
      info: "Archival",
      date: "1978-2005",
      using: "Analog and digital",
      show: true
    },
    {
      id: 7,
      link: "/units/unit7",
      title: "List of all works",
      info: "Everything",
      date: "1978-2020",
      using: "Analog and digital",
      show: true
    },
    {
      id: 8,
      link: "/units/webdev",
      title: "Web development",
      info: "Styles, web development for this site",
      date: "August 2020",
      using: "Angular, SCSS",
      show: true
    }
  ];


  // get contents
  public getContents(): Array<{
    id: number;
    link: any;
    title: any;
    info: any;
    date: any;
    using: any;
    show: boolean;
  }> {
    return this.contents;
  }


}
