import { Pressable, View } from "react-native";
import { ContainerImage } from "../components/ContainerImage";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { Link,useRouter } from "expo-router";
import { ButtonBack } from "../components/ButtonBack";

export default function Login() {
  
  const router = useRouter();
  return (
    <View className="flex-1 items-center bg-colorWhite justify-center relative">
      {/* Colocar em um componente */}
      <ButtonBack/>
    
      <ContainerImage texto={`Olá \n Bem vindo de volta`} />

      <View className="mt-16">
        <InputComponent keyboardType="numeric" placeholder="Prontuário" />
        <InputComponent keyboardType="numeric" placeholder="Cartão sus" />
      </View>

      <View className="mt-16">
        <Link href="/servicos" asChild>
          <ButtonComponent title="Entrar" />
        </Link>
      </View>
    </View>
  );
}
