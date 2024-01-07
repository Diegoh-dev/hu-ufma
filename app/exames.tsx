import { Text, View } from "react-native";
import { CardComponent } from "../components/CardComponent/cardComponent";
import { Ionicons } from "@expo/vector-icons";
import { ButtonBack } from "../components/ButtonBack";

export default function Exames() {
  return (
    <View className="flex-1 items-center">
      <ButtonBack />

      <Text className="mt-4 text-[30px] font-bold text-purplePrimary ">
        Exame
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
        <CardComponent Icone={Ionicons} nome={`Agendamento de \n  consultas`} />
        <CardComponent Icone={Ionicons} nome={"Aguardando \n confirmação"} />
        <CardComponent Icone={Ionicons} nome={"Confirmar \n  comparecimento"} />
        <CardComponent Icone={Ionicons} nome={"Agendas / \n confirmadas"} />
        <CardComponent Icone={Ionicons} nome={"Histórico de \n  consultas"} />
        <CardComponent Icone={Ionicons} nome={"Agendamento de \n  consultas"} />
      </View>
    </View>
  );
}
