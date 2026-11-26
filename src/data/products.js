export const productsData = {
  'alluminio': {
    title: 'Serramenti Alluminio',
    category: 'Infissi',
    headline: 'Finestre e porte-finestre in alluminio',
    subtitle: 'Serramenti alluminio; linee eleganti, prestazioni perfette',
    description: [
      "Le serie per finestre C67K, 67K-M e C77K – CS con anta nascosta riassumono i risultati delle ricerche e dell'esperienza del marchio ALUK nel settore dei serramenti alluminio.",
      "Una sintesi di design, tecnologia, qualità componentistiche che rende questo prodotto unico per comfort acustico e termico, con soluzioni avanzate per il benessere della vostra abitazione. Non ultimo pensati per proteggervi da intrusioni indesiderate con sistemi di antieffrazione e antiscasso.",
      "Tutti i prodotti ALUK sono disponibili in una vasta gamma di colori e finiture, certificati e testati secondo le più severe norme e leggi vigenti in Europa."
    ],
    image: '/alluminio-preview.webp',
    sidebar: [
      {
        title: 'Serie per finestre e porte finestre',
        items: ['Aluk C67K', 'Aluk 67K-M', 'Aluk C77K – CS con anta nascosta']
      },
      {
        title: 'Serie per scorrevoli',
        items: []
      },
      {
        title: 'Serie per portoncini e porte',
        items: []
      }
    ],
    profileDetails: {
      'Aluk C67K': {
        brand: 'AluK Group',
        name: 'Serie C67K / 67IW',
        description:
          'Sistema a battente in alluminio a taglio termico con guarnizione centrale di giunto aperto e barrette alveolari da 28,5 mm. Linea tradizionale complanare all’esterno e a sormonto interno, disponibile anche con sagomatura stondata.',
        note: 'Lega EN AW-6060 con marcatura CE secondo UNI EN 14351-1.',
        specs: [
          { label: 'Profondità Profili', value: 'Telaio 66,5 mm · Anta 76,5 mm' },
          { label: 'Taglio Termico & Vetro', value: 'Barrette alveolari 28,5 mm · Vetri da 22 a 50 mm' },
          { label: 'Sicurezza & Tenuta', value: 'Guarnizione centrale giunto aperto · EPDM' }
        ]
      },
      'Aluk 67K-M': {
        brand: 'AluK Group',
        name: 'Serie 67K-M (Maggiorata)',
        description:
          'Versione maggiorata della serie 67IW progettata per porte-finestre e grandi specchiature, con tubolarità esterna aumentata per un’elevata robustezza strutturale e predisposizione per serratura e doppia maniglia.',
        note: 'Ideale per porte-finestre ad alta frequenza d’uso e vetrine commerciali.',
        specs: [
          { label: 'Profondità Profili', value: 'Telaio 66,5 mm · Anta 76,5 mm (profilo maggiorato)' },
          { label: 'Vetrature', value: 'Vetri o pannelli da 22 a 50 mm ad alta sicurezza' },
          { label: 'Dotazione', value: 'Alloggiamento serratura con doppia maniglia' }
        ]
      },
      'Aluk C77K – CS con anta nascosta': {
        brand: 'AluK Group',
        name: 'Serie C77K / 77IW',
        description:
          'Massima espressione tra le serie a battente AluK per isolamento termico e statica. Il taglio termico con barrette alveolari e listelli isolanti riduce al minimo le dispersioni, garantendo prestazioni elevate anche su serramenti di grandi dimensioni.',
        note: 'Disponibile anche con estetica minimale ad anta nascosta.',
        specs: [
          { label: 'Profondità Profili', value: 'Telaio 77 mm · Anta 87 mm' },
          { label: 'Taglio Termico', value: 'Barrette alveolari con listelli isolanti aggiuntivi' },
          { label: 'Vetrature', value: 'Spessore vetri da 32 a 50 mm in camera singola o triplo vetro' }
        ]
      }
    }
  },
  'alluminio-e-legno': {
    title: 'Alluminio e legno',
    category: 'Infissi',
    headline: 'Finestre e porte-finestre in alluminio e legno',
    subtitle: 'Linee eleganti, prestazioni perfette',
    description: [
      "Tutti i prodotti ALUK sono disponibili in una vasta gamma di colori e finiture, certificati e testati secondo le più severe norme e leggi vigenti in Europa.",
      "I serramenti alluminio e legno sono il perfetto connubio tra le caratteristiche dell'alluminio, robustezza, durabilità, assenza di manutenzione, e del legno, tradizione, estetica, calore.",
      "Il sistema è composto da profili in alluminio per la parte esterna e profili in legno per quella interna. La serie è disponibile in una vasta gamma di colori e rifiniture.",
      "La linea Thermic X di Fossati soddisfa pienamente le varie tipologie costruttive e architettoniche nel rispetto delle più esigenti normative per il risparmio energetico e isolamento acustico a tutto beneficio del comfort e dell'estetica dell'abitazione."
    ],
    image: '/alluminio-legno-preview.webp',
    sidebar: [
      {
        title: 'Fossati (Legno-Alluminio)',
        items: ['Thermic X']
      },
      {
        title: 'Profili per scorrevoli',
        items: []
      }
    ],
    profileDetails: {
      'Thermic X': {
        brand: 'Fossati Serramenti',
        name: 'Thermic X',
        image: '/profili/fossati-thermicx.jpg',
        description:
          'Coniuga il calore e il pregio del legno all’interno con l’estrema resistenza e l’assenza di manutenzione dell’alluminio all’esterno, per i più elevati standard di isolamento termico e acustico.',
        note: 'Disponibile anche nella versione ThermicX PLUS con triplo vetro.',
        specs: [
          { label: 'Struttura', value: 'Interno in legno · Esterno in alluminio' },
          { label: 'Vetrature', value: 'Doppio vetro o triplo vetro (versione Plus)' },
          { label: 'Personalizzazione', value: 'Due sagome interne e ampia gamma colori' }
        ]
      }
    }
  },
  'serramenti-in-pvc': {
    title: 'Serramenti in PVC',
    category: 'Infissi',
    headline: 'Finestre in PVC',
    subtitle: 'La scelta più classica: ottimo isolamento termico e sicure funzionalità',
    description: [
      "Un valore che dura nel tempo: le nostre finestre e porte-finestre in PVC Fossati (linee Linea 76, Solaris e Icon) hanno tutti i requisiti per soddisfare ogni vostra esigenza in merito a funzionalità, allestimenti e design. Gli eccellenti valori di isolamento termico degli infissi rendono poi più confortevole il vostro abitare.",
      "Ottimo rapporto qualità-prezzo, facilità di apertura e utilizzo, ridotta necessità di manutenzione: lasciatevi conquistare dalla varietà del nostro assortimento di infissi!"
    ],
    image: '/pvc-preview.webp',
    sidebar: [
      {
        title: 'Finestre e porte finestre (Fossati)',
        items: ['Fossati - Linea 76', 'Fossati - Solaris', 'Fossati - Icon']
      },
      {
        title: 'Scorrevoli',
        items: []
      },
      {
        title: 'Portoncini',
        items: []
      }
    ],
    profileDetails: {
      'Fossati - Linea 76': {
        brand: 'Fossati Serramenti',
        name: 'Linea 76',
        image: '/profili/fossati-linea76.jpg',
        description:
          'Alta efficienza energetica intesa come isolamento termico e comfort abitativo. Profilo in PVC multicamera da 76 mm con rinforzi in acciaio dal design pulito e contemporaneo.',
        note: 'Disponibile anche nelle versioni PLUS, ALU e ALU PLUS.',
        specs: [
          { label: 'Isolamento Termico', value: 'Uw fino a 1,0 W/mqK (Ug 0,6) · 1,3 W/mqK (Ug 1,1)' },
          { label: 'Isolamento Acustico', value: 'Rw fino a 46 dB' },
          { label: 'Sicurezza', value: 'Fino alla Classe RC2' }
        ]
      },
      'Fossati - Solaris': {
        brand: 'Fossati Serramenti',
        name: 'Solaris',
        image: '/profili/fossati-solaris.jpg',
        description:
          'Profilo in PVC multicamera da 82 mm con tripla guarnizione di battuta TPE/EPDM e rinforzi in acciaio, studiato per massimizzare la luce naturale, la protezione dagli agenti esterni e il risparmio energetico.',
        note: 'Profilo da 82 mm con tripla guarnizione TPE/EPDM ad alte prestazioni.',
        specs: [
          { label: 'Isolamento Termico', value: 'Uw fino a 0,9 W/mqK (Ug 0,6) · 1,2 W/mqK (Ug 1,1)' },
          { label: 'Isolamento Acustico', value: 'Rw fino a 45 dB' },
          { label: 'Sicurezza', value: 'Fino alla Classe RC2' }
        ]
      },
      'Fossati - Icon': {
        brand: 'Fossati Serramenti',
        name: 'Icon',
        image: '/profili/fossati-icon.jpg',
        description:
          'Profili in PVC estruso di Classe A da 76 mm con mescole di Classe S (climi severi) e ferramenta anta-ribalta con chiusura a nottolini registrabili. Unione di design essenziale, solidità e affidabilità.',
        note: 'Profilo in PVC Classe A da 76 mm per climi severi.',
        specs: [
          { label: 'Isolamento Termico', value: 'Uw fino a 1,3 W/mqK (Ug 1,0)' },
          { label: 'Isolamento Acustico', value: 'Rw fino a 42 dB' },
          { label: 'Sicurezza', value: 'Fino alla Classe RC2' }
        ]
      }
    }
  },
  'verande': {
    title: 'Verande',
    category: 'Infissi',
    headline: 'Verande',
    subtitle: 'Più spazio e valore al vostro abitare',
    description: [
      "Le nostre verande ampliano i vostri spazi abitativi, regalandovi nuove prospettive sull'esterno. Moderni sistemi di ventilazione, efficienti dispositivi oscuranti e molteplici tipologie di apertura contribuiscono a creare un'atmosfera accogliente. La veranda, inoltre, incrementa il valore estetico e commerciale della vostra casa.",
      "Tutte le nostre soluzioni, accuratamente progettate e collaudate, vi offrono il massimo isolamento termico, un'ottima protezione dai rumori e funzionalità durevole nel tempo."
    ],
    image: '/verande-preview.webp',
    sidebar: [
      {
        title: 'In Alluminio',
        items: ['45V', 'BSF70', '67IW', '77IW']
      },
      {
        title: 'In PVC',
        items: ['Top 72', 'Top 90']
      }
    ],
    profileDetails: {
      '67IW': {
        brand: 'AluK Group',
        name: 'Sistema 67IW',
        description:
          'Sistema a taglio termico da 66,5 mm con barrette alveolari da 28,5 mm e guarnizione centrale a giunto aperto, ideale per verande e chiusure vetrate ad alte prestazioni.',
        note: 'Compatibile con vetri ad alto spessore da 22 a 50 mm.',
        specs: [
          { label: 'Profondità Profili', value: 'Stipite 66,5 mm · Battente 76,5 mm' },
          { label: 'Taglio Termico', value: 'Barrette alveolari da 28,5 mm' },
          { label: 'Vetrature', value: 'Da 22 a 50 mm con guarnizioni EPDM' }
        ]
      },
      '77IW': {
        brand: 'AluK Group',
        name: 'Sistema 77IW',
        description:
          'Sistema a battente top di gamma AluK per isolamento termico e robustezza statica, con listelli isolanti nella camera di taglio termico e di alloggiamento del vetrocamera.',
        note: 'Progettato per grandi aperture vetrate e massimo comfort.',
        specs: [
          { label: 'Profondità Profili', value: 'Stipite 77 mm · Battente 87 mm' },
          { label: 'Isolamento', value: 'Barrette alveolari con listelli isolanti integrati' },
          { label: 'Vetrature', value: 'Vetri da 32 a 50 mm' }
        ]
      }
    }
  },
  'facciate': {
    title: 'Facciate',
    category: 'Infissi',
    headline: 'Facciate',
    subtitle: 'Sistemi per facciate continue in alluminio',
    description: [
      "Le serie per Facciate SL, SG e AW86 riassumono i risultati delle ricerche e dell'esperienza del marchio ALUK nel settore delle chiusure trasparenti e di copertura in alluminio.",
      "Una sintesi di design, tecnologia, qualità componentistiche che rendono queste serie adattabili a qualsiasi esigenza architettonica, dove si voglia valorizzare il fattore estetico del vetro ad una struttura portante versatile e personalizzabile.",
      "Tali prodotti offrono garanzie di isolamento termico-acustico e durabilità nel tempo nel rispetto delle più esigenti normative per il risparmio energetico ed il comfort interno."
    ],
    image: '/facciate-preview.webp',
    sidebar: [
      {
        title: 'In Alluminio',
        items: ['SL 50', 'SL 60', 'SG 50', 'AW 86S', 'AW 86B', 'FRS']
      }
    ],
    profileDetails: {
      'AW 86S': {
        brand: 'AluK Group',
        name: 'Facciata AW 86S (Cellule)',
        description:
          'Sistema di facciata continua a cellule (unitized system) di altezza pari all’interpiano. Privilegia le lavorazioni in officina riducendo tempi e costi di posa in cantiere su grandi edifici.',
        note: 'Conforme alla norma UNI EN 13830 per facciate continue.',
        specs: [
          { label: 'Tipologia', value: 'Facciata a cellule pre-assemblate in officina' },
          { label: 'Tenuta', value: 'Guarnizioni statiche e dinamiche in EPDM' },
          { label: 'Normativa', value: 'Marcatura CE · UNI EN 13830' }
        ]
      },
      'AW 86B': {
        brand: 'AluK Group',
        name: 'Facciata AW 86B (Cellule)',
        description:
          'Variante del sistema a cellule AW86 concepita per grandi superfici vetrate e quote elevate, con connessioni orizzontali ad alta tenuta e possibilità di incollaggio strutturale del vetro.',
        note: 'Conforme alla norma UNI EN 13830 per facciate continue.',
        specs: [
          { label: 'Tipologia', value: 'Facciata continua a cellule (Unitized System)' },
          { label: 'Tenuta', value: 'Guarnizioni EPDM su connessione orizzontale' },
          { label: 'Normativa', value: 'Marcatura CE · UNI EN 13830' }
        ]
      }
    }
  },
  'porte-blindate': {
    title: 'Porte Blindate',
    category: 'Porte',
    headline: 'Porte Blindate',
    subtitle: 'Sicurezza e confort termico e acustico ai massimi livelli',
    description: [
      "Il primo passo per proteggere la casa è sicuramente l'ingresso principale, ma proteggere non vuol dire dover, per forza, rinunciare a bellezza, comodità e praticità. La S.C.S. offre una vasta gamma di soluzioni di sicurezza e personalizzazioni per garantirvi di possedere una porta blindata UNICA nel suo genere, coniugando i vostri desideri con la nostra esperienza."
    ],
    image: '/porte-blindate-preview.webp',
    sidebar: [
      { title: 'Torterolo & Re', items: ['Serie Gold Plus', 'Serie Gold'] },
      { title: 'Dierre', items: ['Modello Hibry'] },
      { title: 'Metalport', items: ['Serie M2', 'Serie SIKUR', 'Serie BLINDO'] }
    ]
  },
  'porte-interne': {
    title: 'Porte Interne',
    category: 'Porte',
    headline: 'Porte Interne',
    subtitle: 'Estetica e Funzionalità',
    description: [
      "La porta interna è la chiave di volta dell'arredamento di una casa. Governa lo spazio e lo rende dinamico, creando barriere e aperture funzionali allo stile di vita di chi lo abita.",
      "La nostra ricerca ci ha permesso di individuare alcune aziende leader, che sanno interpretare questo compito con creatività, semplicità ed efficienza."
    ],
    image: '/porte-interne-preview.webp',
    sidebar: [
      { title: 'Porteleader', items: ['Porte Laccate', 'Porte in Laminato', 'Porte in Vetro', 'Accessori'] }
    ]
  },
  'persiane-alluminio': {
    title: 'Persiane alluminio Aluk',
    category: 'Persiane',
    headline: 'Persiane - oscuranti',
    subtitle: 'Protezione duratura senza manutenzione',
    description: [
      "I nostri scuretti e le persiane AluK sono stati studiati e progettati per dare la giusta protezione alla tua casa da agenti esterni quali rumore, inquinamento, freddo e caldo. Costruito con una materia prima quale l'alluminio durano nel tempo e non hanno praticamente bisogno di manutenzione.",
      "Risultano pertanto robusti e sicuri mantenendo un'estetica classica valorizzando architettonicamente ogni abitazione.",
      "La gamma comprende varie versioni di persiane: Classica, Storico, Scurone, Scorrevole, Liberty, Firenze. Tutte le tipologie sono accomunate dalla ridotta manutenzione mantenendo la stessa estetica tradizionale delle persiane in legno."
    ],
    image: '/persiane-alluminio-preview.webp',
    sidebar: [
      { title: 'Persiane alluminio', items: ['Classica', 'Storica', 'Scorrevole', 'Scurone'] }
    ]
  },
  'persiane-blindate': {
    title: 'Persiane Blindate',
    category: 'Persiane',
    headline: 'Persiane Blindate',
    subtitle: 'Sicurezza con eleganza e discrezione',
    description: [
      "Di notte o nei periodi di assenza da casa l'esigenza di avere un'elevata sicurezza contro le effrazioni è senz'altro assicurata dall'uso delle persiane blindate.",
      "Queste, molto simili nell'estetica a quelle in legno, permettono la circolazione dell'aria e preservano la privacy degli inquilini, non offrendo visibilità all'interno dell'abitazione.",
      "Le caratteristiche di sicurezza non inficiano le funzionalità principali di apertura e chiusura e sono facili da manovrare ma soprattutto sicure. La struttura semplice e lineare riduce al minimo il disturbo alla visuale, risultando sempre gradevoli.",
      "La struttura risulta razionale ed elegante è facilmente integrabile con i diversi stili architettonici."
    ],
    image: '/persiane-blindate-preview.webp',
    sidebar: [
      { title: 'Persiane In Acciaio', items: [] }
    ]
  },
  'inferriate': {
    title: 'Inferriate',
    category: 'Complementari',
    headline: 'Inferriate di Sicurezza',
    subtitle: 'Protezione discreta e design',
    description: [
      "Soluzioni per la sicurezza della tua casa, progettate per integrarsi perfettamente con lo stile architettonico senza rinunciare alla massima protezione contro i tentativi di intrusione."
    ],
    image: '/inferriate-preview.webp',
    sidebar: []
  },
  'zanzariere': {
    title: 'Zanzariere',
    category: 'Complementari',
    headline: 'Zanzariere',
    subtitle: 'Zanzariere, oscuranti, avvolgibili',
    description: [
      "Senza fili, modulare e soprattutto integrato con l'azionamento delle tapparelle. CONFIGURAZIONE BASE a partire da 999,00 euro Installazione esclusa!",
      "La CONFIGURAZIONE BASE comprende: 1 Unità di controllo con modulo GSM + 1 Tastiera LCD con badge + 1 Sirena da esterno + 2 sensori volumetrici da interno."
    ],
    image: '/zanzariere-preview.webp',
    sidebar: [
      { title: 'Per porte', items: ['Scenica', 'Miniscenica', 'Susy Elite', 'Beta'] },
      { title: 'Per finestre', items: [] },
      { title: 'Per balcone', items: [] },
      { title: 'Fisse', items: [] }
    ]
  },
  'tende-da-sole': {
    title: 'Tende da Sole',
    category: 'Complementari',
    headline: 'Tende da Sole',
    subtitle: '',
    description: [
      "Per vivere al meglio gli spazi all'aperto in ogni stagione dell'anno, Brianzatende propone un ampio ventaglio di soluzioni adatte a tutti gli ambienti esterni, perfette per ogni dimensione e stile architettonico.",
      "Disponibili anche con motorizzazioni marca Somfy per un’apertura e chiusura comoda, silenziosa e automatizzata."
    ],
    image: '/tende-da-sole-preview.webp',
    sidebar: [
      { title: 'Tende da sole a bracci', items: ['Con cassonetto', 'Senza cassonetto'] },
      { title: 'Tende da sole a caduta', items: [] },
      { title: 'Per balcone', items: [] },
      { title: 'Capottine', items: [] },
      { title: 'Pensiline New entry', items: [] },
      { title: 'Motorizzazioni', items: ['Motori Somfy'] }
    ]
  },
  'tapparelle': {
    title: 'Tapparelle',
    category: 'Complementari',
    headline: 'Tapparelle',
    subtitle: 'La soluzione completa per la tua sicurezza',
    description: [
      "Senza fili, modulare e soprattutto integrato con l'azionamento delle tapparelle. CONFIGURAZIONE BASE a partire da 999,00 euro Installazione esclusa!",
      "La CONFIGURAZIONE BASE comprende: 1 Unità di controllo con modulo GSM + 1 Tastiera LCD con badge + 1 Sirena da esterno + 2 sensori volumetrici da interno.",
      "Per le tapparelle motorizzate utilizziamo motori marca Somfy, sinonimo di affidabilità, silenziosità e durata nel tempo."
    ],
    image: '/tapparelle-preview.webp',
    sidebar: [
      { title: 'In Acciaio', items: ['Tapparelle in Acciaio'] },
      { title: 'In Alluminio', items: [] },
      { title: 'In PVC', items: [] },
      { title: 'Motorizzazioni', items: ['Motori Somfy'] }
    ]
  }
};
