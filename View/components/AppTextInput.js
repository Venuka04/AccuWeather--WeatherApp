import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../constants/colors'
import defaultStyles from '../constants/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.medium}
                style={styles.icon} />}
            <TextInput
                placeholderTextColor={colors.medium}
                style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        borderRadius: 20,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;