import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function ButtonComponent({
  title,
  variant = "primary",
  style,
  ...rest
}: ButtonComponentProps) {
  const styleButton =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSeccond;
  const styleText = variant === "primary" ? "#fff" : "#414396";
  return (
    <TouchableOpacity 
    style={[styles.common, styleButton,style]}
     {...rest}
     activeOpacity={0.7}
     >
      <Text
        style={{ color: styleText }}
        className="text-[24px] text-colorWhite font-bold	"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  common: {
    width: 300,
    height: 50,
    borderRadius: 20,
    // marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: "#414396",
  },
  buttonSeccond: {
    borderWidth: 2,
    borderColor: "#414396",
  },
});
