import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])
  
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals( (currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}] )
    endAddGoalHandler();
  };

  
  function deleteGoalHandler(id){
    // esta funcion elimina uno porque el filter devuelve solo los elementos que no cumplan con la condicion 
    setCourseGoals(currentCourseGoals => {return currentCourseGoals.filter( (goal) => goal.id !== id );
    })
    console.log(courseGoals)
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>  
        <Button title="Add new Goal" color="#b180f0" onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals}
            renderItem={ (itemData) => {
              return(
                <GoalItem 
                  text={itemData.item.text} 
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />            
              );
            }}
            keyExtractor={ (item,index) => {
                return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  
  goalsContainer: {
    flex: 5
  },

});
