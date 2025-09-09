import {View, StyleSheet} from 'react-native'
import Quadrado from './components/Quadrado'

export default function App(){
  return(
    <View style = {estilos.container}>
      <Quadrado cor ='#e86786'/>
      <Quadrado cor ='#96b5ad' />
      <Quadrado  />
      <Quadrado cor ='#f4a1b5' />
      
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'#ffd2cb',

  },
  quadrado:{
    width:50,
    height:50,
    backgroundColor:'#e86786'
  },
  quadrado2:{
    width:50,
    height:50,
    backgroundColor:'#96b5ad'
  }
})