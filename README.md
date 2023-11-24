# GuiaRestoShows

1) Clonar el Repositorio de React Native:
1.1: Ubíquese en el directorio donde desea clonar el repositorio de su proyecto React Native. Utilice el comando "cd [nombre de la carpeta]" para cambiar la ubicación desde la terminal.

1.2: Clone el repositorio utilizando el comando "git clone [link SSH o HTTPS]".

1.3: Después de clonar el repositorio, acceda al directorio del proyecto. Por defecto, estará en la rama principal (main). Use el comando "git checkout Dev" para cambiar a la rama de desarrollo.
2) Versión Compatible de Node para React Native:
2.1: Verifique la versión de Node requerida para su proyecto React Native utilizando el comando "node -v". Si ya tiene la versión correcta (en este caso, v17.9.1), continúe con el paso 3. Si no tiene la versión necesaria, 
siga leyendo el paso 2 para obtener información sobre cómo instalar y gestionar la versión 17.9.1 de Node.
2.2: Si la versión necesaria no está instalada, procedemos con los siguientes pasos:
Instalamos la versión requerida mediante el siguiente comando:
nvm install 17.9.1
Luego, cambiamos a la versión recién instalada utilizando el comando:
nvm use 17.9.1

3)Instalación de cli e independencias:
3.1 Para poder ejecutar la aplicación en nuestro dispositivo móvil debemos de instalar el expo cli en nuestra carpeta clonada
Puedes instalar Expo CLI globalmente utilizando el siguiente comando:
npm install -g expo-cli
3.2 Instalar dependencias: Desde el directorio de la aplicación, ejecutar el siguiente comando para instalar las dependencias del proyecto:
npm install
3.3 Instalacion del navigation: este proyecto utiliza la biblioteca de navegación específica React Navigation, enotnces debemos de instalar la bilbiotecas
npm install @react-navigation/native
npm install @react-navigation/stack
3.4 La apicación también aplica el uso de la libreria React Native Maps, entonces debemos de instalarla de la siguiente manera:
npm install react-native-maps
3.5 Ahora podremos ejecutar la aplcacion desde la terminal con el comando: 
expo start
Para luego escanear el codigo con la aplicación que descargaremos en nuestro móvil; Expo Go
