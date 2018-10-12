/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    WebView
} from 'react-native';

//默认应用的容器组件
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
        }
    }

    //渲染
    render() {
        return (
            <View style={styles.container}>
				<View style={styles.header}>
                    <TouchableOpacity
                        hitSlop={{top:10,left:10,right:10,bottom:10}}
                        style={styles.btn}>
                    </TouchableOpacity>
                    <Text style={[styles.title]} >{this.state.title}</Text>
                    <TouchableOpacity onPress={() => this.refresh()}>
                        <View style={styles.btn} >
                            <Image style={styles.backImg} source={require("./src/img/refresh.png")} />
                        </View>
                    </TouchableOpacity>
                </View>
				
                <WebView bounces={false}
                         ref={"webView"}
                         scalesPageToFit={true}
                         startInLoadingState={true}
                         javaScriptEnabled={true}
                         source={{uri:"https://github.com/xjh3173",method:'GET'}}
                         style={{ flex: 1, flexDirection:'row'}}
                         onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                >
                </WebView>
            </View>
        );
    }

    onNavigationStateChange(event) {
        if(!event.loading)
            this.setState({title: event.title});
    }

    refresh(){
        this.refs.webView.reload();
    }
}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: "#fff",
        height :Platform.OS === 'ios' ? 70 : 50,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1,
    },
    btn:{
        width:50
    },
    backImg:{
        width:20,
        height:20,
        marginLeft:15,
    },
    backText:{
        marginLeft:15,
        color: '#f22b0a'
    },
    title: {
        color: "#000",
        textAlign: "center",
        fontSize:18,
        flex:1
    }
});