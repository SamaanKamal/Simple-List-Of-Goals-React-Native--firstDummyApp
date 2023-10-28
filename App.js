import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goalsList,setGoalsList] = useState('');
  const [goals,setGoals] = useState([]);
  const goalInputHandler=(enteredText)=>{
    setGoalsList(enteredText);
  };
  const addGoalHandler =()=>{
    setGoals((currentGoals)=>{
      return [...currentGoals,{text:goalsList, id:Math.random().toString()}];
    });
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsList}>
        <FlatList data={goals} renderItem={(itemData)=>{
          return (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>)
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
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',

  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsList:{
    flex:7
  },
  goalItem:{
    borderBottomWidth:1,
    borderRadius:10,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    backgroundColor:"#5e0acc",
    padding:10,
    margin:7,
  },
  goalText:{
    color:'white'
  }
});
