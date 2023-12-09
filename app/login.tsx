import { View } from "react-native";
import { ContainerImage } from "../components/ContainerImage";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/Button";

export default function Login(){
  return (
    <View className="flex-1 items-center bg-colorWhite justify-center">
    <ContainerImage texto={`Olá \n Bem vindo de volta`}/>

    <View className="mt-16">
      <InputComponent keyboardType="numeric" placeholder="Prontuário"/>
      <InputComponent keyboardType="numeric" placeholder="Cartão sus"/>
    </View>

    <View className="mt-16">
    <ButtonComponent title="Entrar"/>
    </View>
    </View>
  )
}