import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import { Agenda } from 'react-native-calendars';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';


const timeToString = (time: string | number | Date) => {

    const date = new Date(time);

    return date.toISOString().split('T')[0];

}


const App = () => {
  const navigation = useNavigation();


    const [items, setItems] = React.useState<any>({});


    const loadItems = () => {
        

              const item={
                '2012-05-22': [{name: 'item 1 - any js object'}],
                '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
                '2012-05-24': [],
                '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
              }
          
              setItems(item);
    }

    const renderItem = (items: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }) => {

        return (
            <TouchableOpacity style={styles.item}
            onPress={() => navigation.navigate('Modal', {item: items.name})}>
                        <View>
                            <Text>item</Text>
                        </View>
            </TouchableOpacity>

        );

    }
    return (

        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
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
      backgroundColor: '#fff',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },

});


export default App;