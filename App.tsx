import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const [dogArray, setDogArray] = useState([]);
  const fectDogApi = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?limit=10"
    );
    const data = await response.json();
    setDogArray(data);
  };

  useEffect(() => {
    fectDogApi();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
        <Text style={{padding: 20}}>Dog Images List</Text>
          {dogArray.map((dog, index) => (
          <View key={index} style={styles.imageContainer}>
            <Text>{dog.id}</Text>  
          <Image
          key={index}
          source={{uri: dog.url }}
          style={{width: 200, height: 200}}
        />
        </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
});
