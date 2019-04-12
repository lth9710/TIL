import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, TouchableHighlight, Modal,ScrollView,Animated,StatusBar} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import post from "../services/post";
import user from "../services/user";
import favorite from "../services/favorite";

export default class PhotofeedMain extends Component {
  constructor(props) {
    super(props);

    state = {
    };

    
  }
  
  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
    
  _pushStarHome(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'nugufan.StarHome',
      }
    });
  }

  _pushUserHome(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'nugufan.UserHome',
      }
    });
  }

  _pushPhotoDetail(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'nugufan.PhotoDetail',
      }
    });
  }
  
  _pushGoodList(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'nugufan.GoodList',
      }
    });
  }

  state = {
    modalVisible: false,
    scrollY: new Animated.Value(0),
    error: false,
    // userInfo: null,
    user_id:'lth9710@naver.com',
    email:'lth9710@naver.com',
    password:'1234',
    favorInfo: null
    
  }
  
  

  CreatePostFunction(user_id, contents, photo_id) {
    post.createPost(this.state.user_id, this.state.contents, this.state.photo_id)
    .then(postInfo => {
      this.setState({ postInfo: postInfo});
    });
  }

  UserFavoriteFunction  ()  {
    var user_id = this.state.user_id
    favorite.importFavorite(user_id)
    .then(favorInfo => {
     this.setState({favorInfo : favorInfo})
    });
  }



  componentDidMount() {
    SplashScreen.hide();
   
    
    

  };
  render() {
    
    this.UserFavoriteFunction();

    // var favoriteArtist = [this.state.favorInfo];
    
    // for(let i = 0; i< favoriteArtist.length; i++){

    //   favoriteArtist.push(
    //                   <View key = {i}>
    //                           <View>
    //                                   <TextInput/>
    //                           </View>
    //                           <View>
    //                                   <TextInput/>
    //                           </View>
    //                   </View>

    //   )
    // }
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.85)',width:'100%',height:'auto',paddingHorizontal:24}}>
          
            <TouchableHighlight onPress = {() => {
               this.setModalVisible(!this.state.modalVisible)}}>
               <View style = {styles.close}>
                <Image source={require('./img/modalClose.png')}/ >
               </View>
            </TouchableHighlight>
        
            <View style={{width:'100%', marginTop:70}}>
              <Text style={styles.photoFeedtit}>포토피드</Text>
            </View>
            <View style={styles.searchTitle}>  
              <View style={{width:'100%',alignItems:'flex-start',marginRight:'2%'}}>
                <TextInput style={styles.searchBox} placeholder = "검색어를 입력하세요" autoCapitalize = "none" />
              </View>
              <View style={{position:'relative',width:45,height:45,backgroundColor:'#ccc',borderRadius:2.5}}>
                <Image style={{position:'absolute',top:11,right:12,zIndex:5}} source={require('./img/nugufan_Search.png')}/ >
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.header}>
          <View style={{width:24,left:16,opacity:0.7}}>
            <Image source={require('./img/menu.png')} />
          </View>
          <View style={{alignItems: 'center' }}>
            <Image source={require('./img/logo.png')}/ >
          </View>
          <View style={{width:24,right:16,alignItems: 'flex-end' }}>
            <Image source={require('./img/alarm.png')}/ >
          </View>
        </View>

        <View style={styles.title}>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
            alignItems: 'center',
            paddingLeft:16,
            paddingTop:0,
            }}
            >
            <View style={{width:56, marginHorizontal:7}}> 
              <TouchableOpacity  onPress={this._pushStarHome.bind(this)}>
                <View><Image source={require('./img/profilePhoto.jpg')} style={styles.star}/ ></View>
              </TouchableOpacity>
              <Text onPress={this._pushStarHome.bind(this)} style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>디오 {this.state.favorInfo == null ? '':this.state.favorInfo.artist_id} </Text> 
            </View>
            {/* 로그인정보확인 ? {favoriteArtist }
            :<View><Text>누구팬을 설정하시면 회원님의 최애팬의 모든 정보를 한 번에 보실 수 있어요!</Text></View>  */}
            
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/profilePhoto2.jpg')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>아이유</Text> 
            </View>
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/photoFull2.png')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>강다니엘</Text> 
            </View>
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/profilePhoto.jpg')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>백현</Text> 
            </View>  
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/profilePhoto3.jpg')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>지민</Text> 
            </View>
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/profilePhoto.jpg')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>EXO</Text> 
            </View> 
            <View style={{width:56,marginHorizontal:7}}>
              <View><Image source={require('./img/profilePhoto4.jpg')} style={styles.star}/ ></View>
              <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold',marginTop:3}}>BTS</Text> 
            </View> 
          </ScrollView>
        </View>

            {/* 로그인여부 ?
             <View style={styles.subMenu}>
          <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={styles.roundSel}>
                <Text style={styles.roundSelTxt}>
                  전체보기
                </Text>
              </View>
              <View style={styles.roundNone}>
                <Text style={styles.roundNoneTxt}>
                  내 게시물
                </Text>
              </View>
              <View style={styles.roundNone}>
                <Text style={styles.roundNoneTxt}>
                  친구게시물
                </Text>
              </View>
            </View>
          <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <View style={styles.showBtn}>
                <Image source={require('./img/Icon_Search.png')}/ >
            </View>
          </TouchableOpacity>  
        </View> :
         <View style={styles.subMenu}>
          <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={styles.roundSel}>
                <Text style={styles.roundSelTxt}>
                  전체보기
                </Text>
              </View>
          <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <View style={styles.showBtn}>
                <Image source={require('./img/Icon_Search.png')}/ >
            </View>
          </TouchableOpacity>  
        </View>
         */}
        <View style={styles.subMenu}>
          <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={styles.roundSel}>
                <Text style={styles.roundSelTxt}>
                  전체보기
                </Text>
              </View>
              <View style={styles.roundNone}>
                <Text style={styles.roundNoneTxt}>
                  내 게시물
                </Text>
              </View>
              <View style={styles.roundNone}>
                <Text style={styles.roundNoneTxt}>
                  친구게시물
                </Text>
              </View>
            </View>
          <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
            <View style={styles.showBtn}>
                <Image source={require('./img/Icon_Search.png')}/ >
            </View>
          </TouchableOpacity>  
        </View>

        {/* 
        post 데이터 뿌려지는거 받아와서 뿌리기
        
        <ScrollView containerStyle={styles.scrollcontainer}>
        <View style={styles.content}>

          <View style={styles.card}>
            <View style={styles.user}>
                <View>
                  <TouchableOpacity onPress={this._pushUserHome.bind(this)}>
                    <Image source={require('./img/profilePhoto2.jpg')} style={styles.profile}/>
                  </TouchableOpacity>
                </View>
              <Text style={{fontSize:14, fontWeight:'bold',lineHeight:20}} onPress={this._pushUserHome.bind(this)} >moon_xoL
                <Text style={{fontSize:12, color:'#8969f0'}}> .LV 6{'\n'}</Text>
                <Text style={{fontSize:11,fontWeight:'normal',color:'#777'}}>1시간 전</Text>
              </Text>
              <Image style={{width:12,position:'absolute',right:20,top:20}} source={require('./img/Icon_More.png')}/>
            </View>
            <View>
              <TouchableOpacity  onPress={this._pushPhotoDetail.bind(this)}>
                <Image source={require('./img/profilePhoto3.jpg')} style={styles.photofeed}/>
              </TouchableOpacity>
            </View>
            <View style={styles.txtfeed}>
              <Text style={{height:41,fontSize:14,lineHeight:20}}>
                보이지 않는 널 찾으려고 애쓰다{'\n'}들리지 않는 널 들으려 애쓰다~ 들리지 않는 널 들으려 애쓰다~ 들으려 애쓰다~</Text>
              <Image style={{width:16,position:'absolute',bottom:16,left:16 }} source={require('./img/icon_comment.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:36}}>33</Text>
              <Image style={{width:16,position:'absolute',bottom:18,left:69 }} source={require('./img/icon_heart.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:88}} onPress={this._pushGoodList.bind(this)}> 7</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.user}>
              <View><Image source={require('./img/profilePhoto2.jpg')} style={styles.profile}/></View>
              <Text style={{fontSize:14, fontWeight:'bold',lineHeight:20}}>moon_xoL
                <Text style={{fontSize:12, color:'#8969f0'}}> .LV 6{'\n'}</Text>
                <Text style={{fontSize:11,fontWeight:'normal',color:'#777'}}>1시간 전</Text>
              </Text>
              <Image style={{width:12,position:'absolute',right:20,top:20}} source={require('./img/Icon_More.png')}/>
            </View>
            <View>
              <Image source={require('./img/profilePhoto3.jpg')} style={styles.photofeed}/>
            </View>
            <View style={styles.txtfeed}>
              <Text style={{height:41,fontSize:14,lineHeight:20}}>
                보이지 않는 널 찾으려고 애쓰다{'\n'}들리지 않는 널 들으려 애쓰다~ 들리지 않는 널 들으려 애쓰다~ 들으려 애쓰다~</Text>
              <Image style={{width:16,position:'absolute',bottom:16,left:16 }} source={require('./img/icon_comment.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:36}}>33</Text>
              <Image style={{width:16,position:'absolute',bottom:18,left:69 }} source={require('./img/icon_heart.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:88}}> 7</Text>
            </View>
          </View>

        </View>
      </ScrollView> */}


        <ScrollView containerStyle={styles.scrollcontainer}>
        <View style={styles.content}>

          <View style={styles.card}>
            <View style={styles.user}>
                <View>
                  <TouchableOpacity onPress={this._pushUserHome.bind(this)}>
                    <Image source={require('./img/profilePhoto2.jpg')} style={styles.profile}/>
                  </TouchableOpacity>
                </View>
              <Text style={{fontSize:14, fontWeight:'bold',lineHeight:20}} onPress={this._pushUserHome.bind(this)} >moon_xoL
                <Text style={{fontSize:12, color:'#8969f0'}}> .LV 6{'\n'}</Text>
                <Text style={{fontSize:11,fontWeight:'normal',color:'#777'}}>1시간 전</Text>
              </Text>
              <Image style={{width:12,position:'absolute',right:20,top:20}} source={require('./img/Icon_More.png')}/>
            </View>
            <View>
              <TouchableOpacity  onPress={this._pushPhotoDetail.bind(this)}>
                <Image source={require('./img/profilePhoto3.jpg')} style={styles.photofeed}/>
              </TouchableOpacity>
            </View>
            <View style={styles.txtfeed}>
              <Text style={{height:41,fontSize:14,lineHeight:20}}>
                보이지 않는 널 찾으려고 애쓰다{'\n'}들리지 않는 널 들으려 애쓰다~ 들리지 않는 널 들으려 애쓰다~ 들으려 애쓰다~</Text>
              <Image style={{width:16,position:'absolute',bottom:16,left:16 }} source={require('./img/icon_comment.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:36}}>33</Text>
              <Image style={{width:16,position:'absolute',bottom:18,left:69 }} source={require('./img/icon_heart.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:88}} onPress={this._pushGoodList.bind(this)}> 7</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.user}>
              <View><Image source={require('./img/profilePhoto2.jpg')} style={styles.profile}/></View>
              <Text style={{fontSize:14, fontWeight:'bold',lineHeight:20}}>moon_xoL
                <Text style={{fontSize:12, color:'#8969f0'}}> .LV 6{'\n'}</Text>
                <Text style={{fontSize:11,fontWeight:'normal',color:'#777'}}>1시간 전</Text>
              </Text>
              <Image style={{width:12,position:'absolute',right:20,top:20}} source={require('./img/Icon_More.png')}/>
            </View>
            <View>
              <Image source={require('./img/profilePhoto3.jpg')} style={styles.photofeed}/>
            </View>
            <View style={styles.txtfeed}>
              <Text style={{height:41,fontSize:14,lineHeight:20}}>
                보이지 않는 널 찾으려고 애쓰다{'\n'}들리지 않는 널 들으려 애쓰다~ 들리지 않는 널 들으려 애쓰다~ 들으려 애쓰다~</Text>
              <Image style={{width:16,position:'absolute',bottom:16,left:16 }} source={require('./img/icon_comment.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:36}}>33</Text>
              <Image style={{width:16,position:'absolute',bottom:18,left:69 }} source={require('./img/icon_heart.png')}/ >
              <Text style={{fontSize:12, color:'#666',position:'absolute',bottom:17,left:88}}> 7</Text>
            </View>
          </View>

        </View>
      </ScrollView>
      <Image source={require('./img/Floating_btn.png')} 
          style={styles.floatingButton} />
        {/* 버튼 누를시 업로드기능 추가 */}
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'auto',
    backgroundColor: 'white',
    alignItems:'center',
    marginTop: StatusBar.currentHeight
  },
  header: {
    width:'100%',
    height:58,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    zIndex:5
    },
  title: {
    width:'100%',
    height:97,
    flexDirection: 'row',
    backgroundColor:'#fff',
    borderBottomWidth:2,
    borderColor:'#f5f5f5'
  },
  star:{
    width:56,
    height:56,
    borderRadius:50,
    resizeMode:'cover'
  },
  subMenu: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:16,
    marginTop: 4,
    position: 'relative',
  },
  roundSel: {
    height: 31,
    paddingHorizontal:16,
    justifyContent: 'center',
    backgroundColor: '#8969f0',
    borderRadius: 25,
    marginRight: 10,
  },
  roundNone: {
    height:31,
    paddingHorizontal:16,
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderRadius:15,
    borderWidth:0.5,
    borderColor:'#999',
    marginRight:8
  },
  roundNoneTxt: {
    fontSize: 13, color: '#555', textAlign: 'center'
  },
  roundSelTxt: {
    fontSize: 13, color: '#fff', textAlign: 'center'
  },
  showBtn: {
    alignItems: 'flex-end',
  },
  searchTitle: {
    width:'100%',
    paddingHorizontal:24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  photoFeedtit: {
    fontSize:19,
    color:'#f14f5f',
    fontWeight:'bold',
    marginBottom:12
  },
  searchBox:{
    width:'100%',
    height:45,
    backgroundColor:'#fff',
    borderRadius:2.5,
    paddingHorizontal:16
  },
  close: {
    position:'relative',
    left:'95%',
    marginTop:30,
  },
  content: {
    width:'100%',
    backgroundColor:'#fff',
    marginTop:6
  },
  card: {
    width:'100%',
    height:'auto',
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom:8,
    borderTopWidth:1,
    borderColor:'#f5f5f5'
  },
  user: {
    width:'100%',
    height:64,
    paddingHorizontal:16,
    flexDirection: 'row',
    paddingTop:12
  },
  profile:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor: '#999',
    justifyContent: 'center',
    marginRight:8
  },
  photofeed: {
    width:'100%',
    height:300,
    backgroundColor: '#ccc',
    resizeMode:'cover'
  },
  txtfeed: {
    width:'100%',
    height:115,
    paddingHorizontal:16,
    paddingTop:8,
    
  },
  
  floatingButton: {
    position: 'absolute',
    justifyContent: 'center',
    right: 16,
    bottom: 80,
    width: 60,
    height: 60
  },

});