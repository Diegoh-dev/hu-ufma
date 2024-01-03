import { StyleSheet, Text, View } from "react-native";
import { ButtonBack } from "../components/ButtonBack";
import { Ionicons } from "@expo/vector-icons";
export default function Consultas() {
  // shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]

  return (
    <View className="flex-1 items-center">
      <ButtonBack />

      <Text className="mt-4 text-[30px] font-bold text-purplePrimary ">
        Consultas
      </Text>

      <View className=" flex flex-row flex-wrap items-center justify-center gap-5 mt-7">
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
        </View>
        <View style={styles.card}>
          <Ionicons name="md-calendar" size={24} color="#414396" />
          <Text className="text-purpleSeccondary">
            Agendamento de consultas
          </Text>
        </View>
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
