import { StyleSheet, TextInput, TextInputProps } from "react-native";
type InputComponentProps = TextInputProps 


export function InputComponent({...rest}: InputComponentProps){
  return (
    <>
    <TextInput
    style={styles.inputTex}
    placeholderTextColor={'#414396'}
    keyboardType="numeric"
    {...rest}
    />
    </>
  )
}

const styles = StyleSheet.create({
  inputTex:{
    width: 300,
    height: 50,
    borderRadius: 20,
    // borderWidth:2,
    // borderColor:'#414396',
    paddingLeft:20,
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#550ab1",
    fontWeight: "bold",
    backgroundColor:'#DEDEEB'
  }
})