# hotelApp
ionic :
Constructions de production
Pour exécuter ou créer votre application pour la production, exécutez
=> ionic cordova run android --list
=> ionic cordova run android --target=RZ8MB2YLJ9H
=> ionic cordova run android --prod --release
 ou
=>ionic cordova build android --prod --release
 --------------------------------
Signer Android APK
Si vous souhaitez publier votre application dans le Google Play Store, vous devez signer votre fichier APK. Pour ce faire, vous devez créer un nouveau certificat / magasin de clés.

Générons votre clé privée à l'aide de la commande keytool fournie avec le JDK:

=> keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
Vous serez d'abord invité à créer un mot de passe pour le magasin de clés. Ensuite, répondez aux autres questions des bons outils et quand tout sera fait, vous devriez avoir un fichier appelé my-release-key.jks créé dans le répertoire courant.

Remarque : assurez-vous d'enregistrer ce fichier dans un endroit sûr, si vous le perdez, vous ne pourrez pas soumettre de mises à jour à votre application!

Pour signer l'APK non signé, exécutez l'outil jarsigner qui est également inclus dans le JDK:

=> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias

Cela signe l'APK en place. Enfin, nous devons exécuter l'outil zip align pour optimiser l'APK. L'outil zipalign se trouve dans /path/to/Android/sdk/build-tools/VERSION/zipalign. Par exemple, sous OS X avec Android Studio installé, zipalign est dans ~/Library/Android/sdk/build-tools/VERSION/zipalign:

=> zipalign -v 4 app-release-unsigned.apk HelloWorld.apk
Pour vérifier que votre apk est signé, exécutez apksigner. L'apksigner peut également être trouvé dans le même chemin que l'outil zipalign:

=> apksigner verify HelloWorld.apk
------------------------------------------------
