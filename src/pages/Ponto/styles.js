import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        backgroundColor: '#f0f0f7',
        // justifyContent: "center"
    },
    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24
    },

    label: {
        color: '#d4c2ff',
        fontFamily: ''
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        // width: '48%'
        width: '30%'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    inputTextArea: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: '',
        fontSize: 16,
    }
})

export default styles