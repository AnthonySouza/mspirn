
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import { Text, Badge, Button } from 'react-native-elements';
import { Icon } from 'react-native-eva-icons';

import {
  ProviderPropType,
  Animated as AnimatedMap,
  AnimatedRegion,
  Marker,
} from 'react-native-maps';
import PanController from './utils/PanController';
import InfoMarker from './utils/InfoMarker';
import { styles } from './styles/style';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = -22.2031801;
const LONGITUDE = -47.3802394;
const LATITUDE_DELTA = 0.0622;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ITEM_SPACING = 10;
const ITEM_PREVIEW = 10;
const ITEM_WIDTH = screen.width - 2 * ITEM_SPACING - 2 * ITEM_PREVIEW;
const SNAP_WIDTH = ITEM_WIDTH + ITEM_SPACING;
const ITEM_PREVIEW_HEIGHT = 150;
const SCALE_END = screen.width / ITEM_WIDTH;
const BREAKPOINT1 = 246;
const BREAKPOINT2 = 350;
const ONE = new Animated.Value(1);

function getMarkerState(panX, panY, scrollY, i) {
  const xLeft = -SNAP_WIDTH * i + SNAP_WIDTH / 2;
  const xRight = -SNAP_WIDTH * i - SNAP_WIDTH / 2;
  const xPos = -SNAP_WIDTH * i;

  const isIndex = panX.interpolate({
    inputRange: [xRight - 1, xRight, xLeft, xLeft + 1],
    outputRange: [0, 1, 1, 0],
    extrapolate: 'clamp',
  });

  const isNotIndex = panX.interpolate({
    inputRange: [xRight - 1, xRight, xLeft, xLeft + 1],
    outputRange: [1, 0, 0, 1],
    extrapolate: 'clamp',
  });

  const center = panX.interpolate({
    inputRange: [xPos - 10, xPos, xPos + 10],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const selected = panX.interpolate({
    inputRange: [xRight, xPos, xLeft],
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const translateY = Animated.multiply(isIndex, panY);

  const translateX = panX;

  const anim = Animated.multiply(
    isIndex,
    scrollY.interpolate({
      inputRange: [0, BREAKPOINT1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
  );

  const scale = Animated.add(
    ONE,
    Animated.multiply(
      isIndex,
      scrollY.interpolate({
        inputRange: [BREAKPOINT1, BREAKPOINT2],
        outputRange: [0, SCALE_END - 1],
        extrapolate: 'clamp',
      })
    )
  );

  // [0 => 1]
  let opacity = scrollY.interpolate({
    inputRange: [BREAKPOINT1, BREAKPOINT2],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // if i === index: [0 => 0]
  // if i !== index: [0 => 1]
  opacity = Animated.multiply(isNotIndex, opacity);

  // if i === index: [1 => 1]
  // if i !== index: [1 => 0]
  opacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  let markerOpacity = scrollY.interpolate({
    inputRange: [0, BREAKPOINT1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  markerOpacity = Animated.multiply(isNotIndex, markerOpacity).interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const markerScale = selected.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  return {
    translateY,
    translateX,
    scale,
    opacity,
    anim,
    center,
    selected,
    markerOpacity,
    markerScale,
  };
}

class AnimatedViews extends React.Component {
  constructor(props) {
    super(props);

    const panX = new Animated.Value(0);
    const panY = new Animated.Value(0);

    const scrollY = panY.interpolate({
      inputRange: [-1, 1],
      outputRange: [1, -1],
    });

    const scrollX = panX.interpolate({
      inputRange: [-1, 1],
      outputRange: [1, -1],
    });

    const scale = scrollY.interpolate({
      inputRange: [0, BREAKPOINT1],
      outputRange: [1, 1.6],
      extrapolate: 'clamp',
    });

    const translateY = scrollY.interpolate({
      inputRange: [0, BREAKPOINT1],
      outputRange: [0, -100],
      extrapolate: 'clamp',
    });

    const markers = [
      {
        id: 0,
        details: {
          name: 'PSM',
          fullName: 'Posto De Saúde Municipal Ariana',
          end: 'R. Segundo Facciolli, 630 - Jardim Ariana, Leme - SP, 13617-540',
          tel: '(19) 3571-7075',
          link: 'https://goo.gl/maps/WYV5SZjCFtzJSqSb6',
          type: (mapStyles.hc),
          queue: 22,
          isOpen: true
        },
        coordinate: {
          latitude: -22.1949657,
          longitude: -47.3821114,
        }

      },
      {
        id: 1,
        details: {
          name: 'PSF',
          fullName: 'Programa De Saúde Da Família Vanessa',
          end: 'Rua, Av. Joaquim Adolfo Amadeu, 470 - Jardim Adelina, Leme - SP, 13617-664',
          tel: '(19) 3571-9540',
          link: 'https://goo.gl/maps/XGw9QKp5sNnf4nxX9',
          type: (mapStyles.hc),
          queue: 22,
          isOpen: true
        },
        coordinate: {
          latitude: -22.1956503,
          longitude: -47.3625112,
        }

      },
      {
        id: 2,
        details: {
          name: 'CMI',
          fullName: 'Centro Médico Integrado Antônio Macarenko',
          end: 'Av. Dr. Hermínio Ometto, 705 - Jardim Alvorada, Leme - SP, 13610-760',
          tel: '(19) 3571-3064',
          link: 'https://goo.gl/maps/YGQ19qJt6q8NzNii9',
          type: (mapStyles.hospital),
          queue: 22,
          isOpen: false
        },
        coordinate: {
          latitude: -22.1966139,
          longitude: -47.376641,
        }

      }
      ,
      {
        id: 3,
        details: {
          name: 'PSF',
          fullName: 'Programa De Saúde Da Família Itamaraty',
          end: 'Rua Otavio Sardinha, 42 - Jardim Itamarati, Leme - SP, 13617-435',
          tel: '(19) 3571-9995',
          link: 'https://goo.gl/maps/1662eMvFDtvAW7e5A',
          type: (mapStyles.hc),
          queue: 55,
          isOpen: true
        },
        coordinate: {
          latitude: -22.187554,
          longitude: -47.3746455,
        }

      },
      {
        id: 4,
        details: {
          name: 'CS II',
          fullName: 'Centro de Saúde II',
          end: 'R. José Manoel de Arruda Oliveira, 150 - Vila Bela Vista, Leme - SP, 13611-420',
          tel: '(19) 3573-6355',
          link: 'https://goo.gl/maps/vmXpQFj1UMPdCcJx7',
          type: (mapStyles.hc),
          queue: 13,
          isOpen: true
        },
        coordinate: {
          latitude: -22.1876732,
          longitude: -47.3811364,
        }

      },
      {
        id: 5,
        details: {
          name: 'PSM',
          fullName: 'PSM João Leme',
          end: 'Av. Dr. Hermínio Ometto, 2470 - Jardim Sao Jose, Leme - SP, 13610-760',
          tel: '(19) 3571-9361',
          link: 'https://goo.gl/maps/i6EVpL9R4uDejzZL6',
          type: (mapStyles.hc),
          queue: 2,
          isOpen: true
        },
        coordinate: {
          latitude: -22.2030309,
          longitude: -47.3884964,
        }

      }

    ];

    const animations = markers.map((m, i) =>
      getMarkerState(panX, panY, scrollY, i)
    );

    this.state = {
      panX,
      panY,
      animations,
      index: 0,
      canMoveHorizontal: true,
      scrollY,
      scrollX,
      scale,
      translateY,
      markers,
      region: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };
  }

  componentDidMount() {
    const { region, panX, panY, scrollX, markers } = this.state;

    panX.addListener(this.onPanXChange);
    panY.addListener(this.onPanYChange);

    region.stopAnimation();
    region
      .timing({
        latitude: scrollX.interpolate({
          inputRange: markers.map((m, i) => i * SNAP_WIDTH),
          outputRange: markers.map(m => m.coordinate.latitude),
        }),
        longitude: scrollX.interpolate({
          inputRange: markers.map((m, i) => i * SNAP_WIDTH),
          outputRange: markers.map(m => m.coordinate.longitude),
        }),
        duration: 0,
      })
      .start();
  }

  onStartShouldSetPanResponder = e => {
    // we only want to move the view if they are starting the gesture on top
    // of the view, so this calculates that and returns true if so. If we return
    // false, the gesture should get passed to the map view appropriately.
    const { panY } = this.state;
    const { pageY } = e.nativeEvent;
    const topOfMainWindow = ITEM_PREVIEW_HEIGHT + panY.__getValue();
    const topOfTap = screen.height - pageY;

    return topOfTap < topOfMainWindow;
  };

  onMoveShouldSetPanResponder = e => {
    const { panY } = this.state;
    const { pageY } = e.nativeEvent;
    const topOfMainWindow = ITEM_PREVIEW_HEIGHT + panY.__getValue();
    const topOfTap = screen.height - pageY;

    return topOfTap < topOfMainWindow;
  };

  onPanXChange = ({ value }) => {
    const { index } = this.state;
    const newIndex = Math.floor((-1 * value + SNAP_WIDTH / 2) / SNAP_WIDTH);
    if (index !== newIndex) {
      this.setState({ index: newIndex });
    }
  };

  onPanYChange = ({ value }) => {
    const {
      canMoveHorizontal,
      region,
      scrollY,
      scrollX,
      markers,
      index,
    } = this.state;
    const shouldBeMovable = Math.abs(value) < 2;
    if (shouldBeMovable !== canMoveHorizontal) {
      this.setState({ canMoveHorizontal: shouldBeMovable });
      if (!shouldBeMovable) {
        const { coordinate } = markers[index];
        region.stopAnimation();
        region
          .timing({
            latitude: scrollY.interpolate({
              inputRange: [0, BREAKPOINT1],
              outputRange: [
                coordinate.latitude,
                coordinate.latitude - LATITUDE_DELTA * 0.5 * 0.375,
              ],
              extrapolate: 'clamp',
            }),
            latitudeDelta: scrollY.interpolate({
              inputRange: [0, BREAKPOINT1],
              outputRange: [LATITUDE_DELTA, LATITUDE_DELTA * 0.5],
              extrapolate: 'clamp',
            }),
            longitudeDelta: scrollY.interpolate({
              inputRange: [0, BREAKPOINT1],
              outputRange: [LONGITUDE_DELTA, LONGITUDE_DELTA * 0.5],
              extrapolate: 'clamp',
            }),
            duration: 0,
          })
          .start();
      } else {
        region.stopAnimation();
        region
          .timing({
            latitude: scrollX.interpolate({
              inputRange: markers.map((m, i) => i * SNAP_WIDTH),
              outputRange: markers.map(m => m.coordinate.latitude),
            }),
            longitude: scrollX.interpolate({
              inputRange: markers.map((m, i) => i * SNAP_WIDTH),
              outputRange: markers.map(m => m.coordinate.longitude),
            }),
            duration: 0,
          })
          .start();
      }
    }
  };

  onRegionChange(/* region */) {
    // this.state.region.setValue(region);
  }

  render() {
    const {
      panX,
      panY,
      animations,
      canMoveHorizontal,
      markers,
      region,
    } = this.state;

    return (
      <View style={mapStyles.appContainer}>
        <View style={mapStyles.buttonContainer}>
        <Icon style={mapStyles.routeButtonStyle} fill={'#fff'} name='arrow-forward' height='35' width='' />
        </View>

      <View style={mapStyles.container}>
        <PanController
          style={mapStyles.container}
          vertical
          horizontal={canMoveHorizontal}
          xMode="snap"
          snapSpacingX={SNAP_WIDTH}
          yBounds={[-1 * screen.height, 0]}
          xBounds={[-screen.width * (markers.length - 1), 0]}
          panY={panY}
          panX={panX}
          onStartShouldSetPanResponder={this.onStartShouldSetPanResponder}
          onMoveShouldSetPanResponder={this.onMoveShouldSetPanResponder}
        >
          <AnimatedMap
            provider={this.props.provider}
            style={mapStyles.map}
            region={region}
            onRegionChange={this.onRegionChange}
          >
            {markers.map((marker, i) => {
              const { selected, markerOpacity, markerScale } = animations[i];

              return (
                <Marker key={marker.id} coordinate={marker.coordinate}>
                  <InfoMarker
                    style={{
                      opacity: markerOpacity,
                      transform: [{ scale: markerScale }],
                    }}
                    name={marker.details.name}
                    selected={selected}
                  />
                </Marker>
              );
            })}
          </AnimatedMap>
          <View style={mapStyles.itemContainer}>
            {markers.map((marker, i) => {
              const { translateY, translateX, scale, opacity } = animations[i];

              return (
                <Animated.View
                  key={marker.id}
                  style={[
                    mapStyles.item,
                    {
                      opacity,
                      transform: [/*{ translateY },*/ { translateX }, { scale }],
                    },
                    mapStyles.mapMarkerViewInfoContend
                  ]}
                >
                  <View>
                    <View style={mapStyles.mapMarkerViewInfoContend}>
                      <View style={[mapStyles.mapMarkerViewInfoBadge, marker.details.type]}>
                        <Text style={mapStyles.mapMarkerViewInfoName}>{marker.details.name}</Text>
                      </View>
                      <View style={[mapStyles.mapMarkerViewInfoBadge, { backgroundColor: '#3E8075' }]}>
                        <Text style={mapStyles.mapMarkerViewInfoName}>{marker.details.queue}   <Icon fill={'#fff'} name='people' height='10' width='10' /></Text>
                      </View>
                      <View style={[mapStyles.mapMarkerViewInfoBadge, { backgroundColor: '#016ED4' }]}>
                        <Text style={mapStyles.mapMarkerViewInfoName}>{marker.details.isOpen ? 'Aberto' : 'Fechado'}</Text>
                      </View>
                    </View>

                    <Text style={mapStyles.mapMarkerViewInfoTitle}>{marker.details.fullName}</Text>
                    <Text style={mapStyles.mapMarkerViewInfoAddress}>{marker.details.end}</Text>
                    <Text style={mapStyles.mapMarkerViewInfoAddress}>{marker.details.tel}</Text>
                  </View>
                </Animated.View>
              );
            })}

          </View>
        </PanController>
      </View>
      </View>
    );
  }
}

AnimatedViews.propTypes = {
  provider: ProviderPropType,
};

const mapStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  appContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  buttonContainer: {
    position: 'absolute',
    height: 65,
    width: 65,
    backgroundColor: '#328c73',
    right: 40,
    bottom: 110,
    zIndex: 999999,
    borderRadius: 50,
    alignItems: 'center'
  },
  routeButtonStyle: {
    paddingTop: 12
  },
  itemContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: ITEM_SPACING / 2 + ITEM_PREVIEW,
    position: 'absolute',
    // top: screen.height - ITEM_PREVIEW_HEIGHT - 64,
    paddingTop: screen.height - ITEM_PREVIEW_HEIGHT - 64,
    // paddingTop: !ANDROID ? 0 : screen.height - ITEM_PREVIEW_HEIGHT - 64,
  },
  map: {
    backgroundColor: 'transparent',
    ...StyleSheet.absoluteFillObject,
  },
  item: {
    width: ITEM_WIDTH,
    height: screen.height + 2 * ITEM_PREVIEW_HEIGHT,
    backgroundColor: '#fff',
    marginHorizontal: ITEM_SPACING / 2,
    overflow: 'hidden',
    borderRadius: 6,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    padding: 10,
    elevation: 3
  },
  mapMarkerViewInfoContend: {
    marginBottom: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  mapMarkerViewInfoTitle: {
    color: '#202020',
    fontSize: 28
  },
  mapMarkerViewInfoAddress: {
    color: '#404040',
    fontSize: 18
  },
  mapMarkerViewInfoName: {
    position: 'relative',
    color: '#fff'
  },
  mapMarkerViewInfoBadge: {
    position: 'relative',
    borderRadius: 2,
    paddingHorizontal: 10,
    marginRight: 10
  },

  hc: {
    backgroundColor: '#a5a5a5',
    borderColor: '#b5b5b5'
  },
  hospital: {
    backgroundColor: '#fbfb'
  },
  routeButton: {
    position: 'absolute',
    maxHeight: 64,
    maxWidth: 64,
    zIndex: 1000
  },
  routeButtonStyle: {
    height: 64,
    width: 64
  }
});


const MapForm = ({ navigation }) => (
  <AnimatedViews></AnimatedViews>
);

MapForm.navigationOptions = {
  title: 'Localizar Unidades'
}

export default MapForm