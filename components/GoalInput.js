import { useState } from "react";
import { StyleSheet,View,TextInput,Button, Modal,Image } from "react-native"; 
const GoalInput =(props)=>{
    const [goalsList,setGoalsList] = useState('');
    const goalInputHandler=(enteredText)=>{
        setGoalsList(enteredText);
    };
    const addGoalHandler=()=>{
        props.addGoalHandler(goalsList);
        setGoalsList('');
    };
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler} value={goalsList}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"/> 
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

/* color="#b180f0"  for IOS  for Add Goal Button*/  
/* color="#f31282"  for IOS for Cancel Button */ 
// or vice versa but these colors looks better on IOS
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding:16,
        borderBottomColor:'#cccccc',
        backgroundColor:'#311b6b'
    },
    image:{
        margin:20,
        width:100,
        height:100
    },
    textInput:{
        borderWidth:1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width:'100%',
        padding:10,
    },
    buttonContainer:{
        marginTop:16,
        flexDirection: 'row'
    },
    button:{
        width:100,
        marginHorizontal:8,
    }
});