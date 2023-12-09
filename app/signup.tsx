import { Text, View } from "react-native";
import { InputComponent } from "../components/InputComponent";

export default function SignUp(){
  return (
    <>
    <View className="flex-1 items-center">
      <Text className="text-purplePrimary text-[30px] font-bold mt-4" >Criar uma conta</Text>

      <View className="mt-3">
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Nome Completo</Text>

      <InputComponent variant="secondary"  placeholder="Digite seu nome completo" placeholderTextColor={'#6061A7'}/>
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Cartão SUS</Text>

      <InputComponent variant="secondary" placeholder="Digite o número do cartão SUS" placeholderTextColor={'#6061A7'} keyboardType="numeric"/>
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Prontuário</Text>

      <InputComponent variant="secondary" placeholder="Digite o número do seu prontuário" placeholderTextColor={'#6061A7'} keyboardType="numeric"/>
    </View>
    </View>
    </>
  )
}