import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.goalInputPanel}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.goalInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsPanel}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color='red'
                            onPress={props.onCancelGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            //onPress={() => props.onAddGoal(enteredGoal)}
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    goalInputPanelX: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    goalInputPanel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goalInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    buttonsPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;