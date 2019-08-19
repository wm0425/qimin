import React, {Component} from 'react';
import { Image, StyleSheet, StatusBar, View, TextInput, Text, ImageBackground, TouchableOpacity, Alert, Platform } from 'react-native';
import NavigationService from '../NavigationService';
import { connect } from 'react-redux';
import { actionSetLogin } from '../actions/SetLoginAction';
import config from '../util/util'



class Header extends Component { 
  constructor(props){
    super(props);
    this.state={
      jifen:'0',
      name:'未登录',
      empl_id: '',
      UCML_CONTACTOID:'',
      loaded: false,
    }
  };
  static navigationOptions = {
    header: null,
  };
  componentWillReceiveProps(nextProps){
  }
  componentDidMount(){
  }
  goUser(){
  }
  render() {
      if(this.props.tag==='PERSONAL'){
        return ( 
          <View style={styles.Pcontainer}>
            <StatusBar
              animated={true}
              hidden={false}
              backgroundColor={'transparent'}
              translucent={true}
              barStyle={'dark-content'}
            >
            </StatusBar>
          </View>
        )
      }
      else if(this.props.tag==='HOME'){
        return ( 
          <View style={styles.container}>
            <StatusBar
              animated={true}
              hidden={false}
              backgroundColor={'transparent'}
              translucent={true}
              barStyle={'default'}//dark-content   default
            >
            </StatusBar>
            <Image source={require('../../asserts/images/header/logo.png')} style={styles.logo}/>
            {/* <View style={styles.searchBox}> */}
              <Image source={require('../../asserts/images/header/jifen.png')} style={styles.jifenIcon}/>
              <Text style={styles.inputText}>{this.state.jifen}</Text>
              {/* <Image source={require('./images/header/fenge.png')} style={styles.fengeIcon} /> */}
              <View>
              <TouchableOpacity onPress={this.goUser.bind(this)}>
                <ImageBackground  source={require('../../asserts/images/header/name.png')} style={styles.nameIcon} >
                  <Text style={styles.name}>{this.state.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={()=>{NavigationService.navigate('Searchpage', { userName: 'Lucy' });}}>
                <Image source={require('../../asserts/images/header/search.png')} style={styles.searchIcon}/>
              </TouchableOpacity>
            {/* </View> */}
            <TouchableOpacity onPress={()=>{NavigationService.navigate('Scanpage');}}>
              <Image source={require('../../asserts/images/header/icon_qr.png')} style={styles.scanIcon}/>
            </TouchableOpacity>
          </View>
        )
      }
      else{
        return ( 
          <View style={styles.container}>
            <StatusBar
              animated={true}
              hidden={false}
              backgroundColor={'transparent'}
              translucent={true}
              barStyle={'default'}
            >
            </StatusBar>
            <Image source={require('../../asserts/images/header/logo.png')} style={styles.logo}/>
            {/* <View style={styles.searchBox}> */}
              <Image source={require('../../asserts/images/header/jifen.png')} style={styles.jifenIcon}/>
              <Text style={styles.inputText}>{this.state.jifen}</Text>
              {/* <Image source={require('./images/header/fenge.png')} style={styles.fengeIcon} /> */}
              <View>
              <TouchableOpacity onPress={()=>{NavigationService.navigate('UserProfile', { UCML_CONTACTOID: this.state.UCML_CONTACTOID });}}>
                <ImageBackground  source={require('../../asserts/images/header/name.png')} style={styles.nameIcon} >
                  <Text style={styles.name}>{this.state.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
              </View>
              
              <TouchableOpacity onPress={()=>{NavigationService.navigate('Searchpage', { userName: 'Lucy' });}}>
                <Image source={require('../../asserts/images/header/search.png')} style={styles.searchIcon}/>
              </TouchableOpacity>
            {/* </View> */}
            <TouchableOpacity onPress={()=>{NavigationService.navigate('Scanpage');}}>
              <Image source={require('../../asserts/images/header/icon_qr.png')} style={styles.scanIcon}/>
            </TouchableOpacity>
          </View>
        )
      }
      
  } 
}
const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 32,   // 处理iOS状态栏  
    height: Platform.OS === 'ios' ? 68 : 75,   // 处理iOS状态栏  
    //paddingTop: 32,
    //height: 75,
    // backgroundColor: '#DF0000',
    backgroundColor:'#E32414',
    alignItems: 'center'
  },
  Pcontainer:{
    //flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 32,   // 处理iOS状态栏  
    height: Platform.OS === 'ios' ? 68 : 20,   // 处理iOS状态栏  
    //paddingTop: 32,
    //height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  logo: {
    height: 26,
    width: 83,
    resizeMode: 'stretch'
  },
  searchBox: {
    height: 35,
    flexDirection: 'row',
    flex: 1,
    //borderRadius: 5,
    //backgroundColor: 'white',
    //alignItems: 'center',
    marginLeft: 70,
    marginRight: 12,
    paddingTop: 5,
  },
  jifenIcon: {
    marginLeft: 55,
    paddingTop: 5,
    paddingBottom: 2,
    //marginRight: 8,
    width: 15,
    height: 30,
    //resizeMode: 'stretch'
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#FFFFFF',
    paddingTop: 3,
    paddingBottom: 0,
    marginLeft: 3,
    marginRight: 0,
  },
  fengeIcon: {
    marginLeft: 1,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 0,
    //marginRight: 8,
    width: 3,
    height: 42,
    //resizeMode: 'stretch'//图片展示样式
  },
  nameIcon: {
    marginLeft: 1,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 0,
    //marginRight: 8,
    width: 40,
    height: 40,
    //justifyContent:"center",
    alignItems: 'center', 
    //resizeMode: 'stretch'
  },
  name:{
    fontSize: 8, 
    paddingTop: 3,
    color: '#FFFFFF',
  },
  scanIcon: {
    height: 26.7,
    width: 26.7,
    resizeMode: 'stretch'
  },
  searchIcon: {
    //marginLeft: 5,
    marginRight: 20,
    width: 30,
    height: 30,
    paddingTop: 20,
    resizeMode: 'stretch'
  }
});
const select=store=>{
  return {
    SetLoginReducer : store.SetLoginReducer,
    //GetWeatherReducer : store.GetWeatherReducer,
  }
};
export default connect(select)(Header);