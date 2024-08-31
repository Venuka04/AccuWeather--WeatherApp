import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const ChatMessage = ({ text, timestamp, isUser }) => {
    return (
        <View
            style={[
                styles.messageContainer,
                { alignSelf: isUser ? "flex-start" : "flex-end", backgroundColor: isUser ? Colors.primary : Colors.gray },
            ]}
        >
            <Text style={styles.messageText}>{text}</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        backgroundColor: Colors.gray,
        borderRadius: 10,
        marginVertical: 5,
        maxWidth: "85%",
    },
    messageText: {
        fontSize: 16,
    },
    timestamp: {
        fontSize: 12,
        color: Colors.medium,
        textAlign: "right",
    },
});

export default ChatMessage;
