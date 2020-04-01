import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
    const hours = Math.floor(time / 3600);
    const mins = Math.floor((time - hours * 3600) / 60);
    const secs = time - (hours * 3600) - (mins * 60);

    return { 
        hours: hours, 
        mins: formatNumber(mins), 
        secs: formatNumber(secs) 
    };
}

export default class Timer extends Component {
    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timerText}>{`${hours}:${mins}:${secs}`}</Text>
                <TouchableOpacity onPress={this.toggle} style={styles.button}>
                    <Text>{isPlaying ? 'Pause' : 'Start'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    timerText: {
        color: 'black',
        fontSize: 20
    },
    button: {

    },
    buttonText: {

    }
});