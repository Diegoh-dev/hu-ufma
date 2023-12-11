import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default function Servicos() {
  return (
    <View className="flex-1 px-5 pt-2">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-purplePrimary font-bold text-xl">
            Olá, Diego
          </Text>
          <Text className="text-purplePrimary font-bold text-base">
            Prontuário : 14438232
          </Text>
        </View>
        <View>
          <Ionicons name="exit" size={30} color="#414396" />
          <Text className="text-purplePrimary font-semibold text-sm">Sair</Text>
        </View>
      </View>
      <View className="items-center mt-4">
        <Text className="text-[30px] font-bold text-purplePrimary ">
          Serviços
        </Text>
      </View>
    </View>
  );
}
