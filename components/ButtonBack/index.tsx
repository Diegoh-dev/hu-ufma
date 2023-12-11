import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function ButtonBack(){
  const router = useRouter();

  return(
    <Pressable className="absolute top-4 left-8 bg-[#DEDEEB] rounded-full p-2" onPress={() => {
          router.back();
      }}>
        <AntDesign name="arrowleft" size={24} color="#414396" />
      </Pressable>
  )
}