import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductListScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { token, email } = route.params || {};
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Webing Safety',
      category: 'Safety Equipment',
      price: 'Rp 45.000',
      description: 'Webing berkualitas tinggi untuk keselamatan kerja di ketinggian. Terbuat dari material kuat dan tahan lama.',
      icon: '🎗️',
      color: '#FF6B6B',
      stock: 'Tersedia'
    },
    {
      id: 2,
      name: 'Pengaman Telinga',
      category: 'Safety Equipment',
      price: 'Rp 35.000',
      description: 'Earplug dan earmuff untuk melindungi pendengaran dari kebisingan di area kerja.',
      icon: '🎧',
      color: '#4ECDC4',
      stock: 'Tersedia'
    },
    {
      id: 3,
      name: 'Sepatu Safety',
      category: 'Safety Footwear',
      price: 'Rp 250.000',
      description: 'Sepatu safety dengan steel toe cap untuk perlindungan maksimal kaki pekerja.',
      icon: '👷',
      color: '#FFE66D',
      stock: 'Tersedia'
    },
    {
      id: 4,
      name: 'Helm Safety',
      category: 'Safety Equipment',
      price: 'Rp 75.000',
      description: 'Helm pelindung kepala dengan standar keselamatan internasional.',
      icon: '⛑️',
      color: '#95E1D3',
      stock: 'Tersedia'
    },
    {
      id: 5,
      name: 'Sarung Tangan Safety',
      category: 'Safety Equipment',
      price: 'Rp 25.000',
      description: 'Sarung tangan kerja anti slip untuk perlindungan tangan.',
      icon: '🧤',
      color: '#F38181',
      stock: 'Tersedia'
    },
    {
      id: 6,
      name: 'Rompi Safety',
      category: 'Safety Clothing',
      price: 'Rp 55.000',
      description: 'Rompi reflektif untuk visibility tinggi di area kerja.',
      icon: '🦺',
      color: '#AA96DA',
      stock: 'Tersedia'
    }
  ];

  const handleProductPress = (product: any) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produk GoSave</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>🛡️ Safety Equipment</Text>
          <Text style={styles.bannerSubtitle}>Perlengkapan Keselamatan Kerja Berkualitas</Text>
        </View>

        <View style={styles.productsContainer}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => handleProductPress(product)}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, { backgroundColor: product.color }]}>
                <Text style={styles.productIcon}>{product.icon}</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <View style={styles.stockBadge}>
                  <Text style={styles.stockText}>✓ {product.stock}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal Detail Product */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <View style={[styles.modalIconContainer, { backgroundColor: selectedProduct.color }]}>
                  <Text style={styles.modalIcon}>{selectedProduct.icon}</Text>
                </View>
                <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
                <Text style={styles.modalCategory}>{selectedProduct.category}</Text>
                <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
                <View style={styles.modalStockBadge}>
                  <Text style={styles.modalStockText}>✓ {selectedProduct.stock}</Text>
                </View>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Tutup</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  banner: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  productsContainer: {
    padding: 16,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  productIcon: {
    fontSize: 32,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 6,
  },
  stockBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  stockText: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    fontSize: 48,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  modalCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  modalStockBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 20,
  },
  modalStockText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  closeButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;