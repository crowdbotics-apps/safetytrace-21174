import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList129917Navigator from '../features/ArticleList129917/navigator';
import Maps129904Navigator from '../features/Maps129904/navigator';
import BlankScreen0129876Navigator from '../features/BlankScreen0129876/navigator';
import ArticleList129875Navigator from '../features/ArticleList129875/navigator';
import Maps129862Navigator from '../features/Maps129862/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList129917: { screen: ArticleList129917Navigator },
Maps129904: { screen: Maps129904Navigator },
BlankScreen0129876: { screen: BlankScreen0129876Navigator },
ArticleList129875: { screen: ArticleList129875Navigator },
Maps129862: { screen: Maps129862Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
