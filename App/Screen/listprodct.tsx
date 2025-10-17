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
      id_product: 1,
      title: 'Webing Safety',
      deskripsi: 'Webing berkualitas tinggi untuk keselamatan kerja di ketinggian. Terbuat dari material kuat dan tahan lama.',
      harga: 'Rp 45.000',
      stock: 'Tersedia',
      created_at: '2025-10-16',
    },
    {
      id_product: 2,
      title: 'Pengaman Telinga',
      deskripsi: 'Earplug dan earmuff untuk melindungi pendengaran dari kebisingan di area kerja.',
      harga: 'Rp 35.000',
      stock: 'Tersedia',
      created_at: '2025-10-16',
    },
    {
      id_product: 3,
      title: 'Sepatu Safety',
      deskripsi: 'Sepatu safety dengan steel toe cap untuk perlindungan maksimal kaki pekerja.',
      harga: 'Rp 250.000',
      stock: 'Tersedia',
      created_at: '2025-10-16',
    },
    {
      id_product: 4,
      title: 'Helm Safety',
      deskripsi: 'Helm pelindung kepala dengan standar keselamatan internasional.',
      harga: 'Rp 75.000',
      stock: 'Tersedia',
      created_at: '2025-10-16',
    },
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
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id_product}
              style={styles.productCard}
              onPress={() => handleProductPress(product)}
              activeOpacity={0.7}
            >
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.title}</Text>
                <Text style={styles.productPrice}>{product.harga}</Text>
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
                <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                <Text style={styles.modalDescription}>{selectedProduct.deskripsi}</Text>
                <Text style={styles.modalPrice}>Harga: {selectedProduct.harga}</Text>
                <Text style={styles.modalCreatedAt}>Tanggal Dibuat: {selectedProduct.created_at}</Text>
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
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  placeholder: { width: 40 },
  content: { flex: 1 },
  productsContainer: { padding: 16 },
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
  productInfo: { flex: 1, justifyContent: 'center' },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  productPrice: { fontSize: 14, fontWeight: 'bold', color: '#4A90E2', marginBottom: 6 },
  stockBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  stockText: { fontSize: 11, color: '#4CAF50', fontWeight: '600' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8, textAlign: 'center' },
  modalDescription: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 20, marginBottom: 12 },
  modalPrice: { fontSize: 16, fontWeight: 'bold', color: '#4A90E2', marginBottom: 4 },
  modalCreatedAt: { fontSize: 12, color: '#888', marginBottom: 8 },
  modalStockBadge: { backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginBottom: 20 },
  modalStockText: { fontSize: 12, color: '#4CAF50', fontWeight: '600' },
  closeButton: { backgroundColor: '#4A90E2', paddingHorizontal: 32, paddingVertical: 12, borderRadius: 12, width: '100%', alignItems: 'center' },
  closeButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});

export default ProductListScreen;
