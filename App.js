import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  Dimensions
} from 'react-native';
import { pilots } from './pilots';

const { width } = Dimensions.get('window');

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPilot = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pilots.length);
  };

  const prevPilot = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pilots.length) % pilots.length);
  };

  const selectPilot = (index) => {
    setCurrentIndex(index);
  };

  const currentPilot = pilots[currentIndex];

  // Helper function to render stars
  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      
      {/* Header F1 style */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SUPER TRUNFO</Text>
        <View style={styles.headerSubtitleContainer}>
          <View style={styles.headerLine} />
          <Text style={styles.headerSubtitle}>FÓRMULA 1</Text>
          <View style={styles.headerLine} />
        </View>
      </View>

      {/* Quick Selector Bar */}
      <View style={styles.selectorContainer}>
        {pilots.map((pilot, index) => {
          const lastName = pilot.name.split(' ').pop();
          const isSelected = currentIndex === index;
          return (
            <TouchableOpacity
              key={pilot.id}
              style={[
                styles.selectorButton,
                isSelected && { borderColor: pilot.color, backgroundColor: '#1A1A1A' }
              ]}
              onPress={() => selectPilot(index)}
            >
              <Text 
                style={[
                  styles.selectorText, 
                  isSelected && { color: pilot.color, fontWeight: 'bold' }
                ]}
              >
                {lastName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Collectible Card Container */}
        <View style={[styles.card, { borderColor: currentPilot.color }]}>
          {/* Card Header with Pilot Name and Flag */}
          <View style={[styles.cardHeader, { backgroundColor: currentPilot.color }]}>
            <View>
              <Text style={styles.cardCategory}>F1 PILOTOS</Text>
              <Text style={[styles.cardTitle, { color: currentPilot.textColor }]}>
                {currentPilot.name.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.cardFlag}>{currentPilot.country}</Text>
          </View>

          {/* Pilot Image and Super Trunfo Card Badge */}
          <View style={styles.imageContainer}>
            <Image source={currentPilot.image} style={styles.image} resizeMode="cover" />
            <View style={[styles.cardBadge, { backgroundColor: currentPilot.color }]}>
              <Text style={[styles.cardBadgeText, { color: currentPilot.textColor }]}>
                A{currentPilot.id}
              </Text>
            </View>
          </View>

          {/* Card statistics / content */}
          <View style={styles.cardBody}>
            {/* Team details */}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>EQUIPE</Text>
              <View style={[styles.teamBadge, { borderColor: currentPilot.color }]}>
                <Text style={styles.teamText}>{currentPilot.team}</Text>
              </View>
            </View>

            {/* Stars rating */}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>CATEGORIA</Text>
              <Text style={styles.starsText}>{renderStars(currentPilot.stars)}</Text>
            </View>

            <View style={styles.divider} />

            {/* Biography */}
            <Text style={styles.descriptionLabel}>BIOGRAFIA</Text>
            <Text style={styles.descriptionText}>{currentPilot.description}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Panel */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton} onPress={prevPilot}>
          <Text style={styles.navButtonText}>◀ ANTERIOR</Text>
        </TouchableOpacity>
        
        <View style={styles.pageIndicatorContainer}>
          <Text style={styles.pageIndicatorText}>
            {currentIndex + 1} de {pilots.length}
          </Text>
        </View>

        <TouchableOpacity style={styles.navButton} onPress={nextPilot}>
          <Text style={styles.navButtonText}>PRÓXIMO ▶</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginVertical: 15,
  },
  headerTitle: {
    color: '#FF1801', // F1 Racing Red
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  headerSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginTop: 2,
  },
  headerLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#333',
  },
  headerSubtitle: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 4,
    marginHorizontal: 10,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  selectorButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#333',
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  selectorText: {
    color: '#666',
    fontSize: 10,
    fontWeight: '600',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    width: width * 0.85,
    maxWidth: 360,
    borderRadius: 20,
    borderWidth: 4,
    backgroundColor: '#151515',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  cardCategory: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  cardFlag: {
    fontSize: 22,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#1E1E1E',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  cardBadgeText: {
    fontSize: 12,
    fontWeight: '900',
  },
  cardBody: {
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  infoLabel: {
    color: '#888',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  teamBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    borderWidth: 1,
  },
  teamText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '700',
  },
  starsText: {
    fontSize: 14,
    letterSpacing: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#262626',
    marginVertical: 12,
  },
  descriptionLabel: {
    color: '#FF1801',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 5,
  },
  descriptionText: {
    color: '#CCC',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 20,
  },
  navButton: {
    backgroundColor: '#FF1801',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#FF1801',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  navButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  pageIndicatorContainer: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  pageIndicatorText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
