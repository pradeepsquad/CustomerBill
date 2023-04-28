import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import call from 'react-native-phone-call';

export default function PartyList({navigation}) {
  const [showIcon, setShowIcon] = useState(false);
  const [inputNumber, setInputNumber] = useState('222222222');
 // handle call
 const handleCall = () => {
  const args = {
  number: '9093900003', 
  prompt: true, 
  skipCanOpen: true
  };
  call(args).catch(console.error);
 }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <TouchableOpacity style={styles.listView}>
            <View>
              <Text style={styles.textOne}>Cash Sale</Text>
              <Text style={styles.textTwo}>Phone Number</Text>
              <Text style={styles.textThree}>Billing Type: REGULAR</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => handleCall()}>
                {/* CALL */}
                <Icon
                  name="call"
                  size={25}
                  color="#E8A317"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              {/* WHATSAPP */}
              <TouchableOpacity onPress={() => alert('whatsapp')}>
                <Icon
                  name="logo-whatsapp"
                  size={25}
                  color="green"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
              {/* FAVORITE */}
              <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
                <Icon
                  name={showIcon ? 'star' : 'star-outline'}
                  size={25}
                  color="#E8A317"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <View>
              <Text style={styles.textOne}>Demo Customer 1</Text>
              <Text style={styles.textTwo}>2123123113</Text>
              <Text style={styles.textThree}>Billing Type: REGULAR</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => alert('call')}>
                {/* CALL */}
                <Icon
                  name="call"
                  size={25}
                  color="#E8A317"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              {/* WHATSAPP */}
              <TouchableOpacity onPress={() => alert('whatsapp')}>
                <Icon
                  name="logo-whatsapp"
                  size={25}
                  color="green"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
              {/* FAVORITE */}
              <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
                <Icon
                  name={showIcon ? 'star' : 'star-outline'}
                  size={25}
                  color="#E8A317"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <View>
              <Text style={styles.textOne}>Demo Customer 2</Text>
              <Text style={styles.textTwo}>1234567890</Text>
              <Text style={styles.textThree}>Billing Type: REGULAR</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => alert('call')}>
                {/* CALL */}
                <Icon
                  name="call"
                  size={25}
                  color="#E8A317"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              {/* WHATSAPP */}
              <TouchableOpacity onPress={() => alert('whatsapp')}>
                <Icon
                  name="logo-whatsapp"
                  size={25}
                  color="green"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
              {/* FAVORITE */}
              <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
                <Icon
                  name={showIcon ? 'star' : 'star-outline'}
                  size={25}
                  color="#E8A317"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listView}>
            <View>
              <Text style={styles.textOne}>Demo Customer 3</Text>
              <Text style={styles.textTwo}>1213213123</Text>
              <Text style={styles.textThree}>Billing Type: REGULAR</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => alert('call')}>
                {/* CALL */}
                <Icon
                  name="call"
                  size={25}
                  color="#E8A317"
                  style={styles.iconStyle}
                />
              </TouchableOpacity>
              {/* WHATSAPP */}
              <TouchableOpacity onPress={() => alert('whatsapp')}>
                <Icon
                  name="logo-whatsapp"
                  size={25}
                  color="green"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>

              {/* FAVORITE */}
              <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
                <Icon
                  name={showIcon ? 'star' : 'star-outline'}
                  size={25}
                  color="#E8A317"
                  style={styles.whatsappIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('New Party')}>
        <Text style={styles.addButtonText}> ADD CUSTOMER/PARTY </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 7,
    marginTop: 8,
    flexDirection: 'row',
  },
  textOne: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  textTwo: {
    color: 'silver',
    fontSize: 11,
    fontWeight: '600',
  },
  textThree: {
    color: 'silver',
    fontSize: 11,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#008AD0',
    height: 35,
    width: 190,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  addButtonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 7,
  },
  iconStyle: {
    marginLeft: 120,
    marginTop: 10,
  },
  whatsappIcon: {
    marginTop: 10,
    marginLeft: 15,
  },
});
