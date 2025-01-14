import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'


const GoalItem = (props) => {
  return (
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text> 
          </View>
      </Pressable>
  );
}

export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
    
    goalText: {
    color: 'white',
    fontSize: '50px',
    padding: 6,
    }
});