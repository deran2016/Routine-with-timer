import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import SortableList from 'react-native-sortable-list'
import RoutineBox from './RoutineBox';
import RoundButton from './RoundButton';

const window = Dimensions.get('window');

let data = {
    test1: {
        image: 'https://placekitten.com/200/240',
        text: 'Push up'
    },
    test2: {
        image: 'https://placekitten.com/200/201',
        text: 'Drink water'
    }
}

export default class Body extends Component {
    _renderRow = ({data, active}) => {
        return <RoutineBox data={data} active={active}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <SortableList
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    data={data}
                    renderRow={this._renderRow}
                />
                <RoundButton text={"+"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',

        ...Platform.select({
            ios: {
                paddingTop: 20,
            },
        }),
    },

    title: {
        fontSize: 20,
        paddingVertical: 20,
        color: '#999999',
    },

    list: {
        flex: 1,
    },

    contentContainer: {
        width: window.width,

        ...Platform.select({
            ios: {
                paddingHorizontal: 30,
            },

            android: {
                paddingHorizontal: 0,
            }
        })
    },
});