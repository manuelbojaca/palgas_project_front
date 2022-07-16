import { View, Image, StyleSheet } from "react-native";
const s = require("./background.style");

const Title = () => {
  const styles = StyleSheet.create({
    logo: {
      width: 250,
      height: 100,
    },
  });
  return (
    <View style={s.alwaysback}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://res.cloudinary.com/palgas-project/image/upload/v1657900717/logo/GAppSTR_atsssx.png",
        }}
      />
    </View>
  );
};

export default Title;
