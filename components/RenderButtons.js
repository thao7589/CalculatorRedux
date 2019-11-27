import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import InputNumberButton from './InputNumberButton';
import {numberInput, operatorInput, dotInput, clearInput, delInput, handleCalculator} from '../actions/Handle';

class RenderButtons extends Component {
    constructor(props) {
        super(props);
    }

    handleInput = input => {
        const { displayValue, operator, firstValue, secondValue, nextValue } = this.props.calculator;

        switch(input) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            this.props.numberInput('displayValue', input);
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            this.props.operatorInput('operator', input);
            break;       
        case '.':
            this.props.dotInput('dot', input)
            break;  
        case 'CLEAR': 
            this.props.clearInput();
            break;
        case 'DEL':
            this.props.delInput();
            break;    
        case '=':
            this.props.handleCalculator();
            break;  
        }
    }

    renderButtons = () => {
        let layouts = buttons.map((buttonRow, rowIndex) => {
            let rowItem = buttonRow.map((buttonItem, buttonIndex) => {
              return <InputNumberButton value={buttonItem} handleOnPress={this.handleInput.bind(this, buttonItem)} key={'btn-' + buttonIndex} />
            })
            return <View style={styles.inputRow} key={'row-' + rowIndex}>{rowItem}</View>
          })
      
        return layouts;
    }

    render() {
        return(
            this.renderButtons()
        )
    }
};

const buttons = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'], 
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
];

const styles = StyleSheet.create({
    inputRow: {
        flex: 1,
        flexDirection: 'row',    
    }
});

const mapStateToProps = state => ({
    calculator: state.calculator
}); 

export default connect(mapStateToProps, { numberInput, clearInput, operatorInput, dotInput, delInput, handleCalculator })(RenderButtons)