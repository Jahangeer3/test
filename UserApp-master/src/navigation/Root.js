// import {createStackNavigator,createDrawerNavigator,DrawerItems,createSwitchNavigator}from 'react-navigation'
// import Home from '../components/Home'
// import {View,Text,ScrollView,Image} from 'react-native'
// import React from 'react'
// import Complain from '../components/Complain'
// import FoundItem from '../components/FoundItem'
// import {Icon,Button} from 'react-native-elements'
// import Setting from '../components/Setting'
// import LostFound from '../components/LostFound'
// import Timer from '../components/Timer'
// import Problem from '../components/Problem'
// import FeedBack from '../components/FeedBack'
// import ReportLost from '../components/ReportLost'
// import ViewFound from '../components/ViewFound'
// import ViewLost from '../components/ViewLost'
// import MoreOnLost from '../components/MoreOnLost'
// import LoginForm from '../components/LoginForm'
// import SignUp from '../components/SignUp'
// import LoadingScreen from '../components/LoadingScreen'


// const styles = {
//     buttonStyle: {
//         marginLeft: 50,
//         marginRight: 20,
//         width:80,
//         height: 40,
//         borderWidth: 1,
//         borderColor: "#b81456",
//         elevation: 2,
//         backgroundColor: '#330101',
//         borderRadius: 10,
       
//     },
//     headerTextStyle: {
//         flex: 1,
//         textAlign: 'center',
//         fontSize: 18,
//         fontWeight: '600',
//         color: '#fff',
//         marginRight:60,
//   },
//   LoginTextStyle: {
//     flex: 1,
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#fff',
 
// },
//     container:{
//         flex:1
//           },
    
//           drawerHeader:{
//         backgroundColor:'#330101',
//         alignItems:'center',
//         justifyContent:'center',
//         height:140,
//         flex:1,
//         flexDirection:'row'
        
//           },
//           drawerImage:{
//             margin:10,
//             width:80,
//             height:60
//           },
//           more:{
//               marginLeft:60
//           }
// }


// const AuthStack=createStackNavigator({
//     LoginForm:{screen:LoginForm,
//         navigationOptions:(props)=>{
//             return {
//                 headerTitle:<Text style={styles.headerTextStyle}> Login Form </Text>,
//             }
//         }
//     },
    
//     SignUp:{screen:SignUp,
//     navigationOptions:(props)=>{
//         return {
//             headerTitle:<Text style={styles.headerTextStyle}> Sign Up </Text>,
//         }
//     }
    
//     },
// })

// const HomeStack=createStackNavigator({


  
//     Home:{screen:Home,
//        navigationOptions:(props)=>{
//            console.log('props in home',props)
//            return {
//            headerTitle:<Text style={styles.headerTextStyle}> Home </Text>,
          
//          headerLeft:<Icon name="menu"
//            size={24}
//            color='white'
//           onPress={()=>props.navigation.toggleDrawer()}/>,
        
//        }
//     }
//    },
  

//    Timer:{screen:Timer,
// navigationOptions:{

//     headerTitle: <Text style={styles.headerTextStyle}>Home</Text>,
//     headerLeft:null
// }},
 
// },{
  
//    navigationOptions:{
//        headerStyle:{
//             backgroundColor:'#512DA8'
//        },
//        headerTintColor:'#fff',
//        headerTitleStyle:{
//            color:'#fff'
//        }
//        }
// })


// const ComplainStack=createStackNavigator({
//     Complain:{screen:Complain,
//        navigationOptions:({navigation})=>({
//            headerTitle:<Text style={styles.headerTextStyle}>Complain</Text>,
//            headerLeft:<Icon name="menu"
//           size={24}
//            color='white'
//            onPress={()=>navigation.toggleDrawer()}/>
//        })
//    },
//    Problem:{screen:Problem,
//     navigationOptions:{
//         headerTitle:<Text style={styles.headerTextStyle}>Problem</Text>
//     },
// },
//    FeedBack:{screen:FeedBack,
//     navigationOptions:{
//         headerTitle:<Text style={styles.headerTextStyle}>FeedBack</Text>
//     }}

// },{
  
//    navigationOptions:{
//        headerStyle:{
//             backgroundColor:'#512DA8'
//        },
//        headerTintColor:'#fff',
//        headerTitleStyle:{
//            color:'#fff'
//        }
//        }
// })

// const LostFoundStack=createStackNavigator({
//     LostFound:{screen:LostFound,
//        navigationOptions:({navigation})=>({
//            headerTitle:<Text style={styles.headerTextStyle}>Lost/Found</Text>,
//           headerLeft:<Icon name="menu"
//           size={24}
//            color='white'
//            onPress={()=>navigation.toggleDrawer()}/>
           
//        })
//    },
//    ReportLost:{screen:ReportLost,
//     navigationOptions: {

//         headerTitle: <Text style={styles.headerTextStyle}>Report Lost</Text>,
//         // if you want to style the arrow we use following 
     
       
//                 }},
//     ViewLost:{screen:ViewLost,
//         navigationOptions: {
    
//             headerTitle: <Text style={styles.headerTextStyle}>Lost Items</Text>,
//             // if you want to style the arrow we use following 
         
           
//         }},
//         ViewFound:{screen:ViewFound,
//             navigationOptions: {
        
//                 headerTitle: <Text style={styles.headerTextStyle}>Found Items</Text>,
//                 // if you want to style the arrow we use following 
             
               
//             }},

//  MoreOnLost:{screen:MoreOnLost,
//             navigationOptions:{
//                 headerTitle:<Text style={styles.headerTextStyle}>More Details</Text>
//             }},
//    FoundItem:{screen:FoundItem,
//         navigationOptions: {
    
//             headerTitle: <Text style={styles.headerTextStyle}>Item Found</Text>,
//             // if you want to style the arrow we use following 
         
           
//         }}
   
// } ,{
  
//    navigationOptions:{
//        headerStyle:{
//             backgroundColor:'#512DA8'
//        },
//        headerTintColor:'#fff',
//        headerTitleStyle:{
//            color:'#fff'
//        }
//        }
// })



// const SettingStack=createStackNavigator({
//     Setting:{screen:Setting,
//        navigationOptions:({navigation})=>({
//            headerTitle:<Text style={styles.headerTextStyle}>Settings</Text>,
//            headerLeft:<Icon name="menu"
//            size={24}
//            color='white'
//          onPress={()=>navigation.toggleDrawer()}/>
//        })
//    }
// },{
  
//    navigationOptions:{
//        headerStyle:{
//             backgroundColor:'#512DA8'
//        },
//        headerTintColor:'#fff',
//        headerTitleStyle:{
//            color:'#fff'
//        }
//        }
// })


// const CustomDrawer=(props)=>(
//     <ScrollView style={styles.container}>
//       <View style={styles.drawerHeader}> 
//           <View style={{flex:1}}>
//             <Image source={require('../Images/cam.png')}
//             style={styles.drawerImage}/> 
//           </View>
//           <View style={{flex:2}}>

//  <Text style={styles.drawerText}>Crime Monitorng System </Text>              
//           </View>
//       </View>     
//        <DrawerItems {...props }/>

     
//     </ScrollView>
// )




// const Drawer=createDrawerNavigator({
   
//     Home:{screen:HomeStack,
//     navigationOptions:{
//       drawerIcon:({tintColor}) => (
//      <Icon
//        name="home"
//        type='font-awesome'
//        size={24}
  
//      color={tintColor} />
//      )
      
//         }
//     },
//     Complain:{screen:ComplainStack,
//         navigationOptions:{
//             drawerIcon:({tintColor}) => (
//            <Icon
//              name="home"
//              type='font-awesome'
//              size={24}
        
//            color={tintColor} />
//            )
            
//               }  },

//     LostFound:{screen:LostFoundStack,
//         navigationOptions:{
//             drawerIcon:({tintColor}) => (
//            <Icon
//              name="home"
//              type='font-awesome'
//              size={24}
        
//            color={tintColor} />
//            )
            
//               }},

  

// },{
//     drawerBackgroundColor:'#ddd',
//     contentComponent:CustomDrawer,
//     initialRouteName:'Home'

   
// })


   


// // export default createSwitchNavigator ({
// //     Loading:LoadingScreen,
// //     App:Drawer,
// //     Auth:AuthStack
// // },{
// //     initialRouteName:"Loading"
// // })

// export default Drawer