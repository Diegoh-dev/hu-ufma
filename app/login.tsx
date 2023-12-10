import { View } from "react-native";
import { ContainerImage } from "../components/ContainerImage";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/Button";
import { AntDesign } from '@expo/vector-icons';

export default function Login(){
  return (
    <View className="flex-1 items-center bg-colorWhite justify-center relative">
      {/* Colocar em um componente */}
      <View className="absolute top-4 left-8 bg-[#DEDEEB] rounded-full p-2">
      <AntDesign name="arrowleft" size={24} color="#414396" />
      </View>
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