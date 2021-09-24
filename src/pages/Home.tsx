import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [novaSkill, setNovaSkill] = useState<string>('');
  const [minhasSkills, setMinhasSkills] = useState<SkillData[]>([]);
  const [saudacao, setSaudacao] = useState<string>('');

  function handleAdicionarNovaSkill() {
    const skillData = {
      id: String(new Date().getTime()),
      name: novaSkill,
    };
    setMinhasSkills(oldState => [...oldState, skillData]);
    setNovaSkill('');
  }

  function handleDeletarSkill(id: string){
    setMinhasSkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const horaAtual = new Date().getHours();
    if (horaAtual < 12) {
      setSaudacao('Bom Dia!');
    } else if (horaAtual >= 12 && horaAtual < 18) {
      setSaudacao('Boa Tarde!');
    } else {
      setSaudacao('Boa Noite!');
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vinda</Text>
      <Text style={styles.gretting}>{saudacao}</Text>
      <TextInput
        style={styles.input}
        placeholder='Nova Skill'
        placeholderTextColor='#555'
        onChangeText={setNovaSkill}
        value={novaSkill}
      />
      <Button 
        title='Adicionar'
        onPress={handleAdicionarNovaSkill}
      />
      <Text style={[styles.title, styles.subTitle]}>Minhas Skills</Text>
      <FlatList
        data={minhasSkills}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleDeletarSkill(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
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
  gretting: {
    color: '#FFF',
  },
});