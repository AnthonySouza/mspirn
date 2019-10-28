import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, Animated } from 'react-native';

class InfoMarker extends React.Component {
  render() {
    const { name, selected, style } = this.props;

    const background = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#328c73', '#4da2ab'],
    });

    const border = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#328c73', '#007a87'],
    });

    return (
      <Animated.View style={[styles.container, style]}>
        <Animated.View
          style={[
            styles.bubble,
            {
              backgroundColor: background,
              borderColor: border,
            },
          ]}
        >
          <Text style={styles.name}>{name}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.arrowBorder, { borderTopColor: border }]}
        />
        <Animated.View style={[styles.arrow, { borderTopColor: background }]} />
      </Animated.View>
    );
  }
}

InfoMarker.propTypes = {
  name: PropTypes.any,
  selected: PropTypes.object.isRequired,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#328c73',
    paddingVertical: 2,
    paddingHorizontal: 4, 
    borderRadius: 3,
    borderColor: '#328c73',
    borderWidth: 0.5,
  },
  name: {
    color: '#fff',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 4,
    borderTopColor: '#328c73',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 4,
    borderTopColor: '#328c73',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  selectedBubble: {
    backgroundColor: '#4da2ab',
    borderColor: '#007a87',
  },
  selectedArrow: {
    borderTopColor: '#4da2ab',
  },
  selectedArrowBorder: {
    borderTopColor: '#007a87',
  },
});

export default InfoMarker;
