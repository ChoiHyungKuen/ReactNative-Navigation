import React, {useEffect} from 'react';
import {View, Button} from 'react-native';

function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

  return (
    <View>
      <Button
        title="detail 1 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="detail 2 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="detail 3 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

export default HomeScreen;
