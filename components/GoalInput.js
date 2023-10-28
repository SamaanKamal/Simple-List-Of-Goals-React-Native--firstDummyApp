import { useState } from "react";
import { StyleSheet,View,TextInput,Button, Modal } from "react-native"; 
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
                <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler} value={goalsList}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:24,
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
    textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        padding:8
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