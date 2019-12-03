import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity,Button } from 'react-native'
import { Icon } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker';

export class createAccout extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <LeftMenuButton navigate={navigation} />,
        title: 'ចុះឈ្មោះ'
    });
    options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      getImage=()=>{
        ImagePicker.showImagePicker(this.options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
      }
    state = {
        avatarSource:'',
        name: {
            value: '',
            valid: false,
            validationRule: ''
        },
        pass: {
            value: '',
            valid: false,
            validationRule: ''
        },
        email: {
            value: '',
            valid: false,
            validationRule: ''
        },
        classes:{
            value:'',
            valid:false,
            validationRule:''
        }

    }
    submiteData = () => {
        console.log(this.state.classes.value,'this value of class')
        const regux = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        const regux1 = /^[a-zA-Z]+$/
        // console.log(this.props.navigation,'metra love')
        if (this.state.name.value == '') {
            this.setState({ name: { validationRule: 'សូមជួយបំពេញឈ្មោះ', valid: true } })
            //  console.log(regux1.test('metra yim'),"hi metra")
        }
        else if (regux1.test(this.state.name.value) == false) {
            this.setState({ name: { validationRule: 'សូមជួយបំពេញឈ្មោះដែលគ្មានចន្លោះនិងគ្មានសញ្ញាពិសេស', valid: true } })
        }
        else if (this.state.email.value == '') {
            this.setState({ email: { validationRule: 'សូមជួយបំពេញអុីម៉ែល', valid: true } })
        }
        else if (regux.test(this.state.email.value) == false) {
            this.setState({ email: { validationRule: 'សូមជួយបំពេញអុីម៉ែលអោយបានត្រឹមត្រូវ', valid: true } })
        }
        else if (this.state.pass.value == '') {
            this.setState({ pass: { validationRule: 'សូមជួយបំពេញលេខសម្ងាត់', valid: true } })
        }
        else if (this.state.pass.value.length <= 6) {
            this.setState({ pass: { validationRule: 'លេខសម្ងាត់ត្រូវលើ៦ខ្ទង់', valid: true } })
        }
        else if (this.state.classes.value == '') {
            this.setState({ classes: { validationRule: 'សូមជួយជ្រើសរើសថ្នាក់រៀន', valid: true } })
        }
        
        else {
            this.props.navigation.navigate('Home', { name: this.state.name.value, pass: this.state.pass.value, email: this.state.email.value,avatarSource:this.state.avatarSource })
            this.setState({ name: '', pass: '', email: '',avatarSource:'' })
        }
    }
    render() {
        let data = [{ value: 'BTS' }, { value: 'SR', }, { value: 'KPS', }];
        const {avatarSource}=this.state;
        const image=avatarSource? avatarSource:{uri:'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512'}
        return (
            <SafeAreaView>
            {/* <Button title="getImage" onPress={()=>{this.getImage()}}/>
            <Image source={this.state.avatarSource} style={{width:50,height:50}} /> */}
                <TouchableOpacity onPress={()=>{this.getImage()}} style={{ justifyContent: "center", flexDirection: 'row', marginTop: 30 }}>
                    <Image source={image} style={{ width: 100, height: 100,borderRadius:100 }} />

                </TouchableOpacity>
                <View style={{ justifyContent: "center", flexDirection: 'row', marginTop: 10,marginBottom:40 }}>
                    <Text>សូមស្វាគមន៍ការចូលមកកាន់កម្មវិធីរបស់ខ្ញុំ</Text>
                </View>
                <View>
                    {this.state.name.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.name.validationRule}</Text> : null}
                    <TextInput
                        style={styles.textInputStyle1}
                        placeholder="គោត្តនាម នាម"
                        onChangeText={(value) => this.setState({ name: { value: value } })}
                        value={this.state.name.value}
                    />
                </View>
                <View>
                    {this.state.email.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.email.validationRule}</Text> : null}
                    <TextInput
                        style={styles.textInputStyle2}
                        placeholder="អុីម៉ែល"
                        onChangeText={(value) => this.setState({ email: { value: value } })}
                        value={this.state.email.value}
                    />
                </View>
                <View>
                    {this.state.pass.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.pass.validationRule}</Text> : null}
                    <TextInput
                        style={styles.textInputStyle2}
                        secureTextEntry={true}
                        placeholder="លេខសម្ងាត់"
                        onChangeText={(value) => this.setState({ pass: { value: value } })}
                        value={this.state.pass.value}
                    />
                </View>
                <View>
                {this.state.classes.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.classes.validationRule}</Text> : null}
                    <Dropdown
                        label='ថ្នាក់រៀន'
                        data={data}
                        onChangeText={(value)=>{this.setState({classes:{value:value}})}}
                        value={this.state.classes.value}
                        containerStyle={styles.dropDown}
                    />
                </View>


                <TouchableOpacity onPress={() => { this.submiteData() }} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.buttonText}> ចុះឈ្មោះ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ចូលប្រព័ន្ធ') }} style={{ justifyContent: "center", flexDirection: 'row', marginTop: 10 }}>
                    <Text>ចូលប្រើប្រព័ន្ធ</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    dropDown: {
        height: 65,
        width: '90%',
        borderWidth: 1,
        borderColor: '#028b53',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 15,
        paddingLeft: 20,
    },
    textInputStyle1: {
        height: 40,
        width: '90%',
        // textAlign: 'center',
        borderWidth: 1,
        borderColor: '#028b53',
        borderRadius: 8,
        marginTop: 0,
        marginLeft: 15,
        paddingLeft: 20
    },
    textInputStyle2: {
        height: 40,
        width: '90%',
        // textAlign: 'center',
        borderWidth: 1,
        borderColor: '#028b53',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 15,
        paddingLeft: 20
    },
    button: {

        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 15
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },

})

export default createAccout
const LeftMenuButton = (props) => {
    return (
        <View>
            <Icon name='chevron-left' type='font-awesome' iconStyle={{ marginLeft: 10 }} onPress={() => { props.navigate.goBack(null) }} />
            {/* <Icon name='chevron-left' type='font-awesome' iconStyle={{ marginLeft: 10 }} onPress={()=>console.log(props.navigate)} /> */}
        </View>

    )
}