import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import mathIcon from '../../assets/mathIcon.png';

export default function Category() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Categorias</Text>
                <Text style={styles.headerCountCourse}>1 cursos</Text>
            </View>

            <View style={styles.courseContainer}>
                <TouchableOpacity style={styles.courseButton}>
                    <Image style={styles.courseImage} source={mathIcon} />
                    <Text style={styles.courseTitle}>Matemática</Text>
                    <Text style={styles.courseCountLessons}>16 aulas</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EDF5',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },

    // Header styles
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: "Rubik_400Regular",
        fontSize: 22,
        color: "#3D3D4C",
    },
    headerCountCourse: {
        fontFamily: "Roboto_400Regular",
        fontSize: 15,
        color: "#A0A0B2",
    },

    // Course styles
    courseContainer: {
        flexDirection: "row",
        flexWrap: "wrap",

        marginTop: 14,
        marginBottom: 20,
        padding: 10,

        alignItems: "center",
        justifyContent: "space-between",
    },
    courseButton: {
        width: 156,
        height: 172,
        backgroundColor: "#FFF",
        borderRadius: 16,
        marginBottom: 18,

        paddingLeft: 25,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    courseImage: {
        width: 64,
        height: 64,
        marginBottom: 24,
    },
    courseTitle: {
        fontFamily: "Rubik_400Regular",
        fontSize: 18,
        color: "#6C6C80",
    },
    courseCountLessons: {
        fontFamily: "Roboto_400Regular",
        fontSize: 12,
        color: "#C4C4D1",
    }
});