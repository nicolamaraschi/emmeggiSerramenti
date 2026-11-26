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
