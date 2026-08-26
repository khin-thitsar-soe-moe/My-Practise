import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React,{useState , useEffect} from 'react'
import ProductService from '../Service/productService'

const HomeScreen = ({navigation}) => {
    const [products , setProducts] = useState([])
    // console.log('Products state:', products);
    const getAllProducts = async() =>{
        try{
            const res = await ProductService.getAllProducts()
            // console.log('All products:', res);
            setProducts(res.data.products)
        }catch(error){
            console.log('Error fetching products:', error.response?.data || error.message);
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])
  return (
    <View style={{flex:1}}>
      <FlatList
        data = {products}
        keyExtractor={(item)=>item.id.toString()}
        numColumns={2}
        renderItem = {({item}) => (
            <TouchableOpacity 
            onPress={
              () => navigation.navigate('ProductDetail', { product: item})
            }
            >
                <FlatList
                data = {item.images}
                horizontal
                keyExtractor={(item , index)=>`${item.id}-${index}`}
                renderItem = {({item:image}) => (
                    <Image source={{uri: image}} style={styles.image} />
                )}    
                />
                <Text>{item.title}</Text>
                <Text>${item.price.toFixed(2)}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
image :{
  width:200,
  height:200,
  resizeMode:'cover',
}
})