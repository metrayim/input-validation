import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'

export class login extends Component {
    state = {
        name: {
            value:'',
            valid:false,
            validationRule:''
        },
        pass: {
            value:'',
            valid:false,
            validationRule:''
        },
        // name:'',
        // pass:'',
        // error: '',
        // showError: false
    }
    submitData = () => {
        const regux=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
         const regux1=/^[a-zA-Z]+$/
        // console.log(this.props.navigation,'metra love')
        if (this.state.name.value == '' ) {
            this.setState({name:{validationRule:'សូមជួយបំពេញឈ្មោះ',valid:true}})
            //  console.log(regux1.test('metra yim'),"hi metra")
        }
        else if(regux1.test(this.state.name.value)==false){
            this.setState({name:{validationRule:'សូមជួយបំពេញឈ្មោះដែលគ្មានចន្លោះនិងគ្មានសញ្ញាពិសេស',valid:true}})
        }
        else if(this.state.pass.value==''){
            this.setState({pass:{validationRule:'សូមជួយបំពេញលេខសម្ងាត់',valid:true}})
        }
        else if(this.state.pass.value.length<=6){
            this.setState({pass:{validationRule:'លេខសម្ងាត់ត្រូវលើ៦ខ្ទង់',valid:true}})
        }
        else {
            this.props.navigation.navigate('Home', { name: this.state.name.value, pass: this.state.pass.value })
            this.setState({ name:'', pass: ''})
        }

    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <LeftMenuButton navigate={navigation} />,
        title: 'ចូលប្រើប្រព័ន្ធ'
    });
    render() {
        return (
            <SafeAreaView>
                <View style={{ justifyContent: "center", flexDirection: 'row', marginTop: 70 }}>
                    <Image source={{ uri: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' }} style={{ width: 100, height: 100 }} />

                </View>
                <View style={{ justifyContent: "center", flexDirection: 'row', marginTop: 10, marginBottom: 200 }}>
                    <Text>សូមស្វាគមន៍ការចូលមកកាន់កម្មវិធីរបស់ខ្ញុំ</Text>
                </View>
                <View>
                    {this.state.name.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.name.validationRule}</Text> : null}
                    <TextInput
                        style={styles.textInputStyle1}
                        placeholder="គោត្តនាម នាម"
                        onChangeText={(value) => this.setState({ name:{value:value} })}
                        value={this.state.name.value}
                    />
                </View>
                <View>
                    {this.state.pass.valid ? <Text style={{ color: 'red', textAlign: 'center' }}>{this.state.pass.validationRule}</Text> : null}
                    <TextInput
                        style={styles.textInputStyle2}
                        secureTextEntry={true}
                        placeholder="លេខសម្ងាត់"
                        onChangeText={(value) => this.setState({ pass:{value:value} })}
                        value={this.state.pass.value}
                    />
                </View>

                <TouchableOpacity onPress={() => { this.submitData() }} activeOpacity={0.7} style={styles.button} >
                    <Text style={styles.buttonText}> ចូលប្រើប្រព័ន្ធ </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ចុះឈ្មោះ') }} style={{ justifyContent: "center", flexDirection: 'row', marginTop: 10 }}>
                    <Text>មិនទាន់មានគណនី?ចុះឈ្មោះ</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    textInputStyle1: {
        height: 40,
        width: '90%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#028b53',
        borderRadius: 8,
        marginTop: 0,
        marginLeft: 15
    },
    textInputStyle2: {
        height: 40,
        width: '90%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#028b53',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 15
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

export default login
const LeftMenuButton = (props) => {
    return (
        <View>
            <Icon name='chevron-left' type='font-awesome' iconStyle={{ marginLeft: 10 }} onPress={() => { props.navigate.goBack(null) }} />
            {/* <Icon name='chevron-left' type='font-awesome' iconStyle={{ marginLeft: 10 }} onPress={()=>console.log(props.navigate)} /> */}
        </View>

    )
}
