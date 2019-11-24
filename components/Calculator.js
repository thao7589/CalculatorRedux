import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RenderButtons from './RenderButtons';

class Calculator extends Component {
    render() {
      return(
          <View style={styles.container}>
              <View style={styles.resultContainer}>
                  <Text style={styles.inputText}>{this.props.calculator.displayValue}</Text>
              </View> 
              <View style={styles.inputContainer}>
                  <RenderButtons />
              </View>
          </View>
      )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    resultContainer: {
      flex: 2,
      backgroundColor: '#1E1240'
    },
    inputContainer: {
      flex: 8,
      justifyContent: 'center',
      backgroundColor: '#3D0075'
    },
    inputText: {
      color: '#fff',
      fontSize: 80,
      fontWeight: 'bold',
      padding: 20,
      textAlign: 'right'
    },
    inputRow: {
      flex: 1,
      flexDirection: 'row',    
    }
});

const mapStateToProps = state => ({
    calculator: state.calculator
}); 

export default connect(mapStateToProps)(Calculator);