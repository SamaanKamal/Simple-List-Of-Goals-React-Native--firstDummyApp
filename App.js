import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals,setGoals] = useState([]);
  const addGoalHandler =(goalsList)=>{
    setGoals((currentGoals)=>{
      return [...currentGoals,{text:goalsList, id:Math.random().toString()}];
    });
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsList}>
        <FlatList data={goals} renderItem={(itemData)=>{
          return (<GoalItem text={itemData.item.text} />);
        }} keyExtractor={(item,index)=>{
          return item.id;
        }}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  goalsList:{
    flex:7
  },
});
