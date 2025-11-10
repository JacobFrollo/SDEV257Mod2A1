import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

//styles the columns
export default function Column({ children }) {
    return <View style={styles.column}>{children}</View>;
}

//Creates the columns
Column.propTypes = {
    children: PropTypes.node.isRequired,
};
