import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

//Styles the rows
export default function Row({ children }) {
    return <View style={styles.row}>{children}</View>;
}

//Creates the rows
Row.propTypes = {
    children: PropTypes.node.isRequired,
};
