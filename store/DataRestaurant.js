 const RESTAURANT_DATA = [
    {
      name: 'Subway',
      image: require('../assets/subwaylogo.png'),
      details: 'Subway es una popular cadena de restaurantes de comida rápida que se especializa en la preparación de deliciosos sándwiches submarinos, también conocidos como "subs". ',
      menu: [
        'Subway Club: Pechuga de pollo, jamón, queso suizo, lechuga, tomate, cebolla y aderezo de mostaza y miel.',
        'Italian B.M.T.: Salami, pepperoni, jamón, queso italiano, lechuga, tomate, pepinillos y aderezo italiano.',
        'Vegetariano: Queso suizo, aguacate, espinacas, tomate, cebolla, pimientos verdes y aderezo de mayonesa.'
      ],
      importance: 1
    },
    {
      name: 'McDonalds',
      image: require('../assets/mcdon.png'),
      details: 'McDonald’s es una cadena de restaurantes de comida rápida. Sus principales productos son las hamburguesas, las papas fritas, los menús para el desayuno, los refrescos, los batidos, los helados, los postres y, recientemente, las ensaladas y frutas. En la mayoría de los restaurantes se han incluido distintas áreas con juegos para niños.',
      menu: [
        'Big Mac Meal: Hamburguesa Big Mac, papas fritas medianas y una bebida grande.',
        'McChicken Meal: McChicken, papas fritas medianas y una bebida grande.',
        'Quarter Pounder with Cheese Meal: Quarter Pounder con queso, papas fritas medianas y una bebida grande.'
      ],
      importance: 1
    },
    {
      name: 'Burger King',
      image: require('../assets/bk.png'),
      details: 'La especialidad de Burger King son las hamburguesas a la parrilla, conocidas por su sabor a la parrilla y jugosidad. Puedes elegir entre una variedad de hamburguesas, desde la clásica Whopper hasta opciones más innovadoras con ingredientes como tocino, queso, champiñones y salsas especiales.',
      menu: [
        'Whopper Meal: Whopper, papas fritas grandes y una bebida mediana.',
        'Cheese Bacon King Meal: Cheese Bacon King, anillos de cebolla, papas fritas grandes y una bebida mediana.',
        'Chicken Royale Meal: Chicken Royale, aros de cebolla, papas fritas grandes y una bebida mediana.'
      ],
      importance: 1
    },
    {
      name: 'Pizza Hut',
      image: require('../assets/pizzahut.png'),
      details: 'La especialidad de Pizza Hut, como su nombre indica, son las pizzas. Ofrecen una amplia variedad de opciones de pizza, desde las clásicas como la margarita y pepperoni hasta creaciones innovadoras con ingredientes únicos y sabrosos. Puedes elegir entre diferentes tipos de masas, como masa delgada, pan y masa rellena, según tus preferencias.',
      menu: [
        'Hawaiana: Piña, jamón, salsa de tomate y queso en masa pan.',
        'Suprema: Pepperoni, salchicha, champiñones, pimientos y cebolla en masa original.',
        'Vegetariana: Tomate, champiñones, cebolla, pimientos y aceitunas en masa delgada.'
      ],
      importance: 1
    },
    {
      name: 'KFC',
      image: require('../assets/kfc.png'),
      details: 'KFC, cuyo nombre completo es Kentucky Fried Chicken, es una cadena de restaurantes de comida rápida especializada en pollo frito. Fundada por el Coronel Harland Sanders, KFC se destaca por su receta original de pollo, que utiliza una mezcla única de 11 hierbas y especias. La cadena ofrece una variedad de productos, como sus famosos cubos de pollo, tiras de pollo, sándwiches y acompañamientos populares como puré de papas y biscuits.',
      menu: [   
        'Original Bucket: Piezas de pollo crujiente, papas fritas, ensalada de col y salsa secreta en un balde especial.',
        'Zinger Combo: Sándwich Zinger con pollo especiado, papas fritas, ensalada fresca y refresco.',
        'Twister Wrap: Wrap de pollo a la parrilla, lechuga, tomate, queso y salsa picante, acompañado de papas fritas y aderezo.'
      ],
      importance: 1
    },
    {
      name: 'Dunkin Donuts',
      image: require('../assets/Dunkin-Emblem.png'),
      details: 'Dunkin Donuts, famoso por su café fresco y donas deliciosas, ofrece una experiencia rápida y sabrosa. Desde las clásicas donas glaseadas hasta cafés especializados, este lugar es perfecto para disfrutar de un desayuno o merienda rápida.',
      menu: [   
        'Clásico Café Americano: Espresso robusto con agua caliente, para los amantes del café sin complicaciones.',
        'Dulce Delicia Glaseada: Dona esponjosa cubierta con un glaseado suave y dulce, perfecta para los que buscan un placer clásico.',
        'Mocca Caramel Crunch: Café con leche, jarabe de caramelo y un toque de crema batida, una mezcla deliciosa para los amantes de los sabores intensos.'
      ],
      importance: 1
    },
    {
      name: 'Taco Bell',
      image: require('../assets/tacobell.png'),
      details: 'Taco Bell, reconocido por su cocina Tex-Mex, ofrece una explosión de sabores audaces en cada bocado. Desde tacos crujientes hasta burritos suculentos, su menú diverso satisface los antojos de quienes buscan opciones rápidas y sabrosas. ',
      menu: [   
        'Crunchy Taco Box: Tacos crujientes rellenos con tu elección de carne, acompañados de nachos, guacamole, y salsa especial, todo en una caja característica.',
        'Quesadilla Supreme Meal: Quesadilla rellena de queso derretido y carne sabrosa, servida con arroz, frijoles, y una bebida refrescante.',
        'Burrito Fiesta Wrap: Burrito grande con arroz, frijoles, carne a elección, salsa picante, y queso, todo envuelto en una tortilla suave, con papas fritas y aderezo al lado.'
      ],
      importance: 1
    },
    {
      name: 'Mostaza',
      image: require('../assets/logo-mostaza-.jpg'),
      details: 'Mostaza es una cadena argentina de comida rápida con más de 20 años de trayectoria en el país. Sus especialidades son las hamburguesas, sándwiches, postres y cafetería. ',
      menu: [   
        'Cheddar Explosion Combo: Hamburguesa Mega Power Boom con carne de res sazonada, queso cheddar fundido, tocino crujiente, salsa especial Boom, lechuga fresca, rodajas de tomate y cebolla, entre panes suaves.',
        'Mega Cuatro XL Doble: Dos jugosas hamburguesas de carne de res sazonada, doble capa de queso cheddar fundido, doble porción de tocino crujiente, salsa especial Boom, lechuga fresca, rodajas de tomate y cebolla, todo entre panes suaves y tostados.',
        'Mega Power Beacon: Una suculenta hamburguesa con carne de res sazonada, queso cheddar fundido, doble porción de tocino crujiente, salsa especial Boom, lechuga fresca, rodajas de tomate y cebolla, entre panes suaves y tostados.'
      ],
      importance: 2
    },
    {
      name: 'Wendys',
      image: require('../assets/wendys.jpg'),
      details: 'Wendys, la cadena de comida rápida, es conocida por sus hamburguesas frescas y jugosas, papas fritas de corte piel, y ensaladas saludables. Con un compromiso con la calidad de los ingredientes, Wendys ofrece sabores auténticos y opciones innovadoras en un ambiente informal y acogedor. ',
      menu: [   
        'Daves Delight Combo: Hamburguesa Daves Single con carne fresca, queso, lechuga, tomate y mayonesa. Acompañada de papas fritas de corte piel y un refresco grande a elección.',
        'Spicy Chicken Bliss Box: Tiras de pollo picantes y crujientes, papas fritas de corte piel, ensalada fresca con aderezo ranch y un refresco refrescante.',
        'Garden Grilled Wrap Combo: Wrap de pollo a la parrilla con lechuga, tomate, queso y aderezo balsámico. Servido con papas fritas y un refresco grande. Una opción más ligera y llena de sabor.'
      ],
      importance: 2
    },
    {
      name: 'Lokotas',
      image: require('../assets/lokotas.jpg'),
      details: 'Lokotas, el auténtico rincón de empanadas, te invita a disfrutar de una experiencia culinaria única. Nuestras empanadas, rellenas de ingredientes frescos y sabrosos, son un festín para tus sentidos. Desde las clásicas opciones de carne jugosa hasta combinaciones innovadoras, cada bocado es una explosión de sabor y tradición. ',
      menu: [   
        'Clásica Criolla Combo: Empanada de carne jugosa con cebolla, huevo duro y aceitunas.',
        'Delicia Vegana Sampler: Empanada vegana rellena de champiñones, espinacas, y queso vegano. Servida con una salsa de tomate fresco y aguacate en cubos.',
        'Especial de Queso y Jamón: Empanada de queso fundido con trozos de jamón, una opción sabrosa para los amantes del queso.'
      ],
      importance: 2
    },
  ];
 
export default RESTAURANT_DATA;
 
  
  
  
