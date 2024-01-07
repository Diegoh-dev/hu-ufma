import { StyleSheet, Text, View } from "react-native";
import { ButtonBack } from "../components/ButtonBack";
import { Ionicons } from "@expo/vector-icons";
import { CardComponent } from "../components/CardComponent/cardComponent";
export default function Consultas() {
  // shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]

  return (
    <View className="flex-1 items-center">
      <ButtonBack />

      <Text className="mt-4 text-[30px] font-bold text-purplePrimary ">
        Consultas
      </Text>
{/* flex flex-row flex-wrap items-center justify-center gap-5 mt-7 */}
      <View 
      style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        gap:10,
        justifyContent:'center',
        marginTop:30,
      }}
      // className="flex flex-row flex-wrap items-center justify-center gap-5 mt-7"
      >
        {/* <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View> */}

        <CardComponent Icone={Ionicons} nome={`Agendamento de \n  consultas`}/>
        <CardComponent Icone={Ionicons} nome={"Aguardando \n confirmação"}/>
        <CardComponent Icone={Ionicons} nome={"Confirmar \n  comparecimento"}/>
        <CardComponent Icone={Ionicons} nome={"Agendas / \n confirmadas"}/>
        <CardComponent Icone={Ionicons} nome={"Histórico de \n  consultas"}/>
        <CardComponent Icone={Ionicons} nome={"Agendamento de \n  consultas"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 170,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
  },
});
