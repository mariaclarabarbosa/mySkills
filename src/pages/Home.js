import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [novaSkill, setNovaSkill] = useState('');
  const [minhasSkills, setMinhasSkills] = useState([]);

  function handleAdicionarNovaSkill() {
    setMinhasSkills(oldState => [...oldState, novaSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <TextInput
        style={styles.input}
        placeholder='Nova Skill'
        placeholderTextColor='#555'
        onChangeText={setNovaSkill}
      />
      <Button onPress={handleAdicionarNovaSkill} />
      <Text style={[styles.title, styles.subTitle]}>Minhas Skills</Text>
      <FlatList
        data={minhasSkills}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 50,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});