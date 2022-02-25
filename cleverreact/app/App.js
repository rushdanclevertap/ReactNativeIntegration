/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import  {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Button,Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const CleverTap = require('clevertap-react-native');


class Greenwood extends React.Component{
 
  constructor(props) {
    super(props)
    this.state = {
        datasource:[],
        title:'--------',
        message:'-------',
        uri:'https://reactnative.dev/img/tiny_logo.png'
    };
    //...whatever construction you need
   }  
   componentDidMount(){
     //alert("Component")
     CleverTap.initializeInbox();

     CleverTap.setLocation(34.15, -118.20);
     CleverTap.createNotificationChannel("1999", "Channel1999", "ChannelDescription", 1, true);

     CleverTap.onUserLogin
         ({
           'Name': 'Rushdan', 
           //'Identity': '9766609', 
           'Email': 'rushdanreactnative@clevertap.com', 
           //  'custom1': 123,
           'MSG-push':true,
           'MSG-whatsapp':true,
           'MSG-sms':true,
           'MSG-email':true
     
      });

   }
   pushEvent(){
    CleverTap.recordEvent('rushdanreactnative');
   //   alert("Event Pushed - DevenRN")

   }
   getUnitID = () => {

    CleverTap.getDisplayUnitForId('Unit Id', (err, res) => {
        console.log('Get Display Unit for Id:', res, err);
        alert(`Get Display Unit for Id: ${res}`);
    });

};
getAllDisplayUnits = () => {

  CleverTap.recordEvent('NativeDsiplayRushdan');
    CleverTap.getAllDisplayUnits((err, res) => {
       // console.log(`All Display Units: ${res}`);
        
      //  alert(`All Display Units: ${res}`);
      this.setState({datasource:JSON.parse(res)})
      this.setState({message:JSON.stringify(this.state.datasource.content[0].message.text),title:JSON.stringify(this.state.datasource.content[0].title.text).replace(/['"]+/g, '')})

     // alert(`All Display Units==?>: ${res}`);

    });

};
   show_appInbox = () => {

    CleverTap.recordEvent('Inboxxxx');

    //Show Inbox
    CleverTap.showInbox({
        //'tabs': ['Offers', 'Promotions'],
        
        'navBarTitle': 'My App Inbox',
        'navBarTitleColor': '#000000',
        'navBarColor': '#FFFFFF',
        'inboxBackgroundColor': '#342314',
        'backButtonColor': '#000000',
        'unselectedTabColor': '#000000',
        'selectedTabColor': '#FF0000',
        'selectedTabIndicatorColor': '#000000',
        'noMessageText': 'No message(s)',
        'noMessageTextColor': '#FF0000'
    });


};
   pushProduct(){
    CleverTap.recordEvent('ProductLiked', { 'Name': 'iPhone12', 'price': '80,000','color':'Jet Black','sku':'IP1202' });
      alert("Product Pushed ")

   }
   
   render(){
  return (
 
       <View>
      <ScrollView
        >       
       <Text style={{fontSize:20}}>CleverTap React Native Integration1</Text>
       <View style={{width:100,paddingTop:30}}>
        <Button title='Push Event '  onPress = {() =>this.pushEvent()}/>
        </View>
        <View style={{width:120,paddingTop:30}}>
        <Button title='Push Product '  onPress = {() =>this.pushProduct()}/>
        </View>
        <View style={{width:120,paddingTop:30}}>
        <Button title='Show AppInbox '  onPress = {() =>this.show_appInbox()}/>
        </View>
        <View style={{width:120,paddingTop:30}}>
        <Button title='Native Display'  onPress = {() =>this.getAllDisplayUnits()}/>
        </View>

        <View style={{width:300,paddingTop:30}}>
              <Text style={{fontSize:20,width:'100%'}}>Native Title :- {this.state.title}</Text>   

              <Text style={{fontSize:20,width:'100%'}}>Native Message :-{this.state.message}</Text>   


          </View>
          <View style={{height:200,width:200,paddingTop:40}}>
          <Image style={{height:150,width:100}}
        source={{
          uri: this.state.uri,
        }}
      />
          </View>
      </ScrollView>
      </View>
    
  );}
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Greenwood;
