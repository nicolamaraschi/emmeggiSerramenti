export const productsData = {
  'alluminio': {
    title: 'Serramenti Alluminio',
    category: 'Infissi',
    headline: 'Finestre e porte-finestre in alluminio',
    subtitle: 'Serramenti alluminio; linee eleganti, prestazioni perfette',
    description: [
      "Le serie AluK per finestre a battente (C67K, INFINEO C67K-M, C77K e C77K-CS con anta nascosta), gli scorrevoli ad alte prestazioni (Nuovo SC156-HI, S140 e S140R) e le porte d'ingresso Secure-K riassumono la ricerca e l'esperienza del marchio ALUK nel settore dei serramenti in alluminio.",
      "Una sintesi di design, tecnologia, qualità componentistiche che rende questo prodotto unico per comfort acustico e termico, con soluzioni avanzate per il benessere della vostra abitazione. Non ultimo pensati per proteggervi da intrusioni indesiderate con sistemi di antieffrazione e antiscasso.",
      "Tutti i prodotti ALUK sono disponibili in una vasta gamma di colori e finiture, certificati e testati secondo le più severe norme e leggi vigenti in Europa."
    ],
    image: '/alluminio-preview.webp',
    sidebar: [
      {
        title: 'Serie per finestre e porte finestre',
        items: ['Aluk C67K', 'INFINEO C67K-M', 'C77K', 'C77K-CS']
      },
      {
        title: 'Serie per scorrevoli',
        items: ['Nuovo SC156-HI', 'S140 e S140R']
      },
      {
        title: 'Serie per portoncini e porte',
        items: ['Porte Secure-K']
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
      'INFINEO C67K-M': {
        brand: 'AluK Group',
        name: 'INFINEO C67K-M',
        image: '/profili/aluk-infineo-c67km.jpg',
        description:
          'La serie a battente Infineo C67K-M è studiata per realizzare infissi di qualità, con dimensioni e pesi importanti, ad elevate prestazioni per isolamento termico e acustico, permeabilità all’aria e tenuta all’acqua. Presenta una vista frontale minimale ridotta a soli 65 mm circa per le sezioni perimetrali e un nodo centrale con soluzione T+Z di ridotto ingombro frontale.',
        note: 'Utilizzabile esclusivamente con cerniere di tipo nascosto della gamma accessori “K”. Disponibile nelle varianti estetiche Linea Standard e Linea Ferro.',
        specs: [
          { label: 'Vista Frontale', value: 'Minimale ridotta a ~65 mm · Nodo centrale T+Z slim' },
          { label: 'Ferramenta', value: 'Esclusivamente con cerniere nascoste gamma accessori “K”' },
          { label: 'Varianti Estetiche', value: 'Linea Standard e Linea Ferro' }
        ]
      },
      'C77K': {
        brand: 'AluK Group',
        name: 'C77K',
        image: '/profili/aluk-c77k-profilo.jpg',
        description:
          'Finestre in stile tradizionale e universale con anta visibile per offrire una scelta più ampia di vetri e opzioni. Adatta sia a nuove abitazioni sia a ristrutturazioni, garantisce le massime prestazioni in conformità con le più severe normative sul risparmio energetico e consente di realizzare grandi dimensioni.',
        note: 'Verniciabile in qualunque colore, anche bicolore interno/esterno. Compatibile con le nuove maniglie NOVAE.',
        specs: [
          { label: 'Profondità Profili', value: 'Telaio 77 mm · Anta 87 mm' },
          { label: 'Isolamento', value: 'Prestazioni termiche e acustiche ai vertici per ogni zona climatica' },
          { label: 'Personalizzazione', value: 'Ampio spessore vetro (anche triplo) · Maniglie NOVAE' }
        ]
      },
      'C77K-CS': {
        brand: 'AluK Group',
        name: 'C77K-CS Finestre con anta nascosta',
        image: '/profili/aluk-c77k-cs.jpg',
        description:
          'Sistema ad anta nascosta in cui la parte mobile della finestra scompare dietro il telaio fisso, aumentando sensibilmente la superficie vetrata e la luce naturale. Ha una mostra frontale tra le più ridotte sul mercato (nodo laterale 74 mm), senza rinunciare a prestazioni, sicurezza e facilità d’uso.',
        note: 'Adatta sia a nuove costruzioni che a riqualificazioni. Ossidabile o verniciabile bicolore e compatibile con maniglie NOVAE.',
        specs: [
          { label: 'Estetica', value: 'Anta nascosta dietro il telaio · Nodo laterale di soli 74 mm' },
          { label: 'Luminosità', value: 'Superficie vetrata maggiorata anche su grandi dimensioni' },
          { label: 'Finiture & Accessori', value: 'Bicolore interno/esterno · Maniglie di design NOVAE' }
        ]
      },
      'Nuovo SC156-HI': {
        brand: 'AluK Group',
        name: 'Nuovo SC156-HI',
        image: '/profili/aluk-sc156-hi.jpg',
        description:
          'Il nuovo sistema alzante-scorrevole ad alte prestazioni di riferimento per il mercato. Progettato per grandi vetrate panoramiche con elevate portate, unisce isolamento termico e acustico di livello superiore, nodo centrale slim da 50 mm e soglia ribassata per la massima continuità tra interno ed esterno.',
        note: 'Soluzione top di gamma AluK per aperture panoramiche ad alta efficienza energetica.',
        specs: [
          { label: 'Tipologia', value: 'Alzante-scorrevole ad alte prestazioni (High Insulation)' },
          { label: 'Design & Soglia', value: 'Nodo centrale slim 50 mm · Soglia piana ribassata 23 mm' },
          { label: 'Portata', value: 'Fino a 500 kg per anta per grandi specchiature vetrate' }
        ]
      },
      'S140 e S140R': {
        brand: 'AluK Group',
        name: 'S140 e S140R',
        image: '/profili/aluk-s140.jpg',
        description:
          'Sistema ad elevate prestazioni e design elegante per porte e finestre con meccanismo alzante-scorrevole o scorrevole, per la massima qualità e comfort. Il nodo centrale ultrasottile da 44 mm aumenta la superficie vetrata e valorizza la luce naturale degli ambienti.',
        note: 'Configurabile a 1, 2 o 3 binari sia in versione scorrevole sia alzante-scorrevole.',
        specs: [
          { label: 'Tipologia', value: 'Scorrevole e alzante-scorrevole (versioni S140 e S140R)' },
          { label: 'Mostra Frontale', value: 'Nodo centrale ultrasottile da 44 mm per maggiore luminosità' },
          { label: 'Configurazioni', value: '1, 2 o 3 binari con elevate prestazioni termiche e di tenuta' }
        ]
      },
      'Porte Secure-K': {
        brand: 'AluK Group',
        name: 'Porte Secure-K',
        image: '/profili/aluk-secure-k.jpg',
        description:
          'La porta d’ingresso Secure-K è un prodotto di altissima qualità e design, con grandi possibilità di personalizzazione estetica e funzionale. Progettata per offrire elevato isolamento termico e acustico, stabilità dimensionale grazie a giunti di dilatazione brevettati e massima sicurezza antieffrazione.',
        note: 'Configurabile fino alla Classe antieffrazione RC3 con tracciabilità dedicata AluK UNIX.',
        specs: [
          { label: 'Sicurezza', value: 'Certificazione antieffrazione fino alla Classe RC3' },
          { label: 'Isolamento Termico', value: 'Ud fino a 0,6 W/m²K con giunti di dilatazione brevettati' },
          { label: 'Personalizzazione', value: 'Ampia gamma pannelli, finiture, maniglioni e luci laterali' }
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
        profileImage: '/profili/fossati-icon-profilo.jpg',
        profileImageLabel: 'Sezione Profilo Icon 76 mm',
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
        items: ['45V', 'BSF70']
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
      }
    }
  },
  'pergole': {
    title: 'Pergole',
    category: 'Infissi',
    headline: 'Pergole',
    subtitle: 'Pergola Bioclimatica Pallazzo® in alluminio',
    description: [
      "Pallazzo® è una pergola bioclimatica a lamelle orientabili dal design pulito ed elegante, progettata per poter godere degli spazi esterni in qualsiasi stagione dell'anno. Le lamelle sono regolabili in diverse posizioni e permettono di proteggere gli occupanti sia dai raggi solari che in caso di pioggia.",
      "La struttura è stata studiata per un'installazione semplice e veloce ed è interamente realizzata in estruso di alluminio, per offrire robustezza e durabilità nel tempo.",
      "Il sistema motorizzato delle lamelle, azionabile da telecomando, è completamente a scomparsa nella struttura, particolarmente silenzioso e consente un'ampia rotazione delle lamelle (lunghezza massima fino a 4 m, lunghezza pergola fino a 6 m)."
    ],
    image: '/profili/aluk-pallazzo.jpg',
    sidebar: [
      {
        title: 'Pergole Bioclimatiche AluK',
        items: ['Pergola Pallazzo']
      }
    ],
    profileDetails: {
      'Pergola Pallazzo': {
        brand: 'AluK Group',
        name: 'Pergola Bioclimatica Pallazzo®',
        image: '/profili/aluk-pallazzo.jpg',
        description:
          'Pergola bioclimatica a lamelle orientabili dal design pulito ed elegante, realizzata interamente in estruso di alluminio per vivere gli spazi esterni in ogni stagione proteggendo sia dal sole sia dalla pioggia.',
        note: 'Sistema motorizzato a scomparsa nella struttura, silenzioso e azionabile comodamente da telecomando.',
        specs: [
          { label: 'Struttura', value: 'Estruso di alluminio ad alta durabilità · Installazione rapida' },
          { label: 'Dimensioni Max', value: 'Lamelle fino a 4 m · Lunghezza pergola fino a 6 m' },
          { label: 'Automazione', value: 'Motore a scomparsa silenzioso con telecomando · Lamelle orientabili' }
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
      { title: 'Metalport', items: ['Serie M2', 'Serie SIKUR', 'Serie BLINDO'] }
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
      { title: 'Persiane alluminio AluK', items: ['Classica', 'Storica', 'Scorrevole', 'Scurone'] },
      { title: 'Oscuranti Fossati', items: ['Fossati - Giotto', 'Fossati - Raffaello', 'Fossati - Leonardo'] }
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
        image: '/profili/fossati-giotto.jpg',
        description:
          'Pannello oscurante cieco o dogato (verticale od orizzontale) per oscuramento totale, protezione termica aggiuntiva e maggiore robustezza strutturale.',
        note: 'Perfetto sia per case indipendenti sia per contesti rustici o alpini.',
        specs: [
          { label: 'Oscuramento', value: 'Totale, con doghe verticali o orizzontali' },
          { label: 'Struttura', value: 'Alluminio rinforzato ad alta stabilità' },
          { label: 'Configurazioni', value: 'A battente, a libro o su cardini a muro' }
        ]
      },
      'Fossati - Giotto': {
        brand: 'Fossati Serramenti',
        name: 'Antone Dogato Giotto',
        image: '/profili/fossati-giotto.jpg',
        description:
          'Antone dogato in alluminio verniciato con intelaiatura portante nascosta sul lato esterno per un risultato visivo pulito ed elegante. Doghe disponibili in orientamento verticale o orizzontale.',
        note: 'Classicità senza tempo con profili estrusi di alta qualità.',
        specs: [
          { label: 'Tipologia', value: 'Antone dogato cieco in alluminio verniciato' },
          { label: 'Design', value: 'Intelaiatura portante nascosta sul lato esterno' },
          { label: 'Finiture', value: 'Colori RAL opachi/ruvidi ed effetto legno sublimati' }
        ]
      },
      'Fossati - Raffaello': {
        brand: 'Fossati Serramenti',
        name: 'Persiana Raffaello',
        image: '/profili/fossati-raffaello.jpg',
        description:
          'Il sistema di oscuranti in alluminio più completo di Fossati: disponibile con stecca aperta fissa, orientabile o storica, oppure con doghe verticali o orizzontali intelaiate nel profilo perimetrale.',
        note: 'Massima versatilità architettonica per ogni contesto.',
        specs: [
          { label: 'Lamelle', value: 'Stecca aperta fissa, orientabile, storica o doghe' },
          { label: 'Struttura', value: 'Profili in alluminio estruso ad alta resistenza' },
          { label: 'Finiture', value: 'Ampia scelta RAL ed effetto legno' }
        ]
      },
      'Fossati - Leonardo': {
        brand: 'Fossati Serramenti',
        name: 'Persiana Scorrevole Leonardo',
        image: '/profili/fossati-leonardo.jpg',
        description:
          'Oscurante scorrevole in alluminio disponibile sia a scorrimento esterno muro (con binario e mantovana superiore) sia a scorrimento a scomparsa interno muro.',
        note: 'Squadrette angolari rinforzate in lega di alluminio pressofuso.',
        specs: [
          { label: 'Apertura', value: 'Scorrevole esterno muro o a scomparsa interno muro' },
          { label: 'Meccanica', value: 'Binario superiore con mantovana o guida a scomparsa' },
          { label: 'Durata', value: 'Componenti resistenti agli agenti atmosferici' }
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
      {
        title: 'ProArt — Scuri & Persiane Blindate',
        items: [
          'Scuri Blindati Pivot',
          'Scuri Blindati Slide OutWall',
          'Scuri Blindati Slide InBox',
          'Scuri Blindati Slide InShade'
        ]
      },
      { title: 'Persiane In Acciaio', items: ['Persiana Blindata in Acciaio'] }
    ],
    profileDetails: {
      'Scuri Blindati Pivot': {
        brand: 'ProArt · Alladin®',
        name: 'Scuri Blindati Pivot (Battente / Pacchetto / Libro)',
        image: '/profili/proart-scuri-pivot.jpg',
        description:
          'Scuro e persiana blindata ProArt con profilo strutturale Elegant 30/10 mm, sistema integrato One-Block, cardini saldati con rotazione su cuscinetti a sfera e perni di bloccaggio regolabili Ø 18 mm.',
        note: 'Disponibile in Collezione Persiane (Stecca ovale / storica) e Collezione Dogati (verticale / orizzontale).',
        specs: [
          { label: 'Struttura & Sicurezza', value: 'Profilo a "C" 45/10 mm · Sistema One-Block · Perno Ø 18 mm' },
          { label: 'Aperture', value: '1–4 ante a battente, a pacchetto o a libro' },
          { label: 'Serratura & Finiture', value: 'Cilindro europeo Iseo · Verniciatura Triplex nebbie saline' }
        ]
      },
      'Scuri Blindati Slide OutWall': {
        brand: 'ProArt · Alladin®',
        name: 'Scuri Blindati Slide OutWall',
        image: '/profili/proart-scuri-outwall.jpg',
        description:
          'Scuro blindato scorrevole esterno muro completo di mantovana superiore e sistema appeso One-Block con guida inferiore in tubolare. Ideale per facciate moderne senza ingombro di apertura.',
        note: 'Disponibile a 1 o 2 ante in versione Dogato o Persiana.',
        specs: [
          { label: 'Apertura', value: 'Scorrevole esterno muro con mantovana e sistema appeso' },
          { label: 'Sicurezza', value: 'Profilo a "C" 45/10 mm · Serratura cilindro europeo Iseo' },
          { label: 'Verniciatura', value: 'Certificata e testata alle nebbie saline (Triplex)' }
        ]
      },
      'Scuri Blindati Slide InBox': {
        brand: 'ProArt · Alladin®',
        name: 'Scuri Blindati Slide InBox',
        image: '/profili/proart-scuri-inbox.jpg',
        description:
          'Scuro blindato scorrevole a scomparsa in controcassa interna muro, studiato per garantire la massima pulizia architettonica della facciata mantenendo la sicurezza strutturale ProArt.',
        note: 'Ruote su cuscinetti ad alta portata e guida inferiore One-Block.',
        specs: [
          { label: 'Apertura', value: 'Scorrevole a scomparsa interno muro (InBox)' },
          { label: 'Meccanica', value: 'Ruote su cuscinetti · Guida inferiore One-Block' },
          { label: 'Design', value: 'Doghe verticali/orizzontali o stecca ovale/storica' }
        ]
      },
      'Scuri Blindati Slide InShade': {
        brand: 'ProArt · Alladin®',
        name: 'Scuri Blindati Slide InShade',
        image: '/profili/proart-scuri-inshade.jpg',
        description:
          'Scuro blindato scorrevole progettato per l’inserimento in vani esistenti e contesti storici, con guida superiore incassata, guida inferiore One-Block e montaggio su cuscinetti.',
        note: 'Soluzione ideale per ristrutturazioni in centri storici.',
        specs: [
          { label: 'Apertura', value: 'Scorrevole in luce su vani esistenti' },
          { label: 'Binario', value: 'Guida superiore incassata + guida inferiore One-Block' },
          { label: 'Sicurezza', value: 'Profilo a "C" 45/10 mm · Serratura cilindro europeo Iseo' }
        ]
      },
      'Persiana Blindata in Acciaio': {
        brand: 'Sicurezza in Acciaio',
        name: 'Persiana Blindata in Acciaio Zincato',
        image: '/profili/persiana-blindata-acciaio.jpg',
        description:
          'Persiana di sicurezza realizzata interamente in acciaio zincato verniciato a polvere per esterni, con ovaline antistrappo, rostri fissi lato cerniere e serratura a triplice espansione.',
        note: 'Disponibile a battente, a libro o con telaio perimetrale rinforzato.',
        specs: [
          { label: 'Materiale', value: 'Acciaio zincato verniciato a forno (RAL o effetto legno)' },
          { label: 'Sicurezza', value: 'Rostri antistrappo, perni antitaglio e serratura triplice' },
          { label: 'Lamelle', value: 'Fisse o orientabili con anima in acciaio' }
        ]
      }
    }
  },
  'inferriate': {
    title: 'Inferriate',
    category: 'Complementari',
    headline: 'Inferriate di Sicurezza',
    subtitle: 'Protezione discreta e design',
    description: [
      "Soluzioni per la sicurezza della tua casa, progettate per integrarsi perfettamente con lo stile architettonico senza rinunciare alla massima protezione contro i tentativi di intrusione."
    ],
    image: '/profili/proart-grata-trend.jpg',
    sidebar: [
      {
        title: 'ProArt — Collezioni Grate',
        items: [
          'Collezione Trend',
          'Collezione Storica',
          'Collezione Liberty',
          'Collezione Luxury'
        ]
      },
      {
        title: 'ProArt — Sistemi di Apertura',
        items: [
          'Grata Cardine & Dual',
          'Grata Pivot & Slide'
        ]
      }
    ],
    profileDetails: {
      'Collezione Trend': {
        brand: 'ProArt · Alladin®',
        name: 'Grate Collezione Trend',
        image: '/profili/proart-grata-trend.jpg',
        description:
          'La nuova generazione della sicurezza minimalista: profili puliti, saldature su linea quadrata e ingombri contenuti per ambienti moderni. Modelli: Semplice, Trend, Blade, Axis, Alida e Alladin Decor.',
        note: 'Disponibile per finestre e portefinestre con sistema anti-effrazione certificato.',
        specs: [
          { label: 'Modelli', value: 'Semplice, Trend, Blade, Axis, Alida, Alladin Decor' },
          { label: 'Struttura', value: 'Profilo Classic 15/10 mm o Elegant 30/10 mm' },
          { label: 'Finiture', value: 'Verniciatura a forno certificata anti-corrosione (Triplex)' }
        ]
      },
      'Collezione Storica': {
        brand: 'ProArt · Alladin®',
        name: 'Grate Collezione Storica',
        image: '/profili/proart-grata-storica.jpg',
        description:
          'Semplicità funzionale e forme geometriche collaudate – tondi, quadri e decori classici evergreen. Include: Alba, Matilde, Ambra, Arrigo, India, Inglese, Visconteo, Brand, Stilo, Pantografo, Rombi, Milanesio e Oscar.',
        note: 'Ante intere brevettate Alladin® senza snodi che spezzano il disegno.',
        specs: [
          { label: 'Modelli Principali', value: 'Alba, Arrigo, India, Inglese, Visconteo, Pantografo, Rombi' },
          { label: 'Sicurezza', value: 'Perno di bloccaggio Ø 18 mm e cardini su cuscinetti' },
          { label: 'Normativa', value: 'Conforme ai requisiti assicurativi ANIA' }
        ]
      },
      'Collezione Liberty': {
        brand: 'ProArt · Alladin®',
        name: 'Grate Collezione Liberty',
        image: '/profili/proart-grata-liberty.jpg',
        description:
          'Leggerezza e arredo con un tocco vintage che armonizza robustezza funzionale e decori di ispirazione Liberty. Modelli: Sforza, Fiore, Noce, Impero, Cerchi e Tulipano.',
        note: 'Ideale per ville d’epoca, contesti storici e facciate classiche.',
        specs: [
          { label: 'Modelli', value: 'Sforza, Fiore, Noce, Impero, Cerchi, Tulipano' },
          { label: 'Lavorazione', value: 'Assemblaggio robotizzato ad alta precisione, saldature invisibili' },
          { label: 'Aperture', value: 'Cardine, Dual, Sbalzo, Pivot, Slide o Fissa' }
        ]
      },
      'Collezione Luxury': {
        brand: 'ProArt · Alladin®',
        name: 'Grate Collezione Luxury',
        image: '/profili/proart-grata-luxury.jpg',
        description:
          'Linea esclusiva ad alto valore estetico per valorizzare ingressi e grandi vetrate senza rinunciare alla massima protezione. Modelli: Ferri, Storico, Mosaico e Salisburghese.',
        note: 'Design ricercato personalizzabile su misura per finestre e portefinestre.',
        specs: [
          { label: 'Modelli', value: 'Ferri, Storico, Mosaico, Salisburghese' },
          { label: 'Struttura', value: 'Profilo strutturale rinforzato con sistema One-Block' },
          { label: 'Protezione', value: 'Trattamento supplementare Triplex anti-nebbie saline' }
        ]
      },
      'Grata Cardine & Dual': {
        brand: 'ProArt · Alladin®',
        name: 'Sistemi Grata Cardine, Dual & Sbalzo',
        image: '/profili/inferriata-sicurezza.jpg',
        description:
          'Sistemi di apertura a battente con cardini su cuscinetti a sfera: Classic Grata Cardine, Grata Dual / Dual Jolly (apertura interna ed esterna anche in presenza di persiane) e Grata Sbalzo.',
        note: 'Possibilità di sportello alla genovese e zanzariera plissettata o magnetica integrata.',
        specs: [
          { label: 'Sistemi', value: 'Grata Cardine · Grata Dual / Dual Jolly · Grata Sbalzo' },
          { label: 'Meccanica', value: 'Cardini saldati su cuscinetti · Perno regolabile Ø 18 mm' },
          { label: 'Optional', value: 'Sportello alla genovese · Zanzariera integrabile' }
        ]
      },
      'Grata Pivot & Slide': {
        brand: 'ProArt · Alladin®',
        name: 'Sistemi Grata Pivot & Slide',
        image: '/profili/proart-grata-trend.jpg',
        description:
          'Soluzioni scorrevoli e a bilico per ottimizzare gli spazi: Grata Pivot, Grata Slide InBox (a scomparsa), Slide OutWall (esterno muro) e Slide InFrame, oltre a versioni Fissi e Spanciati.',
        note: 'Sistema di chiusura strutturale integrata One-Block.',
        specs: [
          { label: 'Sistemi', value: 'Grata Pivot · Slide InBox / OutWall / InFrame · Fissi e Spanciati' },
          { label: 'Struttura', value: 'Profilo Elegant 30/10 mm con guida One-Block' },
          { label: 'Sicurezza', value: 'Serratura cilindro europeo con rostri antistrappo' }
        ]
      }
    }
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
      },
      'Susy Elite': {
        brand: 'Zanzar Sistem',
        name: 'Zanzariera Susy Elite',
        image: '/profili/zanzar-susy.jpg',
        description:
          'Zanzariera avvolgibile laterale a molla per porte e portefinestre con cassonetto da 50 mm, chiusura magnetica integrata e guida inferiore ribassata asportabile e calpestabile da soli 15 mm.',
        note: 'Disponibile a 1 o 2 ante, anche con freno rallentatore Adagio e rete Sunox antibatterica.',
        specs: [
          { label: 'Ingombro Cassonetto', value: '50 mm · Guida inferiore calpestabile 15 mm' },
          { label: 'Chiusura', value: 'Magnetica a tutta altezza per perfetta aderenza' },
          { label: 'Rete', value: 'Fibra di vetro, a fasce alta visibilità o Sunox antibatterica' }
        ]
      },
      'Beta': {
        brand: 'Bettio & Zanzar',
        name: 'Zanzariera Laterale Beta',
        image: '/profili/bettio-miniscenica.jpg',
        description:
          'Zanzariera laterale avvolgibile a molla per portefinestre caratterizzata da un elegante cassonetto stondato, completamente reversibile e dotata di cuffie telescopiche per una posa perfetta.',
        note: 'Disponibile a battente singolo o doppio con blocco anta e frizione opzionale.',
        specs: [
          { label: 'Design', value: 'Cassonetto stondato con movimento laterale fluido' },
          { label: 'Installazione', value: 'Reversibile destra/sinistra con cuffie telescopiche' },
          { label: 'Configurazione', value: '1 anta o 2 ante con frizione rallentata opzionale' }
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
          'Motori tubolari Somfy (gamma Altus RTS / Altus io e LT) silenziosi, certificati IP44 e progettati per aprire e chiudere tende da sole con comando a parete Smoove, telecomando Situo / Telis o app TaHoma® switch.',
        note: 'Compatibili con sensori automatici vento e sole e integrazione Alexa / Google Assistant.',
        specs: [
          { label: 'Motorizzazioni', value: 'Gamma Altus RTS / io (4–100 Nm) e LT 50/60 · IP44' },
          { label: 'Controllo', value: 'Comandi a parete Smoove, telecomandi Situo / Telis, TaHoma® switch' },
          { label: 'Automazione', value: 'Finecorsa elettronici, sensori vento/sole e programmazione oraria' }
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
      { title: 'Avvolgibili Plasticino', items: ['Tapparelle in Acciaio', 'Tapparelle in Alluminio', 'Tapparelle in PVC', 'Orienta & New Solar', 'Guide & Scorrimento'] },
      { title: 'Motorizzazioni', items: ['Motori Somfy'] }
    ],
    profileDetails: {
      'Tapparelle in Acciaio': {
        brand: 'Plasticino',
        name: 'Avvolgibili in Acciaio Coibentato',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Teli avvolgibili in acciaio coibentato ad alta densità (profili Plasticino serie A01, A10, A18, A40) per chi cerca la massima resistenza meccanica, protezione antieffrazione e durata nel tempo.',
        note: 'Certificati CE EN 13659 con 3 anni di garanzia e compatibilità con guide in acciaio o alluminio estruso.',
        specs: [
          { label: 'Profili & Stecche', value: 'Acciaio coibentato A01/A10 (14×50 mm), A18 (13,5×55 mm), A40 (13,5×57 mm)' },
          { label: 'Sicurezza', value: 'Elevata resistenza antieffrazione, grandine e vento' },
          { label: 'Movimentazione', value: 'Manuale o motorizzata Somfy Altus / Oximo / LT' }
        ]
      },
      'Tapparelle in Alluminio': {
        brand: 'Plasticino',
        name: 'Avvolgibili in Alluminio',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Soluzione leggera, indeformabile e resistente agli agenti atmosferici (stecche Plasticino serie TA01, TA10, TA15, TA25). L’alluminio coibentato offre ottimo isolamento termico e acustico con zero manutenzione.',
        note: 'Disponibili in numerose finiture anodizzate, tinta unita RAL ed effetto legno.',
        specs: [
          { label: 'Profili & Stecche', value: 'Alluminio coibentato TA10 (13×45 mm), TA01/TA15/TA25 (13×55 mm)' },
          { label: 'Manutenzione', value: 'Nulla, inalterabile al sole e alle intemperie · CE EN 13659' },
          { label: 'Installazione', value: 'Su guide in alluminio estruso 30×25×30 o 28×19×28 con spazzolino antivento' }
        ]
      },
      'Tapparelle in PVC': {
        brand: 'Plasticino',
        name: 'Avvolgibili in PVC',
        image: '/profili/plasticino-avvolgibili.jpg',
        description:
          'Leggeri, isolanti ed economici, i teli avvolgibili in PVC Plasticino resistono agli agenti atmosferici senza richiedere verniciatura o manutenzione.',
        note: 'Ottimo isolamento termico e ampia gamma colori; ideali per sostituzioni su guide esistenti.',
        specs: [
          { label: 'Materiale', value: 'PVC estruso di alta qualità certificato CE EN 13659' },
          { label: 'Vantaggi', value: 'Leggerezza, isolamento termico e zero verniciatura' },
          { label: 'Compatibilità', value: 'Guide ribassate 28×17×28 o standard da sostituzione 28×19×28' }
        ]
      },
      'Orienta & New Solar': {
        brand: 'Plasticino',
        name: 'Tapparelle Frangisole Orienta & New Solar',
        image: '/profili/plasticino-orienta.jpg',
        description:
          'Sistemi innovativi a metà tra tapparella e persiana frangisole: permettono di orientare o distanziare le stecche per dosare luce naturale e ricambio d’aria mantenendo privacy e sicurezza.',
        note: 'Scorrono in guide dedicate Orienta GOSF/GOSB (30,8×26,6×30,8 mm) con spazzolino e spaccatura.',
        specs: [
          { label: 'Modelli', value: 'Orienta (stecche orientabili) · New Solar (frangisole)' },
          { label: 'Guide Dedicate', value: 'Estruso Orienta GOSF (finestra) / GOSB (portafinestra) 30,8×26,6×30,8 mm' },
          { label: 'Sicurezza', value: 'Versioni antieffrazione con blocco stecche e regolazione luce/aria' }
        ]
      },
      'Guide & Scorrimento': {
        brand: 'Plasticino',
        name: 'Apparati di Scorrimento & Guide',
        image: '/profili/plasticino-guide.jpg',
        description:
          'Guide in alluminio estruso anodizzato o verniciato RAL, ferro zincato e acciaio inox complete di spaccatura, foratura su misura e spazzolino antivento per scorrimento silenzioso e stabile.',
        note: 'Disponibili per incasso, esterno muro, sostituzione (28×19×28), ribassate (28×17×28) e versioni a sporgere.',
        specs: [
          { label: 'Alluminio Estruso', value: 'Sezioni 30×25×30 (standard), 28×19×28 (sostituzione), 28×17×28 (ribassata)' },
          { label: 'Acciaio & Inox', value: 'Guide in ferro zincato o acciaio inox con spazzolino antivento' },
          { label: 'Finiture', value: 'Argento, Bronzo, Elox, Bianco, Avorio, Verde, Marrone e RAL a richiesta' }
        ]
      },
      'Motori Somfy': {
        brand: 'Somfy',
        name: 'Motori Somfy per Tapparelle',
        image: '/profili/somfy-tapparelle.jpg',
        profileImage: '/immagineProdottolsomfy.webp',
        profileImageLabel: 'Motore tubolare Somfy (dettaglio)',
        description:
          'Motorizzazioni tubolari Somfy (Altus RTS / io, LT 50/60/80 e Oximo WireFree) certificate IP44 con finecorsa elettronici e tempo termico di protezione, comandabili da pulsante a muro Smoove, telecomando Situo / Telis o app smart TaHoma® switch.',
        note: 'Possibilità di controllo centralizzato, programmazione oraria e comandi vocali Alexa / Google Assistant.',
        specs: [
          { label: 'Serie Motori', value: 'Altus RTS / io (4–100 Nm) · LT 50/60/80 · Oximo WireFree · IP44' },
          { label: 'Comandi & Smart', value: 'Smoove a parete · Situo 1/5 & Telis 6/16 · Hub TaHoma® switch' },
          { label: 'Sicurezza', value: 'Protezione termica 4 min, finecorsa elettronici e blocco antisollevamento' }
        ]
      }
    }
  }
};
