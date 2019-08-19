/*
*主框架
*/

import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, Platform, Alert } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Toast from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons'

import Header from './pages/components/Header';
import Homepage from './pages/NewPage/Homepage';
import Studypage from './pages/Train/Studypage';
import Worktable from './pages/Worktable/Worktable';
import Storepage from './pages/Exchange/Storepage';
import Mypage from './pages/MyPage/Mypage';
//import config from './util/util';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'HOME',
      Headerprop: 'HOME',//自定义标题栏
      phone: ''
    };
    navigation = this.props.navigation;
    global.navi = navigation;
  };
  static navigationOptions = {
    header: null,
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.tag != null){
      this.setState({ selectedTab: nextProps.tag, Headerprop: nextProps.tag })
    }
  }
  componentWillMount() {
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress',this.onBackButtonPressAndroid);
  }
  componentWillUnmount() {
    this.backHandler && this.backHandler.remove();
  }
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      this.refs.toast.show('再按一次退出应用', 2000);
      return true;
    }
  }
  fnstorage(phone) {
    this.setState({
      phone: phone,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header tag={this.state.Headerprop} pfn={this.fnstorage.bind(this)} />
        <TabNavigator hidesTabTouch={false} tabBarStyle={styles.tab}>
          {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, 'HOME', '欢喜', this._createChildView('HOME'))}
          {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, 'CATEGORY', '花园', this._createChildView('CATEGORY'))}
          {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, 'FAXIAN', '访问', this._createChildView('FAXIAN'))}
          {this._renderTabItem(CART_NORMAL, CART_FOCUS, 'CART', '友荐', this._createChildView('CART'))}
          {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, 'PERSONAL', '自己', this._createChildView('PERSONAL'))}
        </TabNavigator>
        <Toast
          ref="toast"
          position='center'
          positionValue={100}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
        />
      </View>
    )
  };
  _renderTabItem(img, selectedImg, tag, title, childView) {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        // renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
        renderIcon={() => <Icon style={styles.tabIcon} name={img} size={30} color="#cccccc" />}
        // renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
        renderSelectedIcon={() => <Icon style={styles.tabIcon} name={img} size={30} color="red" />}
        onPress={() => this.setState({ selectedTab: tag, Headerprop: tag })}
        title={title}
        selectedTitleStyle={styles.selectedTitle}
      >
        {childView}
      </TabNavigator.Item>
    );
  };
  _createChildView(tag) {
    switch (tag) {
      case 'HOME':
        return (<Homepage tag={this.state.selectedTab} navigation={navigation} />);
      case 'CATEGORY':
        return (<Studypage tag={this.state.selectedTab} navigation={navigation} />);
      case 'FAXIAN':
        return (<Worktable tag={this.state.selectedTab} navigation={navigation} />);
      case 'CART':
        return (<Storepage tag={this.state.selectedTab} navigation={navigation} />);
      case 'PERSONAL':
        return (<Mypage tag={this.state.selectedTab} navigation={navigation} />);
      default:
        return (<Mypage tag={this.state.selectedTab} navigation={navigation} />);
    }
  };

};
const HOME_NORMAL = 'ios-home';
const HOME_FOCUS = 'ios-home';
const CATEGORY_NORMAL = 'ios-book';
const CATEGORY_FOCUS = 'ios-book';
const FAXIAN_NORMAL = 'ios-keypad';
const FAXIAN_FOCUS = 'ios-keypad';
const CART_NORMAL = 'ios-cart';
const CART_FOCUS = 'ios-cart';
const PERSONAL_NORMAL = 'ios-contact';
const PERSONAL_FOCUS = 'ios-contact';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    height: 56,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  tabIcon: {
    // width: 30,
    // height: 30,
    // resizeMode: 'stretch',
    marginTop: 10
  },
  selectedTitle: {
    color: '#FF0000',
  }
});
