import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native';

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
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        onPress={handleAdicionarNovaSkill}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginVertical: 50 }]}>Minhas Skills</Text>
      {minhasSkills.map((skill, index) => (
        <TouchableOpacity key={index} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
})