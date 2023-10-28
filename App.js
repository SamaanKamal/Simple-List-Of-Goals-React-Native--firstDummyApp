import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false);
  const [goals,setGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  const addGoalHandler =(goalsList)=>{
    setGoals((currentGoals)=>{
      return [...currentGoals,{text:goalsList, id:Math.random().toString()}];
    });
    endAddGoalHandler();
  };

  const DeleteItemHandler =(id)=>{
    setGoals((currentGoals)=>{
      return currentGoals.filter((goal)=>{
        return goal.id !== id;
      });
    });
  };
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button onPress={startAddGoalHandler} title='Add New Goal' color="#a065ec"/>
        <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsList}>
          <FlatList data={goals} renderItem={(itemData)=>{
            return (<GoalItem text={itemData.item.text}  onDeleteItem={DeleteItemHandler} id={itemData.item.id}/>);
          }} keyExtractor={(item,index)=>{
            return item.id;
          }}>
          </FlatList>
        </View>
      </View>
    </>
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
