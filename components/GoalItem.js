import { StyleSheet,View,Text, Pressable } from "react-native";
const GoalItem =(props)=>{
  const DeleteItemHandler =()=>{
    props.onDeleteItem(props.id);
  };
  return(
    <View style={styles.goalItem}>
      <Pressable android_ripple ={{color:"#210644"}}onPress={DeleteItemHandler} style={({pressed})=>{
        return pressed && styles.pressedItem  // for IOS
      }}>
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
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
        margin:7,
    },
    pressedItem:{
      opacity:0.5,
    }, // for IOS
    goalText:{
      padding:10,
      color:'white'
    }
});