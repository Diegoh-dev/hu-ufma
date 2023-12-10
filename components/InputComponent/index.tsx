import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputComponentProps extends TextInputProps {
  variant?:"primary" | "secondary";

}


export function InputComponent({variant='primary', style,...rest}: InputComponentProps){
  const styleInput = variant === 'primary' ? styles.inputPrimary : styles.inputSecondary
  return (
    <>
    <TextInput
    style={[styles.common,styleInput,style]}
    placeholderTextColor={'#414396'}
    // keyboardType="numeric"
    {...rest}
    />
    </>
  )
}

const styles = StyleSheet.create({
  common:{
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 10,
    // color: "#550ab1",
    paddingLeft:20,
    paddingHorizontal: 10,
    fontWeight: "bold",

  },
  inputPrimary:{
    backgroundColor:'#DEDEEB'
  },
  inputSecondary:{
    borderWidth:2,
    borderColor:'#414396',
  }
})