import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('All'), 2500)
  }, [])

  return (
    <View
      style={styles.body}
    >
      <View
        style={styles.section}
      >
        <View
          style={styles.container}
        >
          <Text
            style={styles.heading}
          >VIDLY Todo App</Text>
        </View>
      </View>
      <View
        style={styles.footer}
      >
        <Text
          style={styles.footerText}
        >Help</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  section: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  heading: {
    color: '#212529',
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 20,
    color: '#212529',
    fontFamily: 'Poppins-SemiBold',
  },
})

export default Home