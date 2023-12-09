import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonComponent } from '../components/Button';
import { Link } from 'expo-router';
import { ContainerImage } from '../components/ContainerImage';

export default function App() {
  return (
    <View className=" flex-1 items-center bg-colorWhite justify-center">
      {/* <View className="flex flex-col gap-2 items-center">
          <Image
            className="w-52	h-52 mb-2"
            source={require("../assets/logo.png")}
          />

        <Text className="text-[30px] text-purplePrimary font-bold	leading-relaxed	text-center	">
          Universidade Federal do Maranhão
        </Text>
      </View> */}
      <ContainerImage texto='Universidade Federal do Maranhão'/>
      <View>
        <Link href="/login" asChild>
        <ButtonComponent title='Entrar' style={{marginTop:40}}/>
        </Link>
        <Link href="/" asChild>
        <ButtonComponent title='Começar' variant='secondary' style={{marginTop:15}}/>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

