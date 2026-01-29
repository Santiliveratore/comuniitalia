import { Village } from '../models/village.model';

export const VILLAGES_DATA: Village[] = [
  {
    id: 'castiglione',
    name: 'Castiglione del Lago',
    region: 'Umbria',
    country: 'Italia',
    population: 15000,
    description: 'Un gioiello medievale sulle rive del Lago Trasimeno, dove storia e natura si fondono in un\'armonia perfetta.',
    longDescription: 'Castiglione del Lago è una splendida cittadina umbra situata su un promontorio calcareo che domina le acque cristalline del Lago Trasimeno. Il suo centro storico medievale, perfettamente conservato, è dominato dall\'imponente Rocca del Leone e dal Palazzo della Corgna, testimonianze dell\'antico potere dei Della Corgna. Le strette vie lastricate, le piazzette nascoste e i panorami mozzafiato sul lago rendono questo borgo uno dei più affascinanti dell\'Italia centrale. La tradizione enogastronomica locale, con i suoi vini e l\'olio extravergine d\'oliva, completa l\'esperienza di un viaggio indimenticabile.',
    heroImage: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80',
    coatOfArms: 'assets/villages/castiglione/coat-of-arms.jpg',
    founded: '1247',
    altitude: 304,
    area: 205.54,
    coordinates: {
      lat: 43.1269,
      lng: 12.0497
    },
    gallery: [
      'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=80',
      'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&q=80',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
      'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=1200&q=80',
      'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80'
    ],
    experiences: [
      {
        id: 'rocca-leone',
        title: 'La Rocca del Leone',
        shortDescription: 'Esplora l\'imponente fortezza medievale con vista panoramica sul lago.',
        fullDescription: 'La Rocca del Leone è una delle più grandi fortezze medievali d\'Italia, costruita nel XIII secolo su ordine di Federico II di Svevia. Con le sue mura perimetrali che si estendono per oltre 300 metri e il suo maestoso mastio pentagonale alto 30 metri, la Rocca offre una testimonianza unica dell\'architettura militare medievale. Passeggiando lungo i camminamenti di ronda, potrete godere di viste spettacolari sul Lago Trasimeno e sulle dolci colline umbre. All\'interno, il cortile triangolare ospita spesso eventi culturali e rievocazioni storiche che riportano in vita l\'atmosfera del passato.',
        image: 'https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1553521041-d4b374c34596?w=800&q=80',
          'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=800&q=80',
          'https://images.unsplash.com/photo-1598532163257-ae3c6b2524g6?w=800&q=80'
        ],
        category: 'history',
        link: 'https://www.castiglionedellago.it/rocca-del-leone'
      },
      {
        id: 'palazzo-corgna',
        title: 'Palazzo della Corgna',
        shortDescription: 'Ammira gli affreschi rinascimentali nel palazzo ducale.',
        fullDescription: 'Il Palazzo della Corgna, noto anche come Palazzo Ducale, è un magnifico esempio di architettura rinascimentale commissionato da Ascanio della Corgna nel XVI secolo. L\'interno del palazzo è decorato con straordinari cicli di affreschi realizzati da Niccolò Circignani detto il Pomarancio e dal Salvio Savini, che narrano le gesta mitologiche ed eroiche della famiglia della Corgna. Le sale affrescate, tra cui la Sala delle Gesta di Ascanio e la Sala del Giudizio di Paride, rappresentano uno dei più importanti cicli pittorici del manierismo italiano.',
        image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&q=80',
          'https://images.unsplash.com/photo-1564429238909-4139e6eb3578?w=800&q=80'
        ],
        category: 'culture',
        link: 'https://www.castiglionedellago.it/palazzo-della-corgna'
      },
      {
        id: 'lago-trasimeno',
        title: 'Giro in Barca sul Lago',
        shortDescription: 'Naviga le acque tranquille del quarto lago più grande d\'Italia.',
        fullDescription: 'Il Lago Trasimeno, con i suoi 128 km² di superficie, è il quarto lago più grande d\'Italia e il più esteso dell\'Italia peninsulare. Le sue acque poco profonde e cristalline ospitano una ricca fauna ittica e numerose specie di uccelli. Un giro in barca vi permetterà di raggiungere le tre isole del lago: l\'Isola Maggiore, abitata da pochi residenti che mantengono vive le tradizioni dei pescatori, l\'Isola Minore, riserva naturale non accessibile, e l\'Isola Polvese, la più grande, oggi parco scientifico-didattico. Durante la navigazione, potrete ammirare panorami unici sulle colline umbre e toscane.',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
        ],
        category: 'nature',
        link: 'https://www.lagotrasimeno.net/navigazione'
      },
      {
        id: 'degustazione-vini',
        title: 'Degustazione Vini DOC',
        shortDescription: 'Scopri i sapori autentici dei vini del Trasimeno.',
        fullDescription: 'La zona del Lago Trasimeno vanta una tradizione vitivinicola millenaria, con vini DOC che esprimono tutto il carattere del territorio umbro. Le cantine locali producono eccellenti vini rossi dal Sangiovese e dal Gamay del Trasimeno, oltre a freschi vini bianchi da uve Grechetto e Trebbiano. Una degustazione guidata vi permetterà di scoprire i segreti della vinificazione locale, accompagnati da prodotti tipici come l\'olio extravergine d\'oliva DOP, i salumi di Cinta Senese e i formaggi pecorini. L\'esperienza si completa con la visita ai vigneti che si affacciano sul lago.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
        category: 'gastronomy',
        link: 'https://www.umbriatourism.it/vini-umbria'
      }
    ],
    contact: {
      email: 'info@comune.castiglionedellago.pg.it',
      phone: '+39 075 9658211',
      address: 'Piazza Gramsci, 1 - 06061 Castiglione del Lago (PG)',
      website: 'https://www.castiglionedellago.it'
    },
    socialMedia: {
      facebook: 'https://facebook.com/castiglionedellago',
      instagram: 'https://instagram.com/castiglionedellago'
    }
  },
  {
    id: 'alba',
    name: 'Alba',
    region: 'Piemonte',
    country: 'Italia',
    population: 31500,
    description: 'La capitale delle Langhe, terra di tartufi pregiati, vini nobili e paesaggi patrimonio UNESCO.',
    longDescription: 'Alba, conosciuta come la "Città delle Cento Torri", è il cuore pulsante delle Langhe piemontesi, un territorio di straordinaria bellezza riconosciuto Patrimonio dell\'Umanità UNESCO. Famosa in tutto il mondo per il suo prezioso tartufo bianco, Alba è anche la patria di alcuni dei vini più prestigiosi d\'Italia: il Barolo e il Barbaresco. Il centro storico medievale, con le sue torri, le chiese romaniche e le vie porticate, racconta secoli di storia e tradizioni. Ogni autunno, la Fiera Internazionale del Tartufo Bianco d\'Alba attira visitatori da tutto il mondo.',
    heroImage: 'https://www.civitatis.com/f/italia/alba/alba.jpg',
    coatOfArms: 'assets/villages/alba/coat-of-arms.png',
    founded: '89 a.C.',
    altitude: 172,
    area: 54.01,
    coordinates: {
      lat: 44.7000,
      lng: 8.0333
    },
    gallery: [
      'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/6db7b5a8b092d1a291930c5ea220e3251926cf5a34b3771b243b0f59254130cc.jpg',
      'https://media.istockphoto.com/id/598149898/photo/treiso.jpg?s=612x612&w=0&k=20&c=YOJJo6lFTlfmzi7zg0omBxpa5VVZhasCY-YIvi-_Y64=',
      'https://italian-traditions.com/wp-content/uploads/2022/10/le-torri-alba.jpeg',
      'https://girlsgottadrink.com/wp-content/uploads/2020/08/alba-italy_the-best-small-towns-in-piedmont-italy.jpg',
      'https://cdn.create.vista.com/api/media/small/486601782/stock-photo-view-village-serralunga-alba-wonderful-langa-italy',
      'https://italien.news/wp-content/uploads/2025/08/Alba-Piemont-Italien-2-1024x576.jpg'
    ],
    experiences: [
      {
        id: 'catedral-lorenzo',
        title: 'La Cattedrale di San Lorenzo',
        shortDescription: 'Un capolavoro gotico nel cuore di Alba.',
        fullDescription: 'La Cattedrale di San Lorenzo è uno dei monumenti più importanti di Alba, situata nel cuore del centro storico. Costruita tra il XIV e il XV secolo, questa splendida chiesa in stile gotico tardivo rappresenta un capolavoro dell\'architettura religiosa piemontese. La facciata in laterizio rosso, caratteristica del Rinascimento padano, si affaccia sulla pittoresca Piazza Risorgimento. L\'interno è arricchito da una cripta romanica sottostante risalente al XII secolo, dove si possono ammirare affreschi di grande valore artistico e storico. Il campanile ottagonale, aggiunto successivamente, è divenuto uno dei simboli distintivi della città.',
        image: 'https://st5.depositphotos.com/1002969/65329/i/450/depositphotos_653293616-stock-photo-facade-san-lorenzo-cathedral-aka.jpg',
        gallery: ["https://thumbs.dreamstime.com/b/misa-en-la-catedral-de-san-lorenzo-alba-italia-italy-junio-gente-sentada-bancos-madera-durante-el-interior-una-cat%C3%B3lica-romana-192494725.jpg","https://langhe.net/wp-content/uploads/2023/07/Alba_-_Duomo_0222.jpg","https://visitmudi.it/langamedievale/wp-content/uploads/Alba_Cattedrale_S.Lorenzo1.jpg"],
        category: 'history',
        link: 'https://www.comune.alba.cn.it'
      },
      {
        id: 'chiesa-domenico',
        title: 'La Chiesa di San Domenico',
        shortDescription: 'Affreschi trecenteschi in una chiesa gotica.',
        fullDescription: 'La Chiesa di San Domenico è un capolavoro del gotico piemontese risalente al XIII-XIV secolo. Questo edificio sacro rappresenta un eccellente esempio dell\'architettura religiosa medievale della regione. All\'interno, la chiesa conserva pregevoli affreschi trecenteschi che decorano le pareti e le volte, testimonianze della scuola pittorica gotica piemontese. La struttura della chiesa è caratterizzata da linee eleganti e proporzionati, con colonne che si innalzano verso il soffitto a volta. I dipinti murali rappresentano scene religiose e figure di santi, realizzati da artisti locali di grande talento. La chiesa rimane un luogo di culto e un importante monumento storico-artistico della città.',
        image: 'https://langhe.net/wp-content/uploads/2011/01/Alba-chiesa_san_domenico.jpg',
        gallery: [],
        category: 'culture',
        link: 'https://www.comune.alba.cn.it'
      },
      {
        id: 'alba-sotterranea',
        title: 'Alba Sotterranea',
        shortDescription: 'Scopri i tunnel e le cripte medievali sotto la città.',
        fullDescription: 'Sotto le strade acciottolate di Alba si estende un affascinante reticolo di tunnel, cripte e passaggi sotterranei che raccontano la storia medioevale della città. Questi passaggi sotterranei, costruiti durante il Medioevo, servivano a diversi scopi: collegare i palazzi nobiliari, fornire rifuggi sicuri durante gli assedi, e garantire rifornimenti nascosti durante i periodi di conflitto. L\'esplorazione di Alba Sotterranea permette di scoprire i resti di fondazioni romane, strutture medievali e testimonianze della vita quotidiana in epoca medieval. Le cripte conservano ancora affreschi sbiaditi e iscrizioni che rivelano la devozione religiosa dei cittadini di secoli passati. Una visita guidata attraverso questi spazi nascosti è un\'esperienza unica per comprendere gli strati storici di Alba.',
        image: 'https://www.fieradeltartufo.org/wp-content/uploads/Alba-sotterranea_-390x390-1.jpg',
        gallery: [],
        category: 'history',
        link: 'https://www.comune.alba.cn.it/turismo'
      },
      {
        id: 'torri-antiche',
        title: 'Le Antiche Torri',
        shortDescription: 'I simboli del potere medievale della Città delle Cento Torri.',
        fullDescription: 'Alba è celebre come la "Città delle Cento Torri", anche se delle originarie torri medievali costruite tra il XII e il XIV secolo ne restano oggi una quindicina di ben conservate. Queste torri erano simboli del potere dei ricchi mercanti e delle nobili famiglie albesi che dominavano il paesaggio urbano. Tra le più importanti spiccano la Torre dei Conti, la Torre degli Acaja e la Torre Bonino, ognuna con le proprie caratteristiche architettoniche e la propria storia. Le torri erano costruite con laterizio rosso e pietra, raggiungendo altezze impressionanti per l\'epoca. Originariamente utilizzate come dimore fortificate e centri di potere politico, oggi sono rimasti affascinanti testimoni del passato medievale di Alba. Passeggiare per le vie del centro osservando queste strutture è come fare un viaggio indietro nel tempo alla scoperta della ricchezza e dell\'importanza commerciale della città.',
        image: 'https://recorreitalia.com/wp-content/uploads/2017/07/Alba-torri.jpg',
        gallery: [],
        category: 'history',
        link: 'https://www.comune.alba.cn.it/storia'
      }
    ],
    contact: {
      email: 'info@comune.alba.cn.it',
      phone: '+39 0173 292111',
      address: 'Alba, Cuneo | Piemonte',
      website: 'https://www.comune.alba.cn.it'
    },
    socialMedia: {
      facebook: 'https://facebook.com/cittadialba',
      instagram: 'https://instagram.com/alba_langhe'
    }
  },
  {
    id: 'civita',
    name: 'Civita di Bagnoregio',
    region: 'Lazio',
    country: 'Italia',
    population: 11,
    description: 'La "Città che Muore", un borgo sospeso nel tempo su uno sperone di tufo.',
    longDescription: 'Civita di Bagnoregio è uno dei borghi più suggestivi e fotografati d\'Italia, arroccato su uno sperone di tufo in continua erosione che le ha valso il nome di "Città che Muore". Raggiungibile unicamente attraverso un lungo ponte pedonale, Civita sembra emergere dalle nebbie come un\'isola nel cielo. Il borgo, fondato dagli Etruschi oltre 2500 anni fa, conserva intatto il suo aspetto medievale con case in tufo, archi e vicoli lastricati. Oggi conta appena una decina di residenti stabili, ma accoglie migliaia di visitatori affascinati dalla sua bellezza fragile e senza tempo.',
    heroImage: 'https://images.unsplash.com/photo-1538320584878-45c2d0477348?w=1920&q=80',
    coatOfArms: 'assets/villages/civita/coat-of-arms.png',
    founded: 'VII secolo a.C.',
    altitude: 443,
    area: 1.5,
    coordinates: {
      lat: 42.6275,
      lng: 12.1139
    },
    gallery: [
      'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200&q=80',
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=80',
      'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=1200&q=80',
      'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&q=80',
      'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80'
    ],
    experiences: [
      {
        id: 'alba-civita',
        title: 'Alba sulla Città che Muore',
        shortDescription: 'Vivi l\'emozione dell\'alba quando Civita emerge dalla nebbia.',
        fullDescription: 'Uno degli spettacoli naturali più emozionanti d\'Italia è l\'alba su Civita di Bagnoregio. Nelle mattine autunnali e invernali, quando la nebbia riempie la Valle dei Calanchi, il borgo sembra galleggiare su un mare di nuvole. Questa esperienza esclusiva vi permetterà di raggiungere il belvedere prima dell\'alba, accompagnati da una guida locale che vi racconterà la storia millenaria di questo luogo magico. Al sorgere del sole, assisterete allo spettacolo della luce che illumina progressivamente il borgo mentre la nebbia si dissolve. Colazione con prodotti tipici inclusa.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80'
        ],
        category: 'nature',
        link: 'https://www.visitcivitadibagnoregio.it'
      },
      {
        id: 'etruschi-civita',
        title: 'Sulle Tracce degli Etruschi',
        shortDescription: 'Esplora le grotte e le tombe etrusche sotto il borgo.',
        fullDescription: 'Civita di Bagnoregio fu fondata dagli Etruschi nel VII secolo a.C. e conserva ancora oggi importanti testimonianze di questa antica civiltà. Il tour vi condurrà alla scoperta delle grotte scavate nel tufo utilizzate come abitazioni, magazzini e tombe, del Bucaione - un tunnel etrusco che attraversa lo sperone roccioso - e della Grotta di San Bonaventura, dove secondo la tradizione il santo trascorse parte della sua infanzia. Un viaggio affascinante nelle viscere della terra per comprendere come gli antichi abitatori seppero sfruttare le caratteristiche del tufo.',
        image: 'https://images.unsplash.com/photo-1553521041-d4b374c34596?w=800&q=80',
        category: 'history',
        link: 'https://www.visitcivitadibagnoregio.it/storia-etrusca'
      },
      {
        id: 'calanchi',
        title: 'Trekking nella Valle dei Calanchi',
        shortDescription: 'Cammina tra i paesaggi lunari dei calanchi.',
        fullDescription: 'La Valle dei Calanchi è un paesaggio unico formato dall\'erosione dell\'acqua e del vento sull\'argilla e il tufo. Questi "canyon" italiani creano scenari che sembrano appartenere ad un altro pianeta, con pinnacoli, guglie e profonde gole. Il trekking guidato vi porterà attraverso sentieri panoramici da cui ammirare Civita da prospettive insolite, attraversando boschi di querce e ulivi secolari. Lungo il percorso, la guida vi spiegherà i processi geologici che hanno creato questo paesaggio e le sfide per la conservazione del borgo.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80',
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80'
        ],
        category: 'nature',
        link: 'https://www.parcodeitenebrosi.it/calanchi'
      },
      {
        id: 'cucina-nonna',
        title: 'Pranzo dalla Nonna',
        shortDescription: 'Assapora i sapori autentici della cucina locale.',
        fullDescription: 'In una delle poche case ancora abitate di Civita, una signora del posto apre le porte della sua cucina per condividere i segreti della tradizione culinaria della Tuscia. Imparerete a preparare piatti tipici come gli "strengozzi" (pasta fatta in casa), la minestra di farro, le pappardelle al cinghiale e i dolci della tradizione. Il pranzo si svolge nella sala da pranzo con vista sulla valle, accompagnato dai vini locali come l\'Est! Est!! Est!!! di Montefiascone. Un\'esperienza intima e autentica per assaporare la vera ospitalità italiana.',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
        category: 'gastronomy',
        link: 'https://www.visitcivitadibagnoregio.it/gastronomia'
      }
    ],
    contact: {
      email: 'info@comunebagnoregio.it',
      phone: '+39 0761 780815',
      address: 'Piazza Cavour, 5 - 01022 Bagnoregio (VT)'
    },
    socialMedia: {
      facebook: 'https://facebook.com/civitadibagnoregio',
      instagram: 'https://instagram.com/civitadibagnoregio'
    }
  }
];
