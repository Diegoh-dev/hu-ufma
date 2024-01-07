import { Text, View } from "react-native";
import { ButtonBack } from "../components/ButtonBack";
import { CardComponent } from "../components/CardComponent/cardComponent";
import { Ionicons } from "@expo/vector-icons";

export default function Informacoes(){
    return (
        <View className="flex-1 items-center">
        <ButtonBack />
  
        <Text className="mt-4 text-[30px] font-bold text-purplePrimary ">
          Informações
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <CardComponent Icone={Ionicons} nome={`Como solicitar \n agendamento \n de consulta `} />
          <CardComponent Icone={Ionicons} nome={"Como solicitar \n agendamento \n de exame"} />
          <CardComponent Icone={Ionicons} nome={"Como agendar \n uma primeira \n consulta"} />
          <CardComponent Icone={Ionicons} nome={"Carta de \n informações"} />
          <CardComponent Icone={Ionicons} nome={"Como fazer \n cirurgia no \n HU-UFMA "} />
        </View>
      </View>
    )
}