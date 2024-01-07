import { ElementType, ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

interface CardComponentProps{
    nome:string;
    Icone:ElementType;
}

export function CardComponent({nome,Icone}:CardComponentProps){
    return (
        <View style={styles.card}>
        <Icone name="md-calendar" size={24} color="#414396" />
        <Text className="text-purpleSeccondary whitespace-pre-wrap">
          {nome}
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    card: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      height: 65,
      width: 170,
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 3,
      paddingHorizontal:5
    },
  });
  