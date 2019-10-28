import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

/**
* @author Antonio Souza
* @class InfoBadge
**/
class InfoBadge extends Component {
  state = {}
  render() {
    const { mode } = this.props;

    switch (mode) {
      case 'hc':
        return (
          <View style={[styles.infoBadgeContend, styles.hc]}>

          </View>
        )
      case 'hospital':
        return (
          <View style={[styles.infoBadgeContend, styles.hospital]}>
            
          </View>
        )
    }
    return (
      <View style={styles.infoBadgeContend}>
        
      </View>
    )

  }
}

InfoBadge.propTypes = {
  mode: PropTypes.string
};

const styles = StyleSheet.create({
  infoBadgeContend: {

  },
  
  hc: {
  
  },
  hospital: {
    
  }
});

export default InfoBadge