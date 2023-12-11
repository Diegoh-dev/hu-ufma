import { Text, View } from "react-native";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/Button";
import { AntDesign } from '@expo/vector-icons';
import { ButtonBack } from "../components/ButtonBack";

export default function SignUp(){
  return (
    <>
    <View className="flex-1 items-center">
    <ButtonBack/>
      <Text className="text-purplePrimary text-[30px] font-bold mt-4" >Criar uma conta</Text>
      <Text className="text-purplePrimary text-base font-medium mt-2" >Seja Bem vindo</Text>


      <View className="mt-8">
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Nome Completo</Text>

      <InputComponent style={{marginTop:5}} variant="secondary"  placeholder="Nome" placeholderTextColor={'#6061A7'}/>
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >CPF</Text>

      <InputComponent style={{marginTop:5}} variant="secondary"  placeholder="CPF" placeholderTextColor={'#6061A7'}/>
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Cartão SUS</Text>

      <InputComponent style={{marginTop:5}} variant="secondary" placeholder="Número do cartão SUS" placeholderTextColor={'#6061A7'} keyboardType="numeric"/>
      <Text className="text-purplePrimary text-[14px] font-bold mt-4" >Prontuário</Text>

      <InputComponent style={{marginTop:5}} variant="secondary" placeholder="Número do seu prontuário" placeholderTextColor={'#6061A7'} keyboardType="numeric"/>
    </View>

    <View className="mt-16">
      <ButtonComponent title="Criar"/>
    </View>
    </View>
    </>
  )
}