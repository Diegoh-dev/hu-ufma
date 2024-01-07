import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link ,router} from "expo-router";
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
      <View className="items-center mt-6 justify-center">
        <Text className="text-[30px] font-bold text-purplePrimary ">
          Serviços
        </Text>

      <View className="w-full flex-col gap-6 mt-2">
        
        <View className="mt-4 flex-row w-full relative">
          <View className="w-20 h-20 bg-purplePrimary rounded-[22px] items-center justify-center z-10">
            <MaterialCommunityIcons name="doctor" size={30} color="#FFF" />
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => {
            router.push('/consultas')
          }} className="w-72 h-16 bg-purpleSeccondary rounded-r-full	items-center justify-center absolute top-4 left-10">
            <Text className="text-colorWhite text-2xl font-bold ">
              Consultas
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex-row w-full relative">
          <View className="w-20 h-20 bg-purplePrimary rounded-[22px] items-center justify-center z-10">
          <FontAwesome5 name="notes-medical" size={30} color="#fff" />
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => {
            router.push('/exames')
          }} className="w-72 h-16 bg-purpleSeccondary rounded-r-full	items-center justify-center absolute top-4 left-10">
            <Text className="text-colorWhite text-2xl font-bold ">
              Exames
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex-row w-full relative">
          <View className="w-20 h-20 bg-purplePrimary rounded-[22px] items-center justify-center z-10">
          <Foundation name="info" size={30} color="#fff" />
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => {
            router.push('/informacoes')
          }} className="w-72 h-16 bg-purpleSeccondary rounded-r-full	items-center justify-center absolute top-4 left-10">
            <Text className="text-colorWhite text-2xl font-bold ">
              Informações
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    
      </View>
    </View>
  );
}
