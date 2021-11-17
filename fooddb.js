let stockFood = [
  {
    alimento: 'Aceite (10 cc)',
    calorias: 90,
  },
  {
    alimento: 'Aceituna (17 gr.)',
    calorias: 35,
  },
  {
    alimento: 'Acelgas cocidas (100 gr)',
    calorias: 23,
  },
  {
    alimento: 'Acelgas jugo (100 gr)',
    calorias: 8,
  },
  {
    alimento: 'Achicoria (100 gr)',
    calorias: 13,
  },
  {
    alimento: 'Agua Mineral (100 cc)',
    calorias: 0,
  },
  {
    alimento: 'Aguardiente (100 cc)',
    calorias: 280,
  },
  {
    alimento: 'Aguardiente de fruta (100 cc)',
    calorias: 350,
  },
  {
    alimento: 'Agua Tónica (100 cc)',
    calorias: 39,
  },
  {
    alimento: 'Ajiaco (1 Plato)',
    calorias: 300,
  },
  {
    alimento: 'Ají Verde (1 Unidad)',
    calorias: 16,
  },
  {
    alimento: 'Albacora a la Plancha (1 Porción)',
    calorias: 200,
  },
  {
    alimento: 'Albacora al Vapor (1 Plato)',
    calorias: 162,
  },
  {
    alimento: 'Albóndiga (1 Compota)',
    calorias: 165,
  },
  {
    alimento: 'Alcachofa (1 Taza)',
    calorias: 58,
  },
  {
    alimento: 'Alcachofa mayo (1 Porción)',
    calorias: 185,
  },
  {
    alimento: 'Alcachofa Vinagreta (1 Compota)',
    calorias: 23,
  },
  {
    alimento: 'Almejas (1 Plato)',
    calorias: 78,
  },
  {
    alimento: 'Almejas al Matico (1 Porción)',
    calorias: 186,
  },
  {
    alimento: 'Almejas al natural (1 Plato)',
    calorias: 115,
  },
  {
    alimento: 'Almejas en conserva (1 Cubo)',
    calorias: 182,
  },
  {
    alimento: 'Almendras (1 Cubo)',
    calorias: 11,
  },
  {
    alimento: 'Almendras (1 Plato)',
    calorias: 641,
  },
  {
    alimento: 'Anchoas en conservas (1 Unidad)',
    calorias: 100,
  },
  {
    alimento: 'Anís (1 Plato)',
    calorias: 185,
  },
  {
    alimento: 'Apio (1 Plato)',
    calorias: 17,
  },
  {
    alimento: 'Arroz a la Valenciana (1 Porción)',
    calorias: 594,
  },
  {
    alimento: 'Arroz Cocido (1 Porción)',
    calorias: 250,
  },
  {
    alimento: 'Arroz con Leche (1 Plato)',
    calorias: 264,
  },
  {
    alimento: 'Arroz Crudo (1 Plato)',
    calorias: 72,
  },
  {
    alimento: 'Arroz Graneado (1 Plato)',
    calorias: 335,
  },
  {
    alimento: 'Arvejas (1 Plato)',
    calorias: 60,
  },
  {
    alimento: 'Arvejas (1 Porción)',
    calorias: 180,
  },
  {
    alimento: 'Atún (1/2 Taza)',
    calorias: 470,
  },
  {
    alimento: 'Atún con Salsa Verde (1 Porción)',
    calorias: 150,
  },
  {
    alimento: 'Atún en aceite (1 Compota)',
    calorias: 106,
  },
  {
    alimento: 'Avellanas (1/2 Taza)',
    calorias: 13,
  },
  {
    alimento: 'Aves de caza (General) (1 Plato)',
    calorias: 120,
  },
  {
    alimento: 'Azúcar (1 Unidad)',
    calorias: 20,
  },
  {
    alimento: 'Bacalao a la Parrilla (1 Porción)',
    calorias: 180,
  },
  {
    alimento: 'Batidos y Flanes (yogurt) (1 Porción)',
    calorias: 182,
  },
  {
    alimento: 'Bavarois (1 Porción)',
    calorias: 145,
  },
  {
    alimento: 'Berenjenas (1 Plato)',
    calorias: 25,
  },
  {
    alimento: 'Berlín (1 Plato)',
    calorias: 591,
  },
  {
    alimento: 'Berro (1 Plato)',
    calorias: 13,
  },
  {
    alimento: 'Betarraga (1 Compota)',
    calorias: 39,
  },
  {
    alimento: 'Betarraga Jugo (1 Porción)',
    calorias: 36,
  },
  {
    alimento: 'Bilz (1 Plato)',
    calorias: 36,
  },
  {
    alimento: 'Bizcochuelo (1 Porción)',
    calorias: 201,
  },
  {
    alimento: 'Bistec a la Plancha (1 Trozo Chico)',
    calorias: 180,
  },
  {
    alimento: 'Bistec Alemán (1 Porción)',
    calorias: 159,
  },
  {
    alimento: 'Bistec a lo Pobre (1 Porción)',
    calorias: 796,
  },
  {
    alimento: 'Bistec en Aceite (1 Plato)',
    calorias: 225,
  },
  {
    alimento: 'Bombones (1 Porción)',
    calorias: 36,
  },
  {
    alimento: 'Brandy (1 Compota)',
    calorias: 65,
  },
  {
    alimento: 'Brazo de Reina (1 Chica)',
    calorias: 150,
  },
  {
    alimento: 'Brloches (1 Porción)',
    calorias: 272,
  },
  {
    alimento: 'Bruselas (1 Porción)',
    calorias: 36,
  },
  {
    alimento: 'Budín de Verduras (1 Porción)',
    calorias: 208,
  },
  {
    alimento: 'Caldillo de Pescado (1 Porción)',
    calorias: 310,
  },
  {
    alimento: 'Caldo de ave (1 Plato)',
    calorias: 32,
  },
  {
    alimento: 'Caldo de carne ( 1 Plato)',
    calorias: 28,
  },
  {
    alimento: 'Caldo puro ( 1 Compota)',
    calorias: 20,
  },
  {
    alimento: 'Calugas ( 1 Compota)',
    calorias: 130,
  },
  {
    alimento: 'Callampas Frescas (1 Plato )',
    calorias: 24,
  },
  {
    alimento: 'Camarones (cocidos) (1 Porción )',
    calorias: 100,
  },
  {
    alimento: 'Camote (1 Porción)',
    calorias: 130,
  },
  {
    alimento: 'Canapés 1/m (1 Porción )',
    calorias: 60,
  },
  {
    alimento: 'Caqui (1 Porción )',
    calorias: 64,
  },
  {
    alimento: 'Caramelos (1 Plato)',
    calorias: 23,
  },
  {
    alimento: 'Carbonada con carne (1 Porción)',
    calorias: 377,
  },
  {
    alimento: 'Carbonada de verdura (1 Porción)',
    calorias: 240,
  },
  {
    alimento: 'Carlota rusa ( 1 Plato)',
    calorias: 235,
  },
  {
    alimento: 'Carne al jugo (1 Porción  )',
    calorias: 250,
  },
  {
    alimento: 'Carne asada (1 Plato )',
    calorias: 289,
  },
  {
    alimento: 'Carne Cazuela (1 Unidad )',
    calorias: 191,
  },
  {
    alimento: 'Carne molida (1 Porción )',
    calorias: 65,
  },
  {
    alimento: 'Castañas (1 Unidad)',
    calorias: 11,
  },
  {
    alimento: 'Castañas Cocidas (1 Porción )',
    calorias: 220,
  },
  {
    alimento: 'Caviar (1 Unidad )',
    calorias: 125,
  },
  {
    alimento: 'Caviar (1 Porción )',
    calorias: 38,
  },
  {
    alimento: 'Cazuela Albóndiga (1 Porción)',
    calorias: 310,
  },
  {
    alimento: 'Cazuela Ave (1 Porción )',
    calorias: 340,
  },
  {
    alimento: 'Cazuela Cerdo (1 Porción  )',
    calorias: 450,
  },
  {
    alimento: 'Cazuela Cordero (1 Porción )',
    calorias: 425,
  },
  {
    alimento: 'Cazuela Vacuno (1 Porción )',
    calorias: 417,
  },
  {
    alimento: 'Cebolla (1 Torreja )',
    calorias: 25,
  },
  {
    alimento: 'Cebolla Ensalada (1 Plato )',
    calorias: 211,
  },
  {
    alimento: 'Cebollines (1 Plato )',
    calorias: 17,
  },
  {
    alimento: 'Centolla Cocida (1 Compota )',
    calorias: 120,
  },
  {
    alimento: 'Cerezas (jugo) (1 Porción )',
    calorias: 64,
  },
  {
    alimento: 'Cerezas o Guindas (1 Porción)',
    calorias: 3,
  },
  {
    alimento: 'Cerezas o Guindas (1 Porción )',
    calorias: 52,
  },
  {
    alimento: 'Cerveza (1 Porción  )',
    calorias: 96,
  },
  {
    alimento: 'Ciruelas (jugo) (1 Porción )',
    calorias: 84,
  },
  {
    alimento: 'Ciruelas (deshidratadas) (1 Compota )',
    calorias: 49,
  },
  {
    alimento: 'Ciruelas Frescas (1 Plato )',
    calorias: 30,
  },
  {
    alimento: 'Clara de Huevo (1 Plato )',
    calorias: 14,
  },
  {
    alimento: 'Coca Cola (1 Plato )',
    calorias: 41,
  },
  {
    alimento: 'Coco (1 Plato )',
    calorias: 12,
  },
  {
    alimento: 'Cocoa ( 1 Taza)',
    calorias: 11,
  },
  {
    alimento: 'Coco Rallado (1 taza )',
    calorias: 420,
  },
  {
    alimento: 'Cóctel Cuba Libre (1 Unid. Reg. )',
    calorias: 220,
  },
  {
    alimento: 'Cochayuyo (1/2 ch)',
    calorias: 50,
  },
  {
    alimento: 'Coñac (1 porción)',
    calorias: 122,
  },
  {
    alimento: 'Coñac Francés (1 porción)',
    calorias: 196,
  },
  {
    alimento: 'Coliflor (100 gr.)',
    calorias: 24,
  },
  {
    alimento: 'Compota Ciruela con Mote (na)',
    calorias: 234,
  },
  {
    alimento: 'Compota de Fruta (90 gr.)',
    calorias: 90,
  },
  {
    alimento: 'Compota de Huesillo c/m (221 gr.)',
    calorias: 221,
  },
  {
    alimento: 'Conejo Asado (120 gr.)',
    calorias: 170,
  },
  {
    alimento: 'Congrio al Vapor (150 gr.)',
    calorias: 102,
  },
  {
    alimento: 'Congrio Frito (200 gr.)',
    calorias: 280,
  },
  {
    alimento: 'Corvina al Vapor (150 gr.)',
    calorias: 138,
  },
  {
    alimento: 'Costillas Asadas (150 gr.)',
    calorias: 200,
  },
  {
    alimento: 'Crema batida (20 gr.)',
    calorias: 66,
  },
  {
    alimento: 'Crema de Cacao (30 cc)',
    calorias: 90,
  },
  {
    alimento: 'Crema de Menta (30 cc)',
    calorias: 90,
  },
  {
    alimento: 'Crema deshidratada (66 gr.)',
    calorias: 20,
  },
  {
    alimento: 'Crema Nestlé (20 gr.)',
    calorias: 50,
  },
  {
    alimento: 'Criadillas (100 gr.)',
    calorias: 67,
  },
  {
    alimento: 'Cuaquer con leche (na)',
    calorias: 235,
  },
  {
    alimento: 'Champaña (100 cc)',
    calorias: 70,
  },
  {
    alimento: 'Champaña (100 cc)',
    calorias: 144,
  },
  {
    alimento: 'Champiñones (na)',
    calorias: 20,
  },
  {
    alimento: 'Champiñones al natural (200 gr.)',
    calorias: 74,
  },
  {
    alimento: 'Charqui (100 gr.)',
    calorias: 571,
  },
  {
    alimento: 'Charquicán (na)',
    calorias: 383,
  },
  {
    alimento: 'Chicle (na)',
    calorias: 8,
  },
  {
    alimento: 'Chirimoya (130 gr.)',
    calorias: 73,
  },
  {
    alimento: 'Choclo entero (360 gr.)',
    calorias: 96,
  },
  {
    alimento: 'Choclo picado (60 gr.)',
    calorias: 58,
  },
  {
    alimento: 'Chocolate (17 gr.)',
    calorias: 76,
  },
  {
    alimento: 'Chocolate dulce (100 gr.)',
    calorias: 449,
  },
  {
    alimento: 'Chocolate leche (100 gr.)',
    calorias: 527,
  },
  {
    alimento: 'Chocolate salsa (17 gr.)',
    calorias: 76,
  },
  {
    alimento: 'Cholgas (100 gr.)',
    calorias: 68,
  },
  {
    alimento: 'Cholgas en conservas (100 gr.)',
    calorias: 131,
  },
  {
    alimento: 'Choricillos (15 gr.)',
    calorias: 45,
  },
  {
    alimento: 'Choritos (100 gr.)',
    calorias: 65,
  },
  {
    alimento: 'Choritos en conservas (100 gr.)',
    calorias: 96,
  },
  {
    alimento: 'Chuletas de cerdo (200 gr.)',
    calorias: 376,
  },
  {
    alimento: 'Chuletas de cordero (200 gr.)',
    calorias: 241,
  },
  {
    alimento: 'Chuletas de ternera (200 gr.)',
    calorias: 260,
  },
  {
    alimento: 'Churros (40 gr.)',
    calorias: 180,
  },
  {
    alimento: 'Damasco (100 gr)',
    calorias: 41,
  },
  {
    alimento: 'Damasco (100 cc)',
    calorias: 65,
  },
  {
    alimento: 'Dulces Chileno (50 gr.)',
    calorias: 204,
  },
  {
    alimento: 'Dulces de membrillo (50 gr.)',
    calorias: 100,
  },
  {
    alimento: 'Durazno (130 gr.)',
    calorias: 48,
  },
  {
    alimento: 'Durazno en conserva (na)',
    calorias: 80,
  },
  {
    alimento: 'Durazno al jugo (85 gr.)',
    calorias: 58,
  },
  {
    alimento: 'Durazno al jugo (100 gr.)',
    calorias: 80,
  },
  {
    alimento: 'Durazno al jugo (560 gr.)',
    calorias: 381,
  },
  {
    alimento: 'Empanada frita Pino (100 gr.)',
    calorias: 347,
  },
  {
    alimento: 'Empanada frita Queso (100 gr)',
    calorias: 315,
  },
  {
    alimento: 'Empanada Horno (200 gr)',
    calorias: 400,
  },
  {
    alimento: 'Ensaladas porotos c/cebolla (na)',
    calorias: 211,
  },
  {
    alimento: 'Ensalada rusa (na)',
    calorias: 305,
  },
  {
    alimento: 'Erizos (100 gr.)',
    calorias: 106,
  },
  {
    alimento: 'Escalopa de vacuno (100 gr.)',
    calorias: 300,
  },
  {
    alimento: 'Escarola (100 gr.)',
    calorias: 16,
  },
  {
    alimento: 'Espárragos (100 gr.)',
    calorias: 15,
  },
  {
    alimento: 'Espárragos trozos (350 gr.)',
    calorias: 53,
  },
  {
    alimento: 'Espárragos puntas (360 gr.)',
    calorias: 54,
  },
  {
    alimento: 'Espárragos limoneta (na)',
    calorias: 175,
  },
  {
    alimento: 'Espinacas cocidas (100 gr.)',
    calorias: 21,
  },
  {
    alimento: 'Espinacas crudas (40 gr.)',
    calorias: 14,
  },
  {
    alimento: 'Estofado de cordero (na)',
    calorias: 235,
  },
  {
    alimento: 'Estofado de ave (na)',
    calorias: 265,
  },
  {
    alimento: 'Fanta (100cc)',
    calorias: 60,
  },
  {
    alimento: 'Fiambres en general (30 gr)',
    calorias: 78,
  },
  {
    alimento: 'Fideos crudos (20 gr.)',
    calorias: 72,
  },
  {
    alimento: 'Filete asado (250 gr.)',
    calorias: 360,
  },
  {
    alimento: 'Filete Miñón (170 gr.)',
    calorias: 250,
  },
  {
    alimento: 'Flan de leche (na)',
    calorias: 245,
  },
  {
    alimento: 'Flan de verdura (na)',
    calorias: 150,
  },
  {
    alimento: 'Frambuesa (150 gr.)',
    calorias: 72,
  },
  {
    alimento: 'Fricasé (na)',
    calorias: 453,
  },
  {
    alimento: 'Fritos de verdura (na)',
    calorias: 289,
  },
  {
    alimento: 'Fruta confitada (na)',
    calorias: 35,
  },
  {
    alimento: 'Frutilla (150 gr.)',
    calorias: 54,
  },
  {
    alimento: 'Frutillas con azúcar (na)',
    calorias: 120,
  },
  {
    alimento: 'Frutillas con crema (na)',
    calorias: 150,
  },
  {
    alimento: 'Galletas cream cracker (4 gr.)',
    calorias: 17,
  },
  {
    alimento: 'Galletas de agua (8 gr.)',
    calorias: 34,
  },
  {
    alimento: 'Galletas de limón (7 gr.)',
    calorias: 31,
  },
  {
    alimento: 'Galletas de monito (3 gr.)',
    calorias: 16,
  },
  {
    alimento: 'Galletas de oblea (7 gr.)',
    calorias: 41,
  },
  {
    alimento: 'Galletas de soda (10 gr.)',
    calorias: 44,
  },
  {
    alimento: 'Galletas de triton (10 gr.)',
    calorias: 47,
  },
  {
    alimento: 'Galletas de vino (9 gr.)',
    calorias: 38,
  },
  {
    alimento: 'Garbanzos cocidos (70 gr.)',
    calorias: 234,
  },
  {
    alimento: 'Garbanzos con tocino (na)',
    calorias: 473,
  },
  {
    alimento: 'Ginebra o Gin (30 cc)',
    calorias: 65,
  },
  {
    alimento: 'Ginger Ale (100 cc)',
    calorias: 39,
  },
  {
    alimento: 'Gomitas dulces (28 gr.)',
    calorias: 100,
  },
  {
    alimento: 'Goulach (na)',
    calorias: 260,
  },
  {
    alimento: 'Granada (200 gr.)',
    calorias: 36,
  },
  {
    alimento: 'Guayaba (150 gr.)',
    calorias: 50,
  },
  {
    alimento: 'Guindas (70 gr.)',
    calorias: 24,
  },
  {
    alimento: 'Guindas al jugo (560 gr.)',
    calorias: 1316,
  },
  {
    alimento: 'Guatitas (120 gr.)',
    calorias: 140,
  },
  {
    alimento: 'Hígado bistec (150 gr.)',
    calorias: 260,
  },
  {
    alimento: 'Habas (150 gr.)',
    calorias: 125,
  },
  {
    alimento: 'Habas (4 gr.)',
    calorias: 4,
  },
  {
    alimento: 'Hamburguesas (150 gr.)',
    calorias: 224,
  },
  {
    alimento: 'Harina de leguminosas (17 gr.)',
    calorias: 59,
  },
  {
    alimento: 'Harina de leguminosas (25 gr.)',
    calorias: 87,
  },
  {
    alimento: 'Harina Tostada c/leche (na)',
    calorias: 293,
  },
  {
    alimento: 'Helado de agua (100 gr.)',
    calorias: 147,
  },
  {
    alimento: 'Helado de leche (100 gr.)',
    calorias: 217,
  },
  {
    alimento: 'Hígado de ave (120 gr.)',
    calorias: 135,
  },
  {
    alimento: 'Hígado de Cerdo (120 gr.)',
    calorias: 160,
  },
  {
    alimento: 'Hígado de Cordero (120 gr.)',
    calorias: 140,
  },
  {
    alimento: 'Hígado de Vacuno (120 gr.)',
    calorias: 175,
  },
  {
    alimento: 'Higos (20 gr.)',
    calorias: 49,
  },
  {
    alimento: 'Higos frescos y brevas (50 gr.)',
    calorias: 42,
  },
  {
    alimento: 'Huevo a la copa o duro (50 gr.)',
    calorias: 76,
  },
  {
    alimento: 'Huevo con fiambre (65 gr.)',
    calorias: 127,
  },
  {
    alimento: 'Huevo frito o revuelto (53 gr.)',
    calorias: 108,
  },
  {
    alimento: 'Huevo con queso (60 gr.)',
    calorias: 136,
  },
  {
    alimento: 'Huevo con tocino (55 gr.)',
    calorias: 150,
  },
  {
    alimento: 'Huevo de Codorniz (25 gr.)',
    calorias: 40,
  },
  {
    alimento: 'Huesillos (20 gr.)',
    calorias: 40,
  },
  {
    alimento: 'Humitas (na)',
    calorias: 165,
  },
  {
    alimento: 'Jaivas (100 gr.)',
    calorias: 93,
  },
  {
    alimento: 'Jalea con fruta (na)',
    calorias: 140,
  },
  {
    alimento: 'Jalea con leche (na)',
    calorias: 174,
  },
  {
    alimento: 'Jalea sola (na)',
    calorias: 85,
  },
  {
    alimento: 'Jamón (36 gr.)',
    calorias: 91,
  },
  {
    alimento: 'Jamón con palta y lechuga (na)',
    calorias: 260,
  },
  {
    alimento: 'Jamón de pollo (100 gr.)',
    calorias: 92,
  },
  {
    alimento: 'Jamón con papas mayo (na)',
    calorias: 340,
  },
  {
    alimento: 'Jerez (100 cc)',
    calorias: 127,
  },
  {
    alimento: 'Jugo fruta (100 cc)',
    calorias: 50,
  },
  {
    alimento: 'Jurel al vapor (150 cc)',
    calorias: 194,
  },
  {
    alimento: ' Kéfir ( 100 cc)',
    calorias: 50,
  },
  {
    alimento: ' Kuchen ( 100 gr.)',
    calorias: 225,
  },
  {
    alimento: ' Langostino langosta ( 100gr)',
    calorias: 113,
  },
  {
    alimento: ' Lasaña (na)',
    calorias: 506,
  },
  {
    alimento: ' Leche asada (na)',
    calorias: 140,
  },
  {
    alimento: ' Leche condensada ( 20 gr.)',
    calorias: 61,
  },
  {
    alimento: ' Leche con Milo ( 200 cc)',
    calorias: 196,
  },
  {
    alimento: ' Leche con Plátano ( 200 cc)',
    calorias: 203,
  },
  {
    alimento: ' Leche con sabor ( 200 cc)',
    calorias: 148,
  },
  {
    alimento: ' Leche de Cabra ( 200 cc)',
    calorias: 140,
  },
  {
    alimento: ' Leche de Oveja ( 200 cc)',
    calorias: 220,
  },
  {
    alimento: 'Leche descremada líquida ( 200 cc)',
    calorias: 85,
  },
  {
    alimento: 'Leche descremada polvo ( 15 gr.)',
    calorias: 55,
  },
  {
    alimento: 'Leche entera líquida ( 10 cc)',
    calorias: 6,
  },
  {
    alimento: 'Leche entera líquida ( 200 cc)',
    calorias: 120,
  },
  {
    alimento: 'Leche entera polvo ( 15 gr.)',
    calorias: 75,
  },
  {
    alimento: 'Leche evaporada ( 20 gr)',
    calorias: 28,
  },
  {
    alimento: 'Leche nevada (na)',
    calorias: 220,
  },
  {
    alimento: 'Lima (10cc)',
    calorias: 4,
  },
  {
    alimento: 'Limón (100 cc)',
    calorias: 50,
  },
  {
    alimento: 'Limón ( 10 cc)',
    calorias: 5,
  },
  {
    alimento: 'Limonada  (200 cc )',
    calorias: 50,
  },
  {
    alimento: 'Lechuga  (100 gr )',
    calorias: 17,
  },
  {
    alimento: 'Lechuga picada  (40 gr )',
    calorias: 7,
  },
  {
    alimento: 'Lengua de cerdo  (120 gr )',
    calorias: 285,
  },
  {
    alimento: 'Lengua de cordero  (120 gr )',
    calorias: 220,
  },
  {
    alimento: 'Lengua de vacuno  (120 gr )',
    calorias: 187,
  },
  {
    alimento: 'Lentejas cocidas  (70 gr )',
    calorias: 270,
  },
  {
    alimento: 'Lentejas con arroz  (na)',
    calorias: 440,
  },
  {
    alimento: 'Locos cocidos   (50 gr )',
    calorias: 76,
  },
  {
    alimento: 'Locos mayo  (na)',
    calorias: 280,
  },
  {
    alimento: 'Lomo asado  (200 gr )',
    calorias: 319,
  },
  {
    alimento: 'Longaniza  (50 gr )',
    calorias: 258,
  },
  {
    alimento: 'Lúcuma  (100 gr )',
    calorias: 12,
  },
  {
    alimento: 'Luche  (50 gr )',
    calorias: 13,
  },
  {
    alimento: 'Macedonia (na)',
    calorias: 150,
  },
  {
    alimento: 'Machas  (100 gr )',
    calorias: 75,
  },
  {
    alimento: 'Machas en conservas (100 gr )',
    calorias: 124,
  },
  {
    alimento: 'Maicena cruda   (15 gr )',
    calorias: 53,
  },
  {
    alimento: 'Malaya de cerdo  (120 gr )',
    calorias: 380,
  },
  {
    alimento: 'Mandarina  (100 cc )',
    calorias: 40,
  },
  {
    alimento: 'Mandarina  (50 gr )',
    calorias: 18,
  },
  {
    alimento: 'Mangos crudos  (113 gr )',
    calorias: 75,
  },
  {
    alimento: 'Manhatan dulce  (90 cc )',
    calorias: 160,
  },
  {
    alimento: 'Maní  (2 gr  )',
    calorias: 10,
  },
  {
    alimento: 'Manjar  (20 gr )',
    calorias: 61,
  },
  {
    alimento: 'Manteca ( 20 gr)',
    calorias: 40,
  },
  {
    alimento: 'Mantequilla  (5 gr )',
    calorias: 37,
  },
  {
    alimento: 'Manzana  (100 cc )',
    calorias: 48,
  },
  {
    alimento: 'Manzana asada  (na)',
    calorias: 161,
  },
  {
    alimento: 'Manzana  (150 gr. )',
    calorias: 53,
  },
  {
    alimento: 'Margarina  (5 gr )',
    calorias: 36,
  },
  {
    alimento: 'Mariscos salsa verde  (na)',
    calorias: 190,
  },
  {
    alimento: 'Mayonesa (20 gr )',
    calorias: 128,
  },
  {
    alimento: ' Mazapán (10 gr.)',
    calorias: 38,
  },
  {
    alimento: 'Melón escrito (100 gr.)',
    calorias: 20,
  },
  {
    alimento: 'Melón tuna (1750 gr.)',
    calorias: 378,
  },
  {
    alimento: ' Melón tuna (100 gr.)',
    calorias: 44,
  },
  {
    alimento: 'Membrillo (200 gr.)',
    calorias: 71,
  },
  {
    alimento: 'Minestrón (na)',
    calorias: 320,
  },
  {
    alimento: 'Merengue con azúcar (na)',
    calorias: 28,
  },
  {
    alimento: 'Merengue con fruta (na)',
    calorias: 116,
  },
  {
    alimento: 'Mermelada (20 gr.)',
    calorias: 50,
  },
  {
    alimento: ' Mermelada dietética (5 gr.)',
    calorias: 2,
  },
  {
    alimento: 'Miel de abeja (20 gr.)',
    calorias: 60,
  },
  {
    alimento: ' Miel de palma (20 gr.)',
    calorias: 52,
  },
  {
    alimento: 'Milo (7 gr.)',
    calorias: 18,
  },
  {
    alimento: 'Mollejas de pavo (120 gr.)',
    calorias: 160,
  },
  {
    alimento: 'Mollejas de pollo (120 gr.)',
    calorias: 155,
  },
  {
    alimento: 'Mora (150 gr.)',
    calorias: 60,
  },
  {
    alimento: 'Mora jugo (100 cc)',
    calorias: 40,
  },
  {
    alimento: 'Mortadela (25 gr.)',
    calorias: 60,
  },
  {
    alimento: 'Nabo  (80 gr )',
    calorias: 23,
  },
  {
    alimento: 'Naranja  (160 gr )',
    calorias: 36,
  },
  {
    alimento: 'Naranja  (100 cc )',
    calorias: 43,
  },
  {
    alimento: 'Nata (20 gr )',
    calorias: 40,
  },
  {
    alimento: 'Néctar  (100 cc )',
    calorias: 73,
  },
  {
    alimento: 'Níspero  (50 gr )',
    calorias: 52,
  },
  {
    alimento: 'Nueces  (5 gr )',
    calorias: 28,
  },
  {
    alimento: 'Ñoquis  (na)',
    calorias: 320,
  },
  {
    alimento: 'Oporto  (30 cc )',
    calorias: 45,
  },
  {
    alimento: 'Orange Crush  (100 cc )',
    calorias: 52,
  },
  {
    alimento: 'Ostras   (100 gr )',
    calorias: 80,
  },
  {
    alimento: 'Ostiones  (100 gr )',
    calorias: 144,
  },
  {
    alimento: 'Palmitos   (120 gr )',
    calorias: 30,
  },
  {
    alimento: 'Palomitas de maíz  (50 gr.)',
    calorias: 150,
  },
  {
    alimento: 'Palta  (60 gr )',
    calorias: 108,
  },
  {
    alimento: 'Palta Molida (32 gr )',
    calorias: 58,
  },
  {
    alimento: 'Palta Rellena  (na)',
    calorias: 316,
  },
  {
    alimento: 'Pan Blanco Molde  (30 gr )',
    calorias: 60,
  },
  {
    alimento: 'Pan Centeno  (100 gr )',
    calorias: 229,
  },
  {
    alimento: 'Pan con Fiambre  (140 gr )',
    calorias: 411,
  },
  {
    alimento: 'Pan con Fiambre y Mantequilla  (152 gr )',
    calorias: 447,
  },
  {
    alimento: 'Pan con Manjar  (140 gr )',
    calorias: 430,
  },
  {
    alimento: 'Pan con Mermelada  (140 gr )',
    calorias: 373,
  },
  {
    alimento: 'Pan con Pateé  (130 gr )',
    calorias: 437,
  },
  {
    alimento: 'Pan con Queso  (140 gr )',
    calorias: 449,
  },
  {
    alimento: 'Pan con Queso y Mantequilla  (153 gr )',
    calorias: 595,
  },
  {
    alimento: 'Pan de Gluten  (100 gr )',
    calorias: 208,
  },
  {
    alimento: 'Pan Especial  (60 gr )',
    calorias: 185,
  },
  {
    alimento: 'Pan Hallulla  (100 gr )',
    calorias: 309,
  },
  {
    alimento: 'Pan Dietético  (30 gr )',
    calorias: 30,
  },
  {
    alimento: 'Pan Integral  (100 gr  )',
    calorias: 276,
  },
  {
    alimento: 'Pan Marraqueta  (100 gr  )',
    calorias: 267,
  },
  {
    alimento: 'Panqueques  (70 gr )',
    calorias: 160,
  },
  {
    alimento: 'Pantrucas  (na)',
    calorias: 350,
  },
  {
    alimento: 'Papas  (100 gr )',
    calorias: 71,
  },
  {
    alimento: 'Papas Duquesas  (na)',
    calorias: 55,
  },
  {
    alimento: 'Papas Duquesas  (na)',
    calorias: 295,
  },
  {
    alimento: 'Papas Fritas  (na)',
    calorias: 19,
  },
  {
    alimento: 'Papas Fritas  (na)',
    calorias: 368,
  },
  {
    alimento: 'Papas Rellenas  (na)',
    calorias: 400,
  },
  {
    alimento: 'Papayas Jugo   (100 cc )',
    calorias: 36,
  },
  {
    alimento: 'Papayas crudas  (200 gr )',
    calorias: 65,
  },
  {
    alimento: 'Pasas  ( 1 gr)',
    calorias: 3,
  },
  {
    alimento: 'Pastel  (120 gr )',
    calorias: 350,
  },
  {
    alimento: 'Pastel de Carne  (na)',
    calorias: 275,
  },
  {
    alimento: 'Pastel de Choclo  (na)',
    calorias: 390,
  },
  {
    alimento: 'Pastel de Mil Hojas  (120 gr )',
    calorias: 394,
  },
  {
    alimento: 'Pastel de Papas  (na)',
    calorias: 376,
  },
  {
    alimento: 'Pastelillos de cóctel  (40 gr )',
    calorias: 90,
  },
  {
    alimento: 'Pastillas de Menta  (3 gr  )',
    calorias: 11,
  },
  {
    alimento: 'Patees  (120 gr )',
    calorias: 514,
  },
  {
    alimento: 'Patees  (15 gr )',
    calorias: 65,
  },
  {
    alimento: 'Patitas de Cerdo  (300 gr. )',
    calorias: 277,
  },
  {
    alimento: 'Pato Asado  (100 gr )',
    calorias: 190,
  },
  {
    alimento: 'Pato Orange  (150 gr. )',
    calorias: 240,
  },
  {
    alimento: 'Pavo Asado  (100 gr )',
    calorias: 149,
  },
  {
    alimento: 'Penca Picada  (100 gr )',
    calorias: 21,
  },
  {
    alimento: 'Pepinillo fresco  (100 gr )',
    calorias: 11,
  },
  {
    alimento: 'Pepinillo Pickle  (100 gr )',
    calorias: 25,
  },
  {
    alimento: 'Pepino  (100 gr )',
    calorias: 11,
  },
  {
    alimento: 'Pepino  (150 gr. )',
    calorias: 25,
  },
  {
    alimento: 'Pepsi cola  (100 cc )',
    calorias: 43,
  },
  {
    alimento: 'Pera  (150 gr. )',
    calorias: 58,
  },
  {
    alimento: 'Pera  (100 cc )',
    calorias: 42,
  },
  {
    alimento: 'Pera al jugo  (560 gr )',
    calorias: 381,
  },
  {
    alimento: 'Pera compota  (60 gr )',
    calorias: 40,
  },
  {
    alimento: 'Perejil  (100 gr )',
    calorias: 42,
  },
  {
    alimento: 'Pernil  (150 gr. )',
    calorias: 230,
  },
  {
    alimento: 'Pescado Ahumado  (100 gr )',
    calorias: 120,
  },
  {
    alimento: 'Pescado al Curry  (200 gr )',
    calorias: 220,
  },
  {
    alimento: 'Pescado al Jugo  (na)',
    calorias: 230,
  },
  {
    alimento: 'Pescada al vapor  (150 gr )',
    calorias: 117,
  },
  {
    alimento: 'Pescado tártara  (na)',
    calorias: 120,
  },
  {
    alimento: 'Pichanga  (100 gr )',
    calorias: 29,
  },
  {
    alimento: 'Pie de Limón  (120 gr )',
    calorias: 300,
  },
  {
    alimento: 'Pimentón  (95 gr )',
    calorias: 52,
  },
  {
    alimento: 'Pino de Carne  (na)',
    calorias: 177,
  },
  {
    alimento: 'Piña  (50 gr )',
    calorias: 30,
  },
  {
    alimento: 'Piña  (100 cc )',
    calorias: 52,
  },
  {
    alimento: 'Piña al Jugo  (600 gr )',
    calorias: 340,
  },
  {
    alimento: 'Piña en conserva  (na)',
    calorias: 83,
  },
  {
    alimento: 'Piñones  (36 gr )',
    calorias: 310,
  },
  {
    alimento: 'Pisco  (50 cc )',
    calorias: 181,
  },
  {
    alimento: 'Piure  (100 gr )',
    calorias: 46,
  },
  {
    alimento: 'Pizza 1/m  (120 gr )',
    calorias: 240,
  },
  {
    alimento: 'Plátano  (200 gr )',
    calorias: 110,
  },
  {
    alimento: 'Pollo-Ala  (50 gr )',
    calorias: 34,
  },
  {
    alimento: 'Pollo-Pechuga  (140 gr )',
    calorias: 150,
  },
  {
    alimento: 'Pollo-Pierna  (120 gr )',
    calorias: 125,
  },
  {
    alimento: 'Pollo-Menudencias  (100 gr )',
    calorias: 100,
  },
  {
    alimento: 'Pollo al Curry (salsa) (150 gr )',
    calorias: 200,
  },
  {
    alimento: 'Pollo al jugo (250 gr )',
    calorias: 274,
  },
  {
    alimento: 'Pollo asado con mantequilla  (150 gr )',
    calorias: 240,
  },
  {
    alimento: 'Pollo frito apanado  (130 gr )',
    calorias: 190,
  },
  {
    alimento: 'Pomelo  (120 gr )',
    calorias: 28,
  },
  {
    alimento: 'Porotos cocidos   (70 gr )',
    calorias: 241,
  },
  {
    alimento: 'Porotos con tallarines  (na)',
    calorias: 475,
  },
  {
    alimento: 'Porotos granados  (na)',
    calorias: 335,
  },
  {
    alimento: 'Porotos granados cocidos  (100 gr )',
    calorias: 135,
  },
  {
    alimento: 'Porotos verdes cocidos  (90 gr )',
    calorias: 19,
  },
  {
    alimento: 'Porotos verdes crudos  (100 gr )',
    calorias: 28,
  },
  {
    alimento: 'Porrones  (80 gr )',
    calorias: 24,
  },
  {
    alimento: 'Postre de Leche 1/m (na)',
    calorias: 237,
  },
  {
    alimento: 'Prietas  (100 gr )',
    calorias: 124,
  },
  {
    alimento: 'Puré de castañas  (na)',
    calorias: 185,
  },
  {
    alimento: 'Puré de manzanas s/azuc  (na)',
    calorias: 55,
  },
  {
    alimento: 'Puré de manzanas c/azuc (na)',
    calorias: 100,
  },
  {
    alimento: 'Puré de Papas  (na)',
    calorias: 300,
  },
  {
    alimento: 'Quesillo  (30 gr  )',
    calorias: 33,
  },
  {
    alimento: 'Quesillo  (360 gr )',
    calorias: 399,
  },
  {
    alimento: 'Queso de Cabra (30 gr )',
    calorias: 120,
  },
  {
    alimento: 'Queso Crema  (5 gr )',
    calorias: 13,
  },
  {
    alimento: 'Queso Crema  (55 gr )',
    calorias: 143,
  },
  {
    alimento: 'Queso de Cabezas  (30 gr )',
    calorias: 80,
  },
  {
    alimento: 'Queso fresco  (30 gr )',
    calorias: 33,
  },
  {
    alimento: 'Queso en general  (30 gr )',
    calorias: 107,
  },
  {
    alimento: 'Queso Holandés (bola)  (30 gr )',
    calorias: 115,
  },
  {
    alimento: 'Queso rayado Parmesano  (15 gr )',
    calorias: 50,
  },
  {
    alimento: 'Queso Ricotte  (30 gr )',
    calorias: 120,
  },
  {
    alimento: 'Rabanitos  (20 gr )',
    calorias: 3,
  },
  {
    alimento: 'Refrescos Polvo  (100 cc )',
    calorias: 37,
  },
  {
    alimento: 'Repollo Cocido  (100 gr )',
    calorias: 20,
  },
  {
    alimento: 'Repollo crudo  (80 gr )',
    calorias: 16,
  },
  {
    alimento: 'Requesón  (20 gr )',
    calorias: 33,
  },
  {
    alimento: 'Ron  (50 cc )',
    calorias: 122,
  },
  {
    alimento: 'Riñón de Cordero  (120 gr )',
    calorias: 125,
  },
  {
    alimento: 'Riñón de Cerdo (120 gr )',
    calorias: 115,
  },
  {
    alimento: 'Riñón de Vacuno (120 gr )',
    calorias: 104,
  },
  {
    alimento: 'Roastbeef  (150 gr )',
    calorias: 250,
  },
  {
    alimento: 'Salsa blanca (20 cc )',
    calorias: 25,
  },
  {
    alimento: 'Salame  (15 gr )',
    calorias: 67,
  },
  {
    alimento: 'Surtido para caldillo  (220 gr )',
    calorias: 174,
  },
  {
    alimento: 'Salmón  (460 gr )',
    calorias: 782,
  },
  {
    alimento: 'Salmón Ahumado  (50 gr )',
    calorias: 185,
  },
  {
    alimento: 'Salmón crudo  (150 gr )',
    calorias: 296,
  },
  {
    alimento: 'Salmón en aceite  (120 gr )',
    calorias: 185,
  },
  {
    alimento: 'Salpicón  (na)',
    calorias: 218,
  },
  {
    alimento: 'Sandia  (160 gr )',
    calorias: 38,
  },
  {
    alimento: 'Sardina en aceite  (150 gr )',
    calorias: 350,
  },
  {
    alimento: 'Sardina en aceite  (50 gr )',
    calorias: 117,
  },
  {
    alimento: 'Sémola con leche (na)',
    calorias: 260,
  },
  {
    alimento: 'Sémola cruda  (15 gr )',
    calorias: 45,
  },
  {
    alimento: 'Sesos de cerdo   (100 gr )',
    calorias: 140,
  },
  {
    alimento: 'Sesos de vacuno  (100 gr )',
    calorias: 145,
  },
  {
    alimento: 'Sidra  (30 cc )',
    calorias: 10,
  },
  {
    alimento: 'Sopa con verdura y arroz  (na)',
    calorias: 140,
  },
  {
    alimento: 'Sopa de mariscos  (na)',
    calorias: 160,
  },
  {
    alimento: 'Sopa deshidratada  (na)',
    calorias: 63,
  },
  {
    alimento: 'Sopaipilla  (50 gr )',
    calorias: 130,
  },
  {
    alimento: ' Sopaipillas pasadas (60 gr )',
    calorias: 190,
  },
  {
    alimento: 'Sopa menudencias  (na)',
    calorias: 191,
  },
  {
    alimento: 'Sprite (100 cc )',
    calorias: 41,
  },
  {
    alimento: 'Sprite Light  (100 cc )',
    calorias: 1,
  },
  {
    alimento: 'Tallarines cocidos  (na)',
    calorias: 241,
  },
  {
    alimento: 'Tallarines c/salsa de carne  (na)',
    calorias: 505,
  },
  {
    alimento: 'Ternero asado  (150 gr )',
    calorias: 245,
  },
  {
    alimento: 'Tocino  (10 gr )',
    calorias: 75,
  },
  {
    alimento: 'Tomate  (250 gr )',
    calorias: 29,
  },
  {
    alimento: 'Tomate jugo  (100 gr )',
    calorias: 0,
  },
  {
    alimento: 'Tomate al jugo  (560 tr )',
    calorias: 106,
  },
  {
    alimento: 'Tomate jugo  (320 gr )',
    calorias: 74,
  },
  {
    alimento: 'Tomate relleno (na)',
    calorias: 170,
  },
  {
    alimento: 'Tom Collins (100 cc)',
    calorias: 250,
  },
  {
    alimento: 'Torta (200 gr.)',
    calorias: 420,
  },
  {
    alimento: 'Toronja (na)',
    calorias: 50,
  },
  {
    alimento: 'Tortilla de verduras t/m (na)',
    calorias: 152,
  },
  {
    alimento: 'Tunas (150 gr.)',
    calorias: 50,
  },
  {
    alimento: 'Turín (27 gr.)',
    calorias: 81,
  },
  {
    alimento: 'Tuti fruti en conserva (na)',
    calorias: 190,
  },
  {
    alimento: 'Ubre de vacuno (100 gr.)',
    calorias: 179,
  },
  {
    alimento: 'Ulte (50 gr.)',
    calorias: 14,
  },
  {
    alimento: 'Uva (200 gr.)',
    calorias: 140,
  },
  {
    alimento: 'Vermouth dulce (30 cc)',
    calorias: 45,
  },
  {
    alimento: 'Vermouth seco (30 cc)',
    calorias: 35,
  },
  {
    alimento: 'Vienesas (60 gr.)',
    calorias: 197,
  },
  {
    alimento: 'Vino blanco (100 cc)',
    calorias: 84,
  },
  {
    alimento: 'Vino dulce (100 cc)',
    calorias: 158,
  },
  {
    alimento: 'Vino tinto (100 cc)',
    calorias: 70,
  },
  {
    alimento: 'Vodka (50 cc)',
    calorias: 75,
  },
  {
    alimento: 'Wisky (100 cc)',
    calorias: 200,
  },
  {
    alimento: 'Yema de huevo (17 gr.)',
    calorias: 63,
  },
  {
    alimento: 'Yoghurt batido (175 gr.)',
    calorias: 159,
  },
  {
    alimento: 'Yoghurt c/fruta (175 gr.)',
    calorias: 159,
  },
  {
    alimento: 'Yoghurt sin azúcar (200 gr.)',
    calorias: 100,
  },
  {
    alimento: 'Zapallo cocido (100 gr.)',
    calorias: 30,
  },
  {
    alimento: 'Zapallo italiano cocido (150 gr.)',
    calorias: 15,
  },
  {
    alimento: 'Zanahoria cocida (100 gr.)',
    calorias: 45,
  },
  {
    alimento: 'Zanahoria cruda (60 gr.)',
    calorias: 29,
  },
  {
    alimento: 'Zanahoria jugo (100 gr.)',
    calorias: 40,
  },
];
