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
        image: '/profili/aluk-c67k.jpg',
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
        image: '/profili/aluk-67km.jpg',
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
        image: '/profili/aluk-c77k.jpg',
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
        profileImage: '/profili/fossati-thermicx-profilo.jpg',
        profileImageLabel: 'Sezione Profilo Legno-Alluminio',
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
        items: ['Fossati - Meridiana 82', 'Fossati - Meridiana Zero', 'Fossati - Scorrevole Complanare']
      },
      {
        title: 'Portoncini',
        items: ['Fossati - Linea 8000']
      }
    ],
    profileDetails: {
      'Fossati - Linea 76': {
        brand: 'Fossati Serramenti',
        name: 'Linea 76',
        image: '/profili/fossati-linea76.jpg',
        profileImage: '/profili/fossati-linea76-profilo.jpg',
        profileImageLabel: 'Sezione Profilo Linea 76',
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
        profileImage: '/profili/fossati-solaris-profilo.jpg',
        profileImageLabel: 'Sezione Profilo Solaris 82 mm',
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
        profileImage: '/profili/fossati-icon-finestra.jpg',
        profileImageLabel: 'Dettaglio Finestra Icon',
        description:
          'Profili in PVC estruso di Classe A da 76 mm con mescole di Classe S (climi severi) e ferramenta anta-ribalta con chiusura a nottolini registrabili. Unione di design essenziale, solidità e affidabilità.',
        note: 'Profilo in PVC Classe A da 76 mm per climi severi.',
        specs: [
          { label: 'Isolamento Termico', value: 'Uw fino a 1,3 W/mqK (Ug 1,0)' },
          { label: 'Isolamento Acustico', value: 'Rw fino a 42 dB' },
          { label: 'Sicurezza', value: 'Fino alla Classe RC2' }
        ]
      },
      'Fossati - Meridiana 82': {
        brand: 'Fossati Serramenti',
        name: 'HST Meridiana 82 (Alzante Scorrevole)',
        image: '/profili/fossati-meridiana82.jpg',
        description:
          'Alzante scorrevole in PVC dal design essenziale e contemporaneo, capace di dialogare con ambienti moderni e classici. Il profilo anta da 86 mm riduce l’impatto visivo e amplia la superficie vetrata, mentre le guarnizioni maggiorate garantiscono elevate prestazioni di isolamento.',
        note: 'Disponibile anche nelle versioni PLUS e ALU.',
        specs: [
          { label: 'Tipologia', value: 'Alzante scorrevole in PVC per grandi aperture' },
          { label: 'Profilo Anta', value: '86 mm a ridotto impatto visivo' },
          { label: 'Isolamento', value: 'Guarnizioni maggiorate · Massimo comfort termico e acustico' }
        ]
      },
      'Fossati - Meridiana Zero': {
        brand: 'Fossati Serramenti',
        name: 'HST Meridiana Zero',
        image: '/profili/fossati-meridiana-zero.jpg',
        description:
          'Evoluzione minimalista dello scorrevole alzante in PVC: elimina l’anta fissa laterale per offrire una trasparenza panoramica ancora maggiore e una connessione visiva totale tra interno ed esterno.',
        note: 'Disponibile anche nella versione PLUS ad alto isolamento.',
        specs: [
          { label: 'Design', value: 'Anta fissa laterale eliminata per massima superficie vetrata' },
          { label: 'Movimentazione', value: 'Alzante scorrevole fluido e silenzioso' },
          { label: 'Versioni', value: 'Standard e PLUS' }
        ]
      },
      'Fossati - Scorrevole Complanare': {
        brand: 'Fossati Serramenti',
        name: 'Scorrevole Complanare in PVC',
        image: '/profili/fossati-meridiana82.jpg',
        description:
          'Ideale per aperture di media ampiezza, verande e terrazze. Trasforma gli spazi in ambienti sicuri e perfettamente isolati, con possibilità di apertura ad anta-ribalta per il ricambio d’aria in totale sicurezza.',
        note: 'Luminoso, elegante e dotato di apertura a ribalta integrata.',
        specs: [
          { label: 'Tipologia', value: 'Scorrevole complanare traslante in PVC' },
          { label: 'Apertura', value: 'Scorrimento complanare + funzione anta-ribalta' },
          { label: 'Applicazione', value: 'Ideale per aperture medie, terrazze e verande' }
        ]
      },
      'Fossati - Linea 8000': {
        brand: 'Fossati Serramenti',
        name: 'Portoncini Linea 8000',
        image: '/profili/fossati-portoncini.jpg',
        description:
          'Portoncini d’ingresso su misura progettati per coniugare eleganza, comfort termico ed elevata sicurezza quotidiana. Disponibili negli allestimenti Basic e Security con serratura multipunto FUHR e cerniere Dr. Hahn.',
        note: 'Allestimenti Basic (Multisafe 859) e Security (Autosafe 835 automatica).',
        specs: [
          { label: 'Serratura', value: 'Multipunto FUHR con ganci e punzoni (manuale o automatica)' },
          { label: 'Cilindro', value: 'Profilo europeo UNI EN ISO 1303 antitrapano e antibumping (5 chiavi)' },
          { label: 'Cerniere', value: 'Dr. Hahn a 3 ali regolabili in 3D · Portata fino a 160 kg' }
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
      '45V': {
        brand: 'AluK Group',
        name: 'Sistema 45V',
        image: '/profili/aluk-45v.jpg',
        description:
          'Sistema a freddo in alluminio per verande e chiusure stagionali, leggero, versatile e resistente agli agenti atmosferici.',
        note: 'Ideale per verande, giardini d’inverno e divisori vetrati.',
        specs: [
          { label: 'Tipologia', value: 'Sistema in alluminio per verande e chiusure' },
          { label: 'Lega', value: 'EN AW-6060 ad alta resistenza' },
          { label: 'Finiture', value: 'Ossidato o verniciato RAL / effetto legno' }
        ]
      },
      'BSF70': {
        brand: 'AluK Group',
        name: 'Sistema a Libro BSF70',
        image: '/profili/aluk-bsf70.jpg',
        description:
          'Sistema pieghevole a libro ad alto isolamento termico per grandi aperture panoramiche su terrazzi e giardini.',
        note: 'Aperture totali senza montanti fissi intermedi.',
        specs: [
          { label: 'Tipologia', value: 'Chiusura pieghevole a libro a taglio termico' },
          { label: 'Profondità', value: '70 mm con vetri ad alto isolamento' },
          { label: 'Applicazione', value: 'Verande panoramiche e dehors' }
        ]
      },
      '67IW': {
        brand: 'AluK Group',
        name: 'Sistema 67IW',
        image: '/profili/aluk-67iw.jpg',
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
        image: '/profili/aluk-c77k.jpg',
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
      'SL 50': {
        brand: 'AluK Group',
        name: 'Facciata Continua SL 50',
        image: '/profili/aluk-sl50.jpg',
        description:
          'Sistema a montanti e traversi con ingombro frontale a vista di soli 50 mm, adatto a facciate verticali, inclinate, piane o poligonali con integrazione di moduli apribili.',
        note: 'Copertine esterne personalizzabili e massima versatilità architettonica.',
        specs: [
          { label: 'Ingombro a Vista', value: '50 mm su montanti e traversi' },
          { label: 'Configurazioni', value: 'Verticali, inclinate, poligonali e coperture' },
          { label: 'Aperture Integrabili', value: 'Finestre a sporgere, anta-ribalta e porte' }
        ]
      },
      'SG 50': {
        brand: 'AluK Group',
        name: 'Facciata Strutturale SG 50',
        image: '/profili/aluk-sg50.png',
        description:
          'Sistema di facciata strutturale (Structural Glazing) basato su griglia da 50 mm: il vetro è fissato tramite incollaggio strutturale o sistemi a scomparsa per un effetto tuttovetro continuo.',
        note: 'Estetica minimale con fuga ridotta tra i moduli vetrati.',
        specs: [
          { label: 'Sistema', value: 'Structural Glazing (effetto tuttovetro continuo)' },
          { label: 'Struttura', value: 'Griglia portante da 50 mm condivisa con serie SL 50' },
          { label: 'Estetica', value: 'Assenza di profili metallici esterni a vista' }
        ]
      },
      'SL 60': {
        brand: 'AluK Group',
        name: 'Facciata Continua SL 60',
        image: '/profili/aluk-sl60.png',
        description:
          'Sistema di facciata continua a montanti e traversi con profilo da 60 mm per grandi specchiature vetrate e carichi strutturali elevati.',
        note: 'Ideale per grandi superfici vetrate commerciali e residenziali.',
        specs: [
          { label: 'Ingombro a Vista', value: '60 mm su montanti e traversi' },
          { label: 'Portata', value: 'Adatto a vetri di grande dimensione e peso' },
          { label: 'Normativa', value: 'Marcatura CE · UNI EN 13830' }
        ]
      },
      'AW 86S': {
        brand: 'AluK Group',
        name: 'Facciata AW 86S (Cellule)',
        image: '/profili/aluk-aw86.png',
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
        image: '/profili/aluk-aw86.png',
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
      { title: 'Metalport', items: ['Serie M2', 'Serie SIKUR', 'Serie BLINDO'] },
      { title: 'Torterolo & Re', items: ['Serie Gold Plus', 'Serie Gold'] },
      { title: 'Dierre', items: ['Modello Hibry'] }
    ],
    profileDetails: {
      'Serie M2': {
        brand: 'Metalportblindate',
        name: 'Porta Blindata Serie M2',
        image: '/profili/metalport-blindate.jpg',
        profileImage: '/profili/metalport-struttura-m2.jpg',
        profileImageLabel: 'Schema Struttura Interna M2',
        description:
          'Porta blindata certificata Classe 3 antieffrazione con doppia lamiera in acciaio pressopiegata da 15/10, telaio da 20/10 e coibentazione interna in lana di roccia ad alta densità.',
        note: 'Ottimo equilibrio tra sicurezza residenziale, isolamento termico e acustico.',
        specs: [
          { label: 'Classe Antieffrazione', value: 'Classe 3 (UNI EN 1627) · 12 punti di chiusura' },
          { label: 'Isolamento Termico', value: 'Ud < 1,3 W/m²K (lana di roccia + Neopor)' },
          { label: 'Isolamento Acustico', value: 'Fino a 40 dB · Defender antistrappo e antitrapano' }
        ]
      },
      'Serie SIKUR': {
        brand: 'Metalportblindate',
        name: 'Porta Blindata Serie SIKUR',
        image: '/profili/metalport-blindate.jpg',
        profileImage: '/profili/metalport-struttura-sikur.jpg',
        profileImageLabel: 'Schema Struttura Interna SIKUR',
        description:
          'Linea ad alte prestazioni in Classe 3 con 18–19 punti di chiusura perimetrali, 3 cerniere pesanti regolabili, defender speciale e piastra al manganese a protezione della serratura.',
        note: 'Predisponibile con kit termo-acustico, cerniere a scomparsa o serratura motorizzata.',
        specs: [
          { label: 'Classe Antieffrazione', value: 'Classe 3 · 18–19 punti di chiusura' },
          { label: 'Protezione Serratura', value: 'Defender speciale + piastra al manganese antitrapano' },
          { label: 'Isolamento', value: 'Ud < 1,4 W/m²K · Fonoisolamento ~38 dB' }
        ]
      },
      'Serie BLINDO': {
        brand: 'Metalportblindate',
        name: 'Porta Blindata Serie BLINDO',
        image: '/profili/metalport-blindate.jpg',
        profileImage: '/profili/metalport-struttura-blindo.jpg',
        profileImageLabel: 'Schema Struttura Interna BLINDO',
        description:
          'Soluzione top di gamma certificata Classe 4 per ingressi esposti, ville indipendenti e piani terra. Struttura ultra-rinforzata progettata contro tentativi di scasso prolungati e utensili pesanti.',
        note: 'Ampia personalizzazione con pannelli pantografati, legno o alluminio coibentato.',
        specs: [
          { label: 'Classe Antieffrazione', value: 'Classe 4 (alta sicurezza certificata)' },
          { label: 'Struttura', value: 'Scocca ultra-rinforzata contro scardinamento e taglio' },
          { label: 'Rivestimenti', value: 'Legno, pantografati, alluminio o stile condominiale' }
        ]
      },
      'Serie Gold Plus': {
        brand: 'Torterolo & Re',
        name: 'Porta Blindata Serie Gold Plus',
        image: '/profili/torterolo-gold-plus.jpg',
        description:
          'Porta blindata top di gamma certificata Classe 4 con doppia lamiera in acciaio elettrozincato, rinforzi verticali a omega con inserti in acciaio al manganese antitaglio, deviatori doppi e telaio da 20/10.',
        note: 'Disponibile con serratura TR400, doppia serratura TR601 o elettronica motorizzata LINX.',
        specs: [
          { label: 'Classe Antieffrazione', value: 'Classe 4 (UNI ENV 1627) · Rinforzi al manganese' },
          { label: 'Isolamento Termico', value: 'Ud tra 1,2 e 1,4 W/m²K' },
          { label: 'Isolamento Acustico', value: 'Rw tra 40 e 43 dB · Soglia mobile parafreddo' }
        ]
      },
      'Serie Gold': {
        brand: 'Torterolo & Re',
        name: 'Porta Blindata Serie Gold',
        image: '/profili/torterolo-gold.jpg',
        description:
          'Porta blindata Torterolo & Re progettata per unire sicurezza certificata, comfort abitativo e ampia possibilità di personalizzazione estetica su pannelli interni ed esterni.',
        note: 'Telaio e controtelaio registrabili in acciaio 20/10 con cerniere regolabili su due assi.',
        specs: [
          { label: 'Struttura', value: 'Doppia lamiera elettrozincata con rinforzi verticali' },
          { label: 'Serratura', value: 'Cilindro a profilo europeo con defender antitrapano' },
          { label: 'Dotazione', value: 'Spioncino panoramico e soglia mobile parafreddo' }
        ]
      },
      'Modello Hibry': {
        brand: 'Dierre',
        name: 'Porta Blindata Hibry',
        image: '/profili/dierre-hibry.jpg',
        description:
          'Porta blindata smart a doppia funzione (meccanica ed elettronica): si apre avvicinando chiave transponder, card, smartphone o impronta digitale, mantenendo sempre attiva la chiave meccanica di sicurezza.',
        note: 'Display touch interno per gestione accessi e predisposizione domotica.',
        specs: [
          { label: 'Classe Antieffrazione', value: 'Classe 3 di serie · Classe 4 su richiesta' },
          { label: 'Sistema Chiusura', value: 'Doppia funzione motorizzata + meccanica (cilindro New Power)' },
          { label: 'Isolamento Acustico', value: 'Fino a 40–46 dB · Apertura Keyless / Touch / Domotica' }
        ]
      }
    }
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
      { title: 'Bertolotto & Parma Porte', items: ['Porte Laccate', 'Porte in Laminato', 'Porte in Vetro'] }
    ],
    profileDetails: {
      'Porte Laccate': {
        brand: 'Bertolotto Porte',
        name: 'Collezioni Laccate a Mano',
        image: '/profili/bertolotto-laccate.webp',
        description:
          'Porte interne laccate certificate CATAS (linee Millerighe, PantoNext, PantoClassica, CL e Baltimora) con verniciatura artigianale, disponibili cieche o con inserti in vetro coordinati.',
        note: 'Disponibili a battente, scorrevoli interno/esterno muro e filomuro.',
        specs: [
          { label: 'Collezioni', value: 'Millerighe, PantoNext, PantoQuadra, CL, Baltimora' },
          { label: 'Finiture', value: 'Laccature opache/lucide in tutte le tinte RAL e NCS' },
          { label: 'Aperture', value: 'Battente, scorrevole a scomparsa, a libro, filomuro' }
        ]
      },
      'Porte in Laminato': {
        brand: 'Bertolotto Porte',
        name: 'Collezioni in Laminato',
        image: '/profili/bertolotto-laminato.webp',
        description:
          'Superfici antigraffio e idrofughe con venature tattili ed effetto legno naturale (collezioni Materik, Grafite, Trame e Textile). Pratiche, resistenti e ideali per ogni ambiente domestico.',
        note: 'Configurabili anche con inserti geometrici in cristallo di sicurezza.',
        specs: [
          { label: 'Collezioni', value: 'Materik, Grafite, Trame, Textile' },
          { label: 'Resistenza', value: 'Superfici antigraffio, facili da pulire e idrofughe' },
          { label: 'Personalizzazione', value: 'Finiture effetto legno, materiche e inserti vetro' }
        ]
      },
      'Porte in Vetro': {
        brand: 'Bertolotto Porte',
        name: 'Porte in Vetro e Alluminio',
        image: '/profili/bertolotto-vetro.webp',
        description:
          'Soluzioni luminose con cristalli temperati di sicurezza o stratificati da 8 mm (linee Alaska e Glass Design), perfette per dividere gli spazi valorizzando la luce naturale.',
        note: 'Vetri trasparenti, extraclear, acidati, sabbiati o decorati.',
        specs: [
          { label: 'Cristallo', value: 'Vetro temperato o stratificato di sicurezza spessore 8 mm' },
          { label: 'Collezioni', value: 'Alaska (con telaio personalizzabile), Glass Design' },
          { label: 'Lavorazioni', value: 'Trasparente, satinato, sabbiato, inciso o specchiato' }
        ]
      }
    }
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
    ],
    profileDetails: {
      'Classica': {
        brand: 'AluK Group',
        name: 'Persiana Classica',
        image: '/profili/aluk-persiane-45p.jpg',
        description:
          'Persiana in alluminio dalle linee tradizionali adatta sia a contesti residenziali moderni che classici, con lamelle fisse o orientabili per regolare luce e ventilazione senza manutenzione.',
        note: 'Disponibile in colori RAL e finiture effetto legno ad alta durata.',
        specs: [
          { label: 'Materiale', value: 'Alluminio estruso resistente agli agenti atmosferici' },
          { label: 'Lamelle', value: 'Fisse o orientabili con meccanismo di regolazione' },
          { label: 'Manutenzione', value: 'Praticamente nulla nel tempo' }
        ]
      },
      'Storica': {
        brand: 'AluK Group',
        name: 'Persiana Storica',
        image: '/profili/aluk-persiane-45p.jpg',
        description:
          'Studiata per ristrutturazioni in centri storici o edifici vincolati, riproduce fedelmente l’estetica delle persiane tradizionali in legno con tutta la durata e sicurezza dell’alluminio.',
        note: 'Finiture effetto legno e ferramenta tradizionale su richiesta.',
        specs: [
          { label: 'Destinazione', value: 'Centri storici, facciate vincolate e ristrutturazioni' },
          { label: 'Estetica', value: 'Disegno fedele alla tradizione del legno' },
          { label: 'Durata', value: 'Verniciatura certificata per esterni' }
        ]
      },
      'Scorrevole': {
        brand: 'AluK Group',
        name: 'Persiana Scorrevole',
        image: '/profili/aluk-persiane-scorrevole.jpg',
        description:
          'Sistema oscurante a scorrimento esterno o interno muro, ideale per aperture ampie, balconi e facciate moderne dove è necessario ottimizzare gli ingombri di apertura.',
        note: 'Binari di scorrimento fluidi e silenziosi in alluminio.',
        specs: [
          { label: 'Apertura', value: 'Scorrimento lineare su binario superiore protetto' },
          { label: 'Vantaggio', value: 'Zero ingombro di rotazione su terrazzi e balconi' },
          { label: 'Finiture', value: 'Ampia gamma tinte RAL e finiture legno' }
        ]
      },
      'Scurone': {
        brand: 'AluK Group',
        name: 'Scurone in Alluminio',
        description:
          'Pannello oscurante cieco o dogato (verticale od orizzontale) per oscuramento totale, protezione termica aggiuntiva e maggiore robustezza strutturale.',
        note: 'Perfetto sia per case indipendenti sia per contesti rustici o alpini.',
        specs: [
          { label: 'Oscuramento', value: 'Totale, con doghe verticali o orizzontali' },
          { label: 'Struttura', value: 'Alluminio rinforzato ad alta stabilità' },
          { label: 'Configurazioni', value: 'A battente, a libro o su cardini a muro' }
        ]
      }
    }
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
      { title: 'Bettio — Per porte e finestre', items: ['Scenica', 'Miniscenica', 'Susy Elite', 'Beta'] }
    ],
    profileDetails: {
      'Scenica': {
        brand: 'Bettio',
        name: 'Zanzariera Scenica®',
        image: '/profili/bettio-scenica.jpg',
        description:
          'Zanzariera avvolgibile a scorrimento laterale totalmente priva di guide a pavimento e profili di riscontro: la barra maniglia si ferma in qualsiasi posizione per un passaggio sicuro e senza barriere.',
        note: 'Sistema antivento brevettato Bettio con rete in fibra di vetro e PVC.',
        specs: [
          { label: 'Barriere a Pavimento', value: 'Assenti (ideale per bambini, anziani e disabili)' },
          { label: 'Resistenza al Vento', value: 'Classe 4 con bottoni antivento saldati' },
          { label: 'Dimensioni Max', value: 'Fino a 3000 × 2800 mm (2 ante)' }
        ]
      },
      'Miniscenica': {
        brand: 'Bettio',
        name: 'Miniscenica® evo',
        image: '/profili/bettio-miniscenica.jpg',
        description:
          'Tutta la tecnologia senza barriere di Scenica in un ingombro ridottissimo di soli 43 mm (50 mm nella versione ad incasso). Completamente reversibile destra/sinistra con installazione facilitata.',
        note: 'Disponibile in versione in vista (43 mm) o ad incasso (50 mm).',
        specs: [
          { label: 'Ingombro Cassonetto', value: '43 mm in vista · 50 mm versione Incasso' },
          { label: 'Resistenza al Vento', value: 'Classe 4 certificata' },
          { label: 'Dimensioni Max', value: '1 anta fino a 1500×2800 mm · 2 ante fino a 3000×2800 mm' }
        ]
      }
    }
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
      { title: 'Tende da sole a bracci (Brianzatende)', items: ['Con cassonetto', 'Senza cassonetto'] },
      { title: 'Tende a caduta & Pergole', items: ['Tende a caduta TS115', 'Pergole Bioclimatiche'] },
      { title: 'Motorizzazioni', items: ['Motori Somfy'] }
    ],
    profileDetails: {
      'Con cassonetto': {
        brand: 'Brianzatende',
        name: 'Tende a Bracci con Cassonetto',
        image: '/profili/brianzatende-bracci.jpg',
        description:
          'Tende da sole estensibili con cassonetto a scomparsa totale o parziale (linee Ponant R51, Elegance R90/R93, Abrego) che protegge telo e meccanismi da pioggia, vento e smog tutto l’anno.',
        note: 'Motorizzabili con motori Somfy e sensori vento/sole.',
        specs: [
          { label: 'Modelli Principali', value: 'Ponant R51, Elegance R90/R93, Abrego R41/R42, T87CT' },
          { label: 'Protezione Telo', value: 'Cassonetto a scomparsa totale o parziale' },
          { label: 'Automazione', value: 'Compatibile con motori Somfy e luci LED' }
        ]
      },
      'Senza cassonetto': {
        brand: 'Brianzatende',
        name: 'Tende a Bracci su Barra Quadra',
        image: '/profili/brianzatende-bracci.jpg',
        description:
          'Strutture robuste su barra quadra 40×40 mm con bracci estensibili in alluminio (linee Mistral, Design LED e Levante), ideali per terrazzi ampi e installazioni sotto balcone o sporto di gronda.',
        note: 'Disponibili anche versioni giganti per coperture di grandi superfici.',
        specs: [
          { label: 'Modelli Principali', value: 'Mistral R82/R86, Mistral Forged, Design LED, Levante' },
          { label: 'Struttura', value: 'Barra quadra 40×40 mm e bracci ad alta resistenza' },
          { label: 'Optional', value: 'Illuminazione LED integrata e motorizzazione Somfy' }
        ]
      },
      'Tende a caduta TS115': {
        brand: 'Brianzatende',
        name: 'Tende a Caduta Verticale',
        image: '/profili/brianzatende-caduta.jpg',
        description:
          'Schermature verticali per balconi, finestre e verande (modelli TS115 e sistemi Zip Flat), perfette contro sole basso, vento e per garantire la massima privacy.',
        note: 'Disponibili a caduta libera, con guide laterali o sistema Zip antivento.',
        specs: [
          { label: 'Modelli', value: 'TS115 a cassonetto, Zip Flat con guide laterali' },
          { label: 'Funzione', value: 'Protezione sole basso, vento e privacy' },
          { label: 'Movimentazione', value: 'Manuale ad argano o motorizzata Somfy' }
        ]
      },
      'Pergole Bioclimatiche': {
        brand: 'Brianzatende',
        name: 'Pergole Bioclimatiche & Pergolati',
        image: '/profili/brianzatende-bioclimatiche.jpg',
        description:
          'Strutture in alluminio addossate o autoportanti con lamelle orientabili da 0° a 140° o teli retraibili impermeabili (Pergolife / Pergotesa), per vivere terrazzi e giardini in ogni stagione.',
        note: 'Personalizzabili con chiusure laterali, vetrate panoramiche e LED.',
        specs: [
          { label: 'Copertura', value: 'Lamelle orientabili 0°–140° o telo PVC retraibile' },
          { label: 'Installazione', value: 'Addossata a parete o autoportante' },
          { label: 'Comfort', value: 'Regolazione naturale di luce, ventilazione e pioggia' }
        ]
      },
      'Motori Somfy': {
        brand: 'Somfy',
        name: 'Motorizzazioni Somfy per Tende',
        image: '/immagineProdottolsomfy.webp',
        description:
          'Motori tubolari Somfy silenziosi e affidabili per aprire e chiudere le tende da sole con telecomando, interruttore o smartphone, con possibilità di sensori automatici vento e sole.',
        note: 'Affidabilità certificata e lunga durata nel tempo.',
        specs: [
          { label: 'Controllo', value: 'Telecomando radio, comando a parete o app smart' },
          { label: 'Sensori', value: 'Sensore vento/sole per chiusura automatica di sicurezza' },
          { label: 'Qualità', value: 'Motori silenziosi progettati per uso intensivo' }
        ]
      }
    }
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
      { title: 'Avvolgibili Plasticino', items: ['Tapparelle in Acciaio', 'Tapparelle in Alluminio', 'Tapparelle in PVC', 'Orienta & New Solar'] },
      { title: 'Motorizzazioni', items: ['Motori Somfy'] }
    ],
    profileDetails: {
      'Tapparelle in Acciaio': {
        brand: 'Plasticino',
        name: 'Avvolgibili in Acciaio Coibentato',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Teli avvolgibili in acciaio coibentato ad alta densità per chi cerca la massima resistenza meccanica, protezione antieffrazione e durata nel tempo.',
        note: 'Ampia scelta di colorazioni e compatibilità con motori Somfy.',
        specs: [
          { label: 'Materiale', value: 'Acciaio coibentato ad alta densità' },
          { label: 'Sicurezza', value: 'Elevata resistenza antieffrazione e grandine' },
          { label: 'Movimentazione', value: 'Manuale o motorizzata Somfy' }
        ]
      },
      'Tapparelle in Alluminio': {
        brand: 'Plasticino',
        name: 'Avvolgibili in Alluminio',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Soluzione leggera, indeformabile e resistente agli agenti atmosferici. L’alluminio coibentato offre ottimo isolamento termico e acustico con un’estetica sempre impeccabile.',
        note: 'Disponibili in numerose finiture tinta unita ed effetto legno.',
        specs: [
          { label: 'Materiale', value: 'Alluminio coibentato (leggero e robusto)' },
          { label: 'Manutenzione', value: 'Nulla, inalterabile al sole e alle intemperie' },
          { label: 'Installazione', value: 'Su guide in alluminio con spazzolino antivento' }
        ]
      },
      'Tapparelle in PVC': {
        brand: 'Plasticino',
        name: 'Avvolgibili in PVC',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Leggeri, isolanti ed economici, i teli avvolgibili in PVC Plasticino resistono agli agenti atmosferici senza richiedere verniciatura o manutenzione.',
        note: 'Ottimo isolamento termico e ampia gamma colori.',
        specs: [
          { label: 'Materiale', value: 'PVC estruso di alta qualità' },
          { label: 'Vantaggi', value: 'Leggerezza, isolamento e zero verniciatura' },
          { label: 'Compatibilità', value: 'Ideale per sostituzioni su cassonetti esistenti' }
        ]
      },
      'Orienta & New Solar': {
        brand: 'Plasticino',
        name: 'Tapparelle Frangisole Orienta & New Solar',
        image: '/profili/plasticino-orienta.jpg',
        description:
          'Sistemi innovativi a metà tra tapparella e persiana frangisole: permettono di orientare o distanziare le stecche per dosare luce naturale e ricambio d’aria mantenendo privacy e sicurezza.',
        note: 'Si installano nelle stesse guide di un normale avvolgibile.',
        specs: [
          { label: 'Modelli', value: 'Orienta (stecche orientabili) · New Solar (frangisole)' },
          { label: 'Funzione', value: 'Regolazione luce, aerazione e protezione solare' },
          { label: 'Sicurezza', value: 'Versioni antieffrazione con blocco stecche' }
        ]
      },
      'Motori Somfy': {
        brand: 'Somfy',
        name: 'Motori Somfy per Tapparelle',
        image: '/immagineProdottolsomfy.webp',
        description:
          'Motorizzazioni tubolari Somfy silenziose e durature per automatizzare singole tapparelle o l’intera abitazione con comandi centralizzati a muro, telecomando o domotica.',
        note: 'Rilevamento ostacoli e blocco antisollevamento su versioni dedicate.',
        specs: [
          { label: 'Silenziosità', value: 'Movimentazione fluida e discreta' },
          { label: 'Controllo', value: 'Pulsante a parete, telecomando o scenario centralizzato' },
          { label: 'Affidabilità', value: 'Qualità e garanzia Somfy' }
        ]
      }
    }
  }
};
