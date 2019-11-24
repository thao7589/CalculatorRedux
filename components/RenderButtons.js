import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import InputNumberButton from './InputNumberButton';
import { updateInput, clearInput } from '../actions/Handle';

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
            this.props.updateInput('displayValue', (displayValue === '0') ? input : displayValue + input);
            if (!nextValue) {
                this.props.updateInput('firstValue', firstValue + input);
            } else {
                this.props.updateInput('secondValue', secondValue + input);
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            this.props.updateInput('nextValue', true);
            this.props.updateInput('operator', input);
            this.props.updateInput('displayValue', (operator !== null ? displayValue.substr(0, displayValue.length -1) : displayValue) + input);
            break;       
        case '.':
            let dot = displayValue.toString().slice(-1);

            this.props.updateInput('displayValue', dot !== '.' ? displayValue + input : displayValue);
            if (!nextValue) {
                this.props.updateInput('firstValue', firstValue + input);
            } else {
                this.props.updateInput('secondValue', secondValue + input);
            }
            break;  
        case 'CLEAR': 
            this.props.clearInput();
            break;
        case 'DEL':
            let string = displayValue.toString();
            let deletedString = string.substr(0, string.length - 1);
            let length = string.length;

            this.props.updateInput('displayValue', length == 1 ? '0' : deletedString);
            this.props.updateInput('firstValue', length == 1 ? '0' : deletedString);
            break;    
        case '=':
            let formatOperator = operator == "x" ? "*" : operator;
            let result = eval(firstValue + formatOperator + secondValue);

            this.props.updateInput('displayValue', result % 1 === 0 ? result : result.toFixed(2));
            this.props.updateInput('firstValue', result % 1 === 0 ? result : result.toFixed(2));
            this.props.updateInput('secondValue', '');
            this.props.updateInput('nextValue', false);
            this.props.updateInput('operator', null);
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

export default connect(mapStateToProps, { updateInput, clearInput })(RenderButtons)