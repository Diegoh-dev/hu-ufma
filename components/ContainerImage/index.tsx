import { Image, Text, View } from "react-native";

interface ContainerImageProps {
  texto: string;
}

export function ContainerImage({ texto }: ContainerImageProps) {
  return (
    <View className="flex flex-col gap-2 items-center">
      <Image
        className="w-52	h-52 mb-2"
        source={require("../../assets/logo.png")}
      />

      <Text className="text-[30px] text-purplePrimary font-bold	leading-relaxed	text-center	">
        {texto}
      </Text>
    </View>
  );
}
