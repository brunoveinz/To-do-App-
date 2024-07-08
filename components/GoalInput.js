import { View, Text, StyleSheet, TextInput,Button, Modal, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'


const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredTex) {
        setEnteredGoalText(enteredTex)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    };

    return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
            <TextInput 
                style={styles.TextInput} placeholder='Your course is goal!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add goal' onPress={addGoalHandler} color={'#b180f0'} />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color={'#f31282'}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'

    },
    
    TextInput:{
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        padding: 16,
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color:'#120438',
        borderColor: '#e4d0ff'
    },

    buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
    },
    
    button:{
        width: 100,
        marginHorizontal: 8
    },
    Image:{
        width: 100,
        height: 100,
        margin: 20 
    }
});