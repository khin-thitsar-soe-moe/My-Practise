import { StyleSheet, Text, View, Image, FlatList ,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ProductDetail = ({ route }) => {
    const { product } = route.params;
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <View>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price.toFixed(2)}</Text>
            <Image
                source={{
                    uri: product.images[selectedImage],
                }}
                style={styles.mainImage}
                resizeMode="contain"
            />

            {/* Image Thumbnails */}
            <FlatList
                data={product.images}
                horizontal
                keyExtractor={(item, index) =>
                    `${product.id}-${index}`
                }
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedImage(index)}
                    >
                        <Image
                            source={{ uri: item }}
                            style={styles.thumbnail}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    mainImage: {
        width: '100%',
        height: 300,
    },
    thumbnail: {
        width: 100,
        height: 100,
        margin: 10,
    }
})