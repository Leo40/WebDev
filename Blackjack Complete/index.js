import MainScreen from './screens/MainScreen.js'

let currentScreen = new MainScreen();
do {
    currentScreen = currentScreen.execute();
} while(currentScreen);