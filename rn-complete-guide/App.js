import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('RE-RENDER');

  const addGoalHandler = (enteredGoal) => {
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random(), value: enteredGoal }
    ]);
    //setEnteredGoal();
    setIsAddMode(false);
  }
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  } 
  const removeGoalHandler = (goalId) => {
    setCourseGoals(
      currentGoals => {
        return currentGoals.filter((goal) => goal.id != goalId);
      }
    );
  };

  return (
    <View style={styles.main}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        onAddGoal={addGoalHandler} 
        onCancelGoal={cancelGoalHandler}
        visible={isAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            item={itemData.item.value}
            id={itemData.item.id}
            onDelete={(id) => { removeGoalHandler(id); }} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    padding: 50
  },
});
