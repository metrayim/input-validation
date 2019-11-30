import React, { Component } from 'react'
import { Text, View, SafeAreaView, Button, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation, navigationOptions } from 'react-navigation';

export class home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <MenuButton navigate={navigation} />,
        title: 'ទំព័រដើម',
        headerRight: <LeftMenuButto navigate={navigation} />
    });
    state = {
        name: '',
        haveName: false
    }

    componentDidMount() {
        console.log(this.props.navigation.state, 'hope see you metra')

    }
    showMe = () => {
        console.log('hi yim ')
    }
    render() {
        const { params } = this.props.navigation.state;
        const name = params ? params.name : null;
        const pass= params? params.pass:null;

        console.log(this.props.navigation.state, 'this is render metra')
        return (
            <SafeAreaView>
                <View style={{ justifyContent: "center", flexDirection: 'row', marginTop: 200 }}>
                    <Image source={{ uri: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' }} style={{ width: 150, height: 150 }} />

                </View>
                <View style={{ justifyContent: "center", flexDirection: 'row', marginTop: 10 }}>
                    <Text>សូមស្វាគមន៍ការចូលមកកាន់កម្មវិធីរបស់ខ្ញុំ ណា: {name}  </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default withNavigation(home)
const MenuButton = (props) => {
    return (
        <View>
            <Icon name='align-justify' type='font-awesome' iconStyle={{ marginLeft: 10 }} onPress={props.navigate.openDrawer} />
        </View>
    )

}
const LeftMenuButto = (props) => {
    return (
        <View>
            <Icon name='plus' type='font-awesome' iconStyle={{ marginRight: 10 }} onPress={() => { props.navigate.navigate('ចុះឈ្មោះ') }} />
        </View>
    )
}