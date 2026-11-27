import { productsData } from './products';

export const PRODUCT_GROUPS = [
  {
    category: 'Infissi',
    slugs: ['serramenti-in-pvc', 'alluminio', 'alluminio-e-legno', 'verande', 'pergole'],
  },
  {
    category: 'Porte',
    slugs: ['porte-blindate', 'porte-interne'],
  },
  {
    category: 'Persiane',
    slugs: ['persiane-alluminio', 'persiane-blindate'],
  },
  {
    category: 'Complementari',
    slugs: ['inferriate', 'zanzariere', 'tende-da-sole', 'tapparelle'],
  },
].map((group) => ({
  category: group.category,
  items: group.slugs
    .filter((slug) => productsData[slug])
    .map((slug) => ({
      slug,
      label: productsData[slug].title,
      category: productsData[slug].category,
      image: productsData[slug].image,
      subtitle: productsData[slug].subtitle || productsData[slug].headline,
    })),
}));

export const COLOR_OPTIONS = [
  'Bianco',
  'Bianco interno / Effetto legno esterno',
  'Effetto Legno',
  'RAL Standard',
  'Grigio Antracite / Bicolore',
  'Da definire in consulenza',
];

export const SERVICE_OPTIONS = [
  { id: 'consegna', label: 'Consegna' },
  { id: 'posa', label: 'Posa Qualificata' },
  { id: 'smaltimento', label: 'Smaltimento vecchi infissi' },
];

export const TYPOLOGY_OPTIONS_BY_CATEGORY = {
  Infissi: [
    'Finestre',
    'Porte balcone',
    'Porte scorrevoli',
    'Portoncini',
    'Verande',
    'Pergole bioclimatiche',
  ],
  Porte: [
    'Porta blindata ingresso',
    'Porta interna battente',
    'Porta interna scorrevole',
    'Porta interna in vetro',
  ],
  Persiane: [
    'Persiane a battente',
    'Persiane scorrevoli',
    'Persiane blindate',
    'Scuretti / Scuroni',
  ],
  Complementari: [
    'Inferriate fisse',
    'Inferriate apribili / snodate',
    'Zanzariere per finestre',
    'Zanzariere per porte / balcone',
    'Tende da sole a bracci',
    'Tende da sole a caduta / capottine',
    'Tapparelle manuali',
    'Tapparelle motorizzate (Motori Somfy)',
  ],
};

export const ALL_TYPOLOGIES = [
  'Finestre',
  'Porte balcone',
  'Porte scorrevoli',
  'Persiane',
  'Portoncini',
  'Porte blindate',
  'Porte interne',
  'Verande',
  'Pergole bioclimatiche',
  'Inferriate',
  'Zanzariere',
  'Tende da sole',
  'Tapparelle',
];

export const ANTE_OPTIONS = [
  '1 Anta',
  '2 Ante',
  '3 Ante',
  '4 Ante',
  'Scorrevole',
  'Fisso / Non applicabile',
];

const WINDOW_STEP2_CONFIG = {
  rowLabel: 'Serramento',
  typologies: ['Finestra', 'Portafinestra / Balcone', 'Scorrevole / Alzante', 'Portoncino', 'Vetrata fissa'],
  detailLabel: 'Ante / Apertura',
  details: ['1 Anta', '2 Ante', '3 Ante', '4 Ante', 'Scorrevole', 'Fisso'],
  widthPlaceholder: 'es. 120',
  heightPlaceholder: 'es. 140',
};

export const PRODUCT_STEP2_CONFIG = {
  'serramenti-in-pvc': WINDOW_STEP2_CONFIG,
  'alluminio': WINDOW_STEP2_CONFIG,
  'alluminio-e-legno': WINDOW_STEP2_CONFIG,
  'verande': {
    rowLabel: 'Veranda',
    typologies: ['Veranda a battente', 'Veranda pieghevole a libro (BSF70)', 'Chiusura per terrazzo / loggia'],
    detailLabel: 'Configurazione',
    details: ['2 Ante', '3 Ante', '4+ Ante / Panoramica', 'A libro', 'Fisso + Apribile'],
    widthPlaceholder: 'es. 300',
    heightPlaceholder: 'es. 240',
  },
  'pergole': {
    rowLabel: 'Pergola',
    typologies: ['Pergola bioclimatica Pallazzo®'],
    detailLabel: 'Installazione',
    details: ['Addossata a parete', 'Autoportante', 'Con chiusure laterali / LED'],
    widthPlaceholder: 'es. 400',
    heightPlaceholder: 'es. 350',
  },
  'porte-blindate': {
    rowLabel: 'Porta Blindata',
    typologies: ['Porta blindata ingresso (appartamento)', 'Porta blindata per esterno / villa', 'Porta blindata con fiancoluce / sopraluce'],
    detailLabel: 'Configurazione',
    details: ['1 Anta', '1 Anta + Fiancoluce', '2 Ante', 'Classe 3', 'Classe 4 (alta sicurezza)'],
    widthPlaceholder: 'es. 90',
    heightPlaceholder: 'es. 210',
  },
  'porte-interne': {
    rowLabel: 'Porta Interna',
    typologies: ['Porta battente', 'Porta scorrevole interno muro', 'Porta scorrevole esterno muro', 'Porta in vetro e alluminio'],
    detailLabel: 'Configurazione',
    details: ['1 Anta', '2 Ante', 'A libro', 'Filomuro'],
    widthPlaceholder: 'es. 80',
    heightPlaceholder: 'es. 210',
  },
  'persiane-alluminio': {
    rowLabel: 'Persiana',
    typologies: ['Persiana a battente (lamelle fisse)', 'Persiana a battente (lamelle orientabili)', 'Persiana scorrevole', 'Scurone / Antone dogato'],
    detailLabel: 'Ante / Fissaggio',
    details: ['1 Anta', '2 Ante', '3 Ante', '4 Ante', 'Scorrevole'],
    widthPlaceholder: 'es. 120',
    heightPlaceholder: 'es. 140',
  },
  'persiane-blindate': {
    rowLabel: 'Persiana / Scuro Blindato',
    typologies: ['Persiana blindata in acciaio', 'Scuro blindato Pivot', 'Scuro blindato scorrevole (Slide)'],
    detailLabel: 'Ante / Apertura',
    details: ['1 Anta', '2 Ante', '3 Ante', '4 Ante', 'Scorrevole / Pivot'],
    widthPlaceholder: 'es. 120',
    heightPlaceholder: 'es. 140',
  },
  'inferriate': {
    rowLabel: 'Inferriata',
    typologies: ['Inferriata fissa', 'Inferriata apribile (Cardine / Dual)', 'Inferriata scorrevole / Pivot'],
    detailLabel: 'Ante / Apertura',
    details: ['1 Anta', '2 Ante', '3 Ante', '4 Ante', 'Snodata con persiana', 'Fissa'],
    widthPlaceholder: 'es. 120',
    heightPlaceholder: 'es. 140',
  },
  'zanzariere': {
    rowLabel: 'Zanzariera',
    typologies: ['Zanzariera per finestra', 'Zanzariera per portafinestra / balcone'],
    detailLabel: 'Modello / Scorrimento',
    details: ['Laterale senza barriere (Scenica / Miniscenica)', 'Laterale a molla (1 anta)', 'Laterale 2 ante', 'Verticale a molla'],
    widthPlaceholder: 'es. 120',
    heightPlaceholder: 'es. 220',
  },
  'tende-da-sole': {
    rowLabel: 'Tenda da Sole',
    typologies: ['Tenda a bracci con cassonetto', 'Tenda a bracci senza cassonetto', 'Tenda a caduta verticale (TS115 / Zip)', 'Pergola bioclimatica'],
    detailLabel: 'Azionamento',
    details: ['Manuale ad argano', 'Motorizzata Somfy (telecomando)', 'Motorizzata Somfy + sensore vento/sole'],
    widthPlaceholder: 'es. 400',
    heightPlaceholder: 'es. 250',
  },
  'tapparelle': {
    rowLabel: 'Tapparella',
    typologies: ['Tapparella in Acciaio coibentato', 'Tapparella in Alluminio coibentato', 'Tapparella in PVC', 'Tapparella frangisole Orienta / New Solar'],
    detailLabel: 'Azionamento',
    details: ['Manuale (cinghia / argano)', 'Motorizzata Somfy (pulsante a parete)', 'Motorizzata Somfy (telecomando / TaHoma®)'],
    widthPlaceholder: 'es. 120',
    heightPlaceholder: 'es. 150',
  },
};

export function getStep2ConfigForProduct(slug) {
  return PRODUCT_STEP2_CONFIG[slug] || WINDOW_STEP2_CONFIG;
}

export const COLOR_OPTIONS_BY_PRODUCT = {
  'tende-da-sole': [
    'Tessuto chiaro / Bianco struttura',
    'Tessuto tortora / Grigio Antracite',
    'Tessuto rigato / Fantasia Tempotest',
    'Struttura RAL personalizzata',
    'Da definire in consulenza',
  ],
  'zanzariere': [
    'Bianco',
    'Grigio Antracite',
    'Bronzo / Marrone',
    'Argento / Anodizzato',
    'Effetto Legno',
    'Da definire in consulenza',
  ],
};

export function getColorSwatchStyle(label) {
  const lower = (label || '').toLowerCase();
  if (lower.includes('bianco') && lower.includes('legno')) {
    return { background: 'linear-gradient(135deg, #ffffff 50%, #9b6b43 50%)' };
  }
  if (lower.includes('bianco')) {
    return { background: '#ffffff' };
  }
  if (lower.includes('legno')) {
    return { background: 'linear-gradient(135deg, #c28e5c 0%, #8b5a2b 100%)' };
  }
  if (lower.includes('antracite') || lower.includes('tortora')) {
    return { background: 'linear-gradient(135deg, #4b5058 0%, #2b2e33 100%)' };
  }
  if (lower.includes('bronzo') || lower.includes('marrone')) {
    return { background: 'linear-gradient(135deg, #6e5241 0%, #443127 100%)' };
  }
  if (lower.includes('argento') || lower.includes('anodizzato')) {
    return { background: 'linear-gradient(135deg, #e2e5e9 0%, #aeb5be 100%)' };
  }
  if (lower.includes('ral')) {
    return { background: 'conic-gradient(#e65c00, #eab308, #22c55e, #3b82f6, #6b7280, #e65c00)' };
  }
  if (lower.includes('tempotest') || lower.includes('rigato')) {
    return { background: 'repeating-linear-gradient(90deg, #e8dfd1 0 5px, #b45309 5px 10px)' };
  }
  return { background: 'linear-gradient(135deg, #f3f1ed 0%, #e5e0d8 100%)' };
}

export const ITALIAN_PROVINCES = [
  'MI - Milano',
  'MB - Monza e Brianza',
  'PV - Pavia',
  'LO - Lodi',
  'VA - Varese',
  'CO - Como',
  'BG - Bergamo',
  'BS - Brescia',
  'CR - Cremona',
  'LC - Lecco',
  'MN - Mantova',
  'SO - Sondrio',
  'AG - Agrigento', 'AL - Alessandria', 'AN - Ancona', 'AO - Aosta', 'AR - Arezzo',
  'AP - Ascoli Piceno', 'AT - Asti', 'AV - Avellino', 'BA - Bari', 'BT - Barletta-Andria-Trani',
  'BL - Belluno', 'BN - Benevento', 'BI - Biella', 'BO - Bologna', 'BZ - Bolzano',
  'BR - Brindisi', 'CA - Cagliari', 'CL - Caltanissetta', 'CB - Campobasso', 'CE - Caserta',
  'CT - Catania', 'CZ - Catanzaro', 'CH - Chieti', 'CS - Cosenza', 'KR - Crotone',
  'CN - Cuneo', 'EN - Enna', 'FM - Fermo', 'FE - Ferrara', 'FI - Firenze',
  'FG - Foggia', 'FC - Forlì-Cesena', 'FR - Frosinone', 'GE - Genova', 'GO - Gorizia',
  'GR - Grosseto', 'IM - Imperia', 'IS - Isernia', 'SP - La Spezia', 'AQ - L\'Aquila',
  'LT - Latina', 'LE - Lecce', 'LI - Livorno', 'LU - Lucca', 'MC - Macerata',
  'MS - Massa-Carrara', 'MT - Matera', 'ME - Messina', 'MO - Modena', 'NA - Napoli',
  'NO - Novara', 'NU - Nuoro', 'OR - Oristano', 'PD - Padova', 'PA - Palermo',
  'PR - Parma', 'PG - Perugia', 'PU - Pesaro e Urbino', 'PE - Pescara', 'PC - Piacenza',
  'PI - Pisa', 'PT - Pistoia', 'PN - Pordenone', 'PZ - Potenza', 'PO - Prato',
  'RG - Ragusa', 'RA - Ravenna', 'RC - Reggio Calabria', 'RE - Reggio Emilia', 'RI - Rieti',
  'RN - Rimini', 'RM - Roma', 'RO - Rovigo', 'SA - Salerno', 'SS - Sassari',
  'SV - Savona', 'SI - Siena', 'SR - Siracusa', 'SU - Sud Sardegna', 'TA - Taranto',
  'TE - Teramo', 'TR - Terni', 'TO - Torino', 'TP - Trapani', 'TN - Trento',
  'TV - Treviso', 'TS - Trieste', 'UD - Udine', 'VE - Venezia', 'VB - Verbano-Cusio-Ossola',
  'VC - Vercelli', 'VR - Verona', 'VV - Vibo Valentia', 'VI - Vicenza', 'VT - Viterbo',
];
