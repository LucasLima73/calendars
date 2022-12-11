import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import { Agenda } from 'react-native-calendars';
import Navigation from '../navigation';


const timeToString = (time: string | number | Date) => {

    const date = new Date(time);

    return date.toISOString().split('T')[0];

}


const App = () => {
  const navigation = useNavigation();


    const [items, setItems] = React.useState({});


    const loadItems = (day: { timestamp: number; }) => {


        setTimeout(() => {

            for (let i = -15; i < 85; i++) {

                const time = day.timestamp + i * 24 * 60 * 60 * 1000;

                const strTime = timeToString(time);


                if (!items[strTime]) {

                    items[strTime] = [];


                    const numItems = Math.floor(Math.random() * 3 + 1);

                    for (let j = 0; j < numItems; j++) {

                        items[strTime].push({

                            name: 'Item for ' + strTime + ' #' + j,

                            height: Math.max(10, Math.floor(Math.random() * 150)),

                            day: strTime

                        });

                    }

                }

            }

            const newItems = {};

            Object.keys(items).forEach(key => {

                newItems[key] = items[key];

            });

            setItems(newItems);

        }, 1000);

    }


    const renderItem = (item: { name: any}) => {
        return (

            <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate('Modal', {item: item.name})
            
          }
            
            >


                        <View>

                            <Text>{item.name}</Text>

                        </View>

                

            </TouchableOpacity>

        );

    }


    return (

        <View style={styles.container}>

            <Agenda

                items={items}

                loadItemsForMonth={loadItems}

                selected={'2022-07-07'}


                showClosingKnob={true}

                refreshing={false}

                renderItem={renderItem}

            />

            <StatusBar />

        </View>

    );

}


const styles = StyleSheet.create({

    container: {

        flex: 1,

    },

    item: {

        flex: 1,

        borderRadius: 5,

        padding: 10,

        marginRight: 10,

        marginTop: 17

    },

});


export default App;