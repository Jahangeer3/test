import {createStackNavigator,createDrawerNavigator,DrawerItems,createSwitchNavigator  }from 'react-navigation'
import Home from './src/components/Home'
import {View,Text,ScrollView,Image} from 'react-native'
import React from 'react'
import Complain from './src/components/Complain'
import FoundItem from './src/components/FoundItem'
import {Icon,Button} from 'react-native-elements'
import Setting from './src/components/Setting'
import LostFound from './src/components/LostFound'
import Timer from './src/components/Timer'
import Problem from './src/components/Problem'
import FeedBack from './src/components/FeedBack'
import ReportLost from './src/components/ReportLost'
import ViewFound from './src/components/ViewFound'
import ViewLost from './src/components/ViewLost'
import MoreOnLost from './src/components/MoreOnLost'
import LoginForm from './src/components/LoginForm'
import SignUp from './src/components/SignUp'
import LoadingScreen from './src/components/LoadingScreen'
import firebase from 'firebase'
import SignOut from './src/components/SignOut'
import History from './src/components/History'
import UserManual from './src/components/UserManual'


const firebaseConfig = {
  apiKey: "AIzaSyCuh4hWyEABLxdxRveoMD290hgo69AWXV4",
  authDomain: "userapp-1569782530340.firebaseapp.com",
  databaseURL: "https://userapp-1569782530340.firebaseio.com",
  projectId: "userapp-1569782530340",
  storageBucket: "userapp-1569782530340.appspot.com",
  messagingSenderId: "470250628857",
  appId: "1:470250628857:web:9d6c71d7658a2f51d4e428",
  measurementId: "G-YSLVGW7TXJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const styles = {
    buttonStyle: {
        marginLeft: 50,
        marginRight: 20,
        width:80,
        height: 40,
        borderWidth: 1,
        borderColor: "#b81456",
        elevation: 2,
        backgroundColor: '#330101',
        borderRadius: 10,
       
    },
    headerTextStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginRight:60,
  },
  LoginTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
 
},
    container:{
        flex:1
          },
    
          drawerHeader:{
        backgroundColor:'#330101',
        alignItems:'center',
        justifyContent:'center',
        height:140,
        flex:1,
        flexDirection:'row'
        
          },
          drawerImage:{
            margin:10,
            width:80,
            height:60
          },
          more:{
              marginLeft:60
          }
}


const AuthStack=createStackNavigator({
    UserManual:{screen:UserManual,
        navigationOptions:{
            headerStyle:{
                 backgroundColor:'#512DA8'
            },
            headerTitle:<Text style={styles.headerTextStyle}>User Manual</Text>,
            headerTintColor:'#fff',
            headerTitleStyle:{
                color:'#fff'
            }
            }
    
    },
    LoginForm:{screen:LoginForm,
        navigationOptions:{
          headerTitle:null,
          header:null  
        }
    },
    
    SignUp:{screen:SignUp,
    navigationOptions:{
        
      headerTitle:null,
      header:null
        
    }
    
    },

        
        
})

const HomeStack=createStackNavigator({


  
    Home:{screen:Home,
       navigationOptions:(props)=>{
           console.log('props in home',props)
           return {
           headerTitle:<Text style={styles.headerTextStyle}> Home </Text>,
          
         headerLeft:<Icon name="menu"
           size={24}
           color='white'
          onPress={()=>props.navigation.toggleDrawer()}/>,
          headerRight:<SignOut/>
        
       }
    }
   },
  

   Timer:{screen:Timer,
navigationOptions:{

    headerTitle: <Text style={styles.headerTextStyle}>Home</Text>,
    headerLeft:null
}},
 
},{
  
   navigationOptions:{
       headerStyle:{
            backgroundColor:'#512DA8'
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
           color:'#fff'
       }
       }
})


const ComplainStack=createStackNavigator({
    Complain:{screen:Complain,
       navigationOptions:({navigation})=>({
           headerTitle:<Text style={styles.headerTextStyle}>Complain</Text>,
           headerLeft:<Icon name="menu"
          size={24}
           color='white'
           onPress={()=>navigation.toggleDrawer()}/>
       })
   },
   Problem:{screen:Problem,
    navigationOptions:{
        headerTitle:<Text style={styles.headerTextStyle}>Problem</Text>
    },
},
   FeedBack:{screen:FeedBack,
    navigationOptions:{
        headerTitle:<Text style={styles.headerTextStyle}>FeedBack</Text>
    }}

},{
  
   navigationOptions:{
       headerStyle:{
            backgroundColor:'#512DA8'
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
           color:'#fff'
       }
       }
})

const LostFoundStack=createStackNavigator({
    LostFound:{screen:LostFound,
       navigationOptions:({navigation})=>({
           headerTitle:<Text style={styles.headerTextStyle}>Lost/Found</Text>,
          headerLeft:<Icon name="menu"
          size={24}
           color='white'
           onPress={()=>navigation.toggleDrawer()}/>
           
       })
   },
   ReportLost:{screen:ReportLost,
    navigationOptions: {

        headerTitle: <Text style={styles.headerTextStyle}>Report Lost</Text>,
        // if you want to style the arrow we use following 
     
       
                }},
    ViewLost:{screen:ViewLost,
        navigationOptions: {
    
            headerTitle: <Text style={styles.headerTextStyle}>Lost Items</Text>,
            // if you want to style the arrow we use following 
         
           
        }},
        ViewFound:{screen:ViewFound,
            navigationOptions: {
        
                headerTitle: <Text style={styles.headerTextStyle}>Found Items</Text>,
                // if you want to style the arrow we use following 
             
               
            }},

 MoreOnLost:{screen:MoreOnLost,
            navigationOptions:{
                headerTitle:<Text style={styles.headerTextStyle}>More Details</Text>
            }},
   FoundItem:{screen:FoundItem,
        navigationOptions: {
    
            headerTitle: <Text style={styles.headerTextStyle}>Item Found</Text>,
            // if you want to style the arrow we use following 
         
           
        }}
   
} ,{
  
   navigationOptions:{
       headerStyle:{
            backgroundColor:'#512DA8'
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
           color:'#fff'
       }
       }
})



const SettingStack=createStackNavigator({
    Setting:{screen:Setting,
       navigationOptions:({navigation})=>({
           headerTitle:<Text style={styles.headerTextStyle}>Settings</Text>,
           headerLeft:<Icon name="menu"
           size={24}
           color='white'
         onPress={()=>navigation.toggleDrawer()}/>
       })
   }
},{
  
   navigationOptions:{
       headerStyle:{
            backgroundColor:'#512DA8'
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
           color:'#fff'
       }
       }
})

const HistoryStack = createStackNavigator({
    History:{screen:History,
        navigationOptions:({navigation})=>({
            headerTitle:<Text style={styles.headerTextStyle}>History</Text>,
            headerLeft:<Icon name="menu"
            size={24}
            color='white'
          onPress={()=>navigation.toggleDrawer()}/>
        })
    }
 },{
   
    navigationOptions:{
        headerStyle:{
             backgroundColor:'#512DA8'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            color:'#fff'
        }
        }
 })


const CustomDrawer=(props)=>(
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}> 
          <View style={{flex:1}}>
           
            style={styles.drawerImage}/> 
          </View>
          <View style={{flex:2}}>

 <Text style={styles.drawerText}>Crime Monitorng System </Text>              
          </View>
      </View>     
       <DrawerItems {...props }/>

     
    </ScrollView>
)




const AppStack=createDrawerNavigator({
   
    Home:{screen:HomeStack,
    navigationOptions:{
      drawerIcon:({tintColor}) => (
     <Icon
       name="home"
       type='font-awesome'
       size={24}
  
     color={tintColor} />
     )
      
        }
    },
    Complain:{screen:ComplainStack,
        navigationOptions:{
            drawerIcon:({tintColor}) => (
           <Icon
             name="home"
             type='font-awesome'
             size={24}
        
           color={tintColor} />
           )
            
              }  },

    LostFound:{screen:LostFoundStack,
        navigationOptions:{
            drawerIcon:({tintColor}) => (
           <Icon
             name="home"
             type='font-awesome'
             size={24}
        
           color={tintColor} />
           )
            
              }}
              ,
              History:{screen:HistoryStack,
                navigationOptions:{
                    drawerIcon:({tintColor}) => (
                   <Icon
                     name="home"
                     type='font-awesome'
                     size={24}
                
                   color={tintColor} />
                   )
                    
                      }  },

  

},{
    // drawerBackgroundColor:'#ddd',
    // contentComponent:CustomDrawer,
    initialRouteName:'Home'

   
})


   


export default createSwitchNavigator({
    Loading:LoadingScreen,
    App:AppStack,
    Auth:AuthStack
},{
    initialRouteName:"Loading"
})

// import React from 'react'
// import firebase from 'firebase'
// import Drawer from './src/navigation/Root'
// class App extends React.Component{
  

//   render()
//   {
//     return (
//       <Drawer/>
//     )
//   }
// }
// export default App