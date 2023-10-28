import { StyleSheet,View,Text, Pressable } from "react-native";
const GoalItem =(props)=>{
  const DeleteItemHandler =()=>{
    props.onDeleteItem(props.id);
  };
  return(
    <Pressable onPress={DeleteItemHandler}>
      <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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