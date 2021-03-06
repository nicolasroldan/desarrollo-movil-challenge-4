import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Card extends Component {
  state = {
    soloNombre: false,
  }

  handlePress = () => {
    this.setState({ soloNombre: !this.state.soloNombre })
  }

  render() {
    const { nombre, apellido } = this.props
    const { soloNombre } = this.state

    const texto = soloNombre ? nombre : `${nombre} ${apellido}`

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{texto}</Text>
        <Button title={soloNombre ? 'Mostrar nombre completo' : 'Mostrar sólo nombre'} onPress={this.handlePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },

  texto: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
})
