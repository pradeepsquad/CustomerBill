import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(['']);
  const handleSendButton = () => {
    setShowMessage(message);
    setMessage('');
  };
  return (
    <SafeAreaView showsVerticalScrollIndicator={false}>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <View style={{borderWidth: 1, borderColor: 'silver', height: 'auto',borderRadius: 5, 
                        width: 'auto', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
                <Text style={{padding: 5}}>{showMessage}</Text>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', marginBottom: '5%', marginTop: '175%'}}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your message"
            placeholderTextColor="silver"
            multiline={true}
            value={message}
            onChangeText={message => setMessage(message)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => handleSendButton()}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <KeyboardAvoidingView style={{flexDirection: 'row', marginTop: '150%'}}>
      <TextInput style={styles.inputText} placeholder="Enter your message" />
        <TouchableOpacity style={styles.sendButton} onPress={() => handleSendButton()}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'white',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 20,
    height: 'auto',
    width: 350,
    paddingLeft: 18,
  },
  sendButton: {
    height: 40,
    backgroundColor: '#008Ad0',
    width: 55,
    borderRadius: 15,
    marginLeft: 3,
  },
  sendText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
