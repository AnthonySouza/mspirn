import { StyleSheet, Dimensions, NavigatorIOS } from 'react-native'
import { heightPercentageToDP, __HEIGHT, SCREEN_WIDTH, } from '../utils/functions'
import {
  APP_DEFAULT_COLOR_1,
  APP_DEFAULT_COLOR_2,
  APP_DEFAULT_COLOR_3,
  APP_DEFAULT_COLOR_4,
  APP_DEFAULT_COLOR_5,
  APP_STATUS_BAR_COLOR_1,
  APP_STATUS_BAR_COLOR_2,
  APP_TEXT_COLOR_WHITE
} from '../../theme/main_theme'

import { normalize } from '../utils/functions'

const SIZE = 35;
const HALO_RADIUS = 6;
const ARROW_SIZE = 7;
const ARROW_DISTANCE = 6;
const HALO_SIZE = SIZE + HALO_RADIUS;
const HEADING_BOX_SIZE = HALO_SIZE + ARROW_SIZE + ARROW_DISTANCE;
const colorOfmyLocationMapMarker = 'blue';

/**
* @author Antonio Souza 
**/
export const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
    flex: 1
  },
  inputContent: {
    flex: 1,
    justifyContent: 'center'
  },
  loginInitViewContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: heightPercentageToDP(25),
    backgroundColor: APP_DEFAULT_COLOR_2
  },
  loginInitTopAppTitleText: {
    fontFamily: 'Manjari Bold',
    fontSize: 70,
    color: '#fff'
  },
  loginInitTopAppSubTitleText: {
    position: 'relative',
    textAlign: 'center',
    fontFamily: 'Manjari Regular',
    paddingRight: 25,
    paddingLeft: 25,
    fontSize: 30,
    color: '#fff'
  },
  inputText: {
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 4,
    backgroundColor: '#F7F7F7',
    textAlign: 'left',
    margin: 20,
    padding: 10,
    color: '#878787'
  },
  buttonNext: {
    backgroundColor: APP_DEFAULT_COLOR_2,
    paddingVertical: 15,
    margin: 25,
    borderRadius: 10,
    marginTop: 100,
  },
  buttonNextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30
  },
  buttonLoginError: {
    backgroundColor: '#f3f3f3',
    paddingVertical: 10,
    margin: 25,
    marginTop: 0,
    borderRadius: 10,
    borderColor: '#f9f9f9',
    borderWidth: 1
  },
  buttonLoginErrorText: {
    color: '#a5a5a5',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 30
  },
  bottomButtons: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  bottomButtonsText: {
    color: '#a1a1a1',
    fontWeight: '700',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  mais: {
    color: '#FF383A'

  },

  // main form styles //
  mainFormContent: {
    backgroundColor: '#fff'
  },
  topMenu: {
    position: 'relative',
    backgroundColor: APP_DEFAULT_COLOR_2,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 5,
    marginBottom: 5,
    height: normalize(100),
  },
  topMenuSideBarButton: {
    borderRadius: 50
  },
  topMenuSideBarButtonIcon: {
    position: 'relative',
    height: 48,
    width: 48
  },
  topMenuAppTitle: {
    fontFamily: 'Manjari Regular',
    fontSize: 60,
    color: '#fff'
  },
  collumnCard: {
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 7
  },
  touchable: {
    borderRadius: 23,
    height: normalize(130),
    marginBottom: 10
  },
  wellcomeView: {
    borderRadius: 0,
    height: normalize(130),
    marginBottom: 10
  },
  cardIcon: {
    marginBottom: 5,
    marginRight: 5
  },
  cardButton: {
    padding: 15,
    height: '100%',
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  cardTitle: {
    alignSelf: 'center',
    fontFamily: 'Open Sans Regular',
    fontSize: normalize(30),
    color: '#5A5A5A',
    marginLeft: 10
  },
  cardTitleContent: {
    flexDirection: 'row'
  },
  cardInfo: {
    fontFamily: 'Manjari Regular',
    fontSize: normalize(25),
    color: '#5A5A5A',
    textAlign: 'left',
    margin: 10
  },
  leftSideBar: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listItem: {

  },
  leftViewAppName: {
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 100
  },
  leftViewAppNameText: {
    fontSize: normalize(50),
    fontFamily: 'Manjari Regular',
    color: APP_DEFAULT_COLOR_2
  },
  leftMenuIcon: {
    position: 'relative',
    height: 30,
    width: 30
  },
  listSeparator: {

  },
  listSeparatorText: {
    fontSize: normalize(20),
    color: '#505050'
  },
  listText: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Manjari Regular'
  },

  //New Query Form
  nqfContend: {
    position: 'relative',
    height: Dimensions.get('window').height - 80,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10
  },
  nqfTextInput: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
    fontSize: 25,
    fontFamily: 'Manjari Regular',
    textAlign: 'justify',
    textAlignVertical: "top",
    backgroundColor: '#fffb',
    padding: 10
  },
  nqfTextDateInput: {

    marginBottom: 10,
    fontSize: 25,
    fontFamily: '',
    textAlign: 'justify',
    textAlignVertical: "top",
    backgroundColor: '#fffb',
    padding: 10,
    elevation: 2,
    borderRadius: 5,
    borderColor: '#808080'
  },
  dateInputContend: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    right: 0
  },
  nqfTextDateInputLabel: {
    fontSize: 20,
    color: '#404040',
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    maxHeight: 48,
    marginRight: 10
  },
  nqfProcceedButton: {
    position: 'absolute',
    height: 75,
    width: 75,
    bottom: 20,
    right: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  nqfProcceedButtonIcon: {
    position: 'absolute',
    left: -6,
    top: -5
  },
  nqfDatePickerContend: {
    backgroundColor: '#fbfb',
    height: 100,
  },
  nqfDatePicker: {

  },
  // MapForm

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  mapMarker: {
    zIndex: 1000,
  },
  // The container is necessary to protect the markerHalo shadow from clipping

  heading: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: HEADING_BOX_SIZE,
    height: HEADING_BOX_SIZE,
    alignItems: 'center',
  },
  headingPointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: ARROW_SIZE * 0.75,
    borderBottomWidth: ARROW_SIZE,
    borderLeftWidth: ARROW_SIZE * 0.75,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colorOfmyLocationMapMarker,
    borderLeftColor: 'transparent',
  },
  markerHalo: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    width: HALO_SIZE,
    height: HALO_SIZE,
    borderRadius: Math.ceil(HALO_SIZE / 2),
    margin: (HEADING_BOX_SIZE - HALO_SIZE) / 2,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  marker: {
    justifyContent: 'center',
    backgroundColor: colorOfmyLocationMapMarker,
    width: SIZE,
    height: SIZE,
    borderRadius: Math.ceil(SIZE / 2),
    margin: (HEADING_BOX_SIZE - SIZE) / 2,
  },
  markerText: { width: 0, height: 0 },

  nqf_desc: {
    position: "relative",
    width: Dimensions.get('window').width,
    height: '100%backgroundColor',
    backgroundColor: '#fbfb'
  },
  
  udfContent: {
    position: 'relative'
  }

});