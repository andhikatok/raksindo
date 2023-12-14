import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,ActivityIndicator} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../../theme";
import axios from 'axios';

const navigation = useNavigation();

const AddBlogForm = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    title: "",
  });
  const handleChange = (key, value) => {
    setProductData({
      ...productData,
      [key]: value,
    });
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios.post('https://657a6bf11acd268f9afafe9f.mockapi.io/raksi/product', {
          title: productData.title,
          image,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };
  

  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.cream()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.nama}>Create New Product</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="title"
            value={productData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.nama}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.deskripsi}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.cream()} />
        </View>
      )}
      </View>
    </View>
  );
};


export default AddBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  nama: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.cream(),
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.icon(),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.white(),
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  nama: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  deskripsi: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});