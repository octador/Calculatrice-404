import * as React from "react";
import Button from "./Button";
import { View, Text, FlatList } from "react-native";
import { Styles } from "../components/styles/GlobalStyles";
import { myColors } from "../components/styles/Color";

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState<number | null>(null);
    const [memoryResult, setMemoryResult] = React.useState<number | null>(null);
    const [previousCalculations, setPreviousCalculations] = React.useState<string[]>([]); // Ajout de l'état pour les calculs précédents

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
        setResult(null);
    };

    const getResult = () => {
        let calculatedResult: number;
        switch (operation) {
            case '+':
                calculatedResult = parseInt(secondNumber) + parseInt(firstNumber);
                break;
            case '-':
                calculatedResult = parseInt(secondNumber) - parseInt(firstNumber);
                break;
            case '*':
                calculatedResult = parseInt(secondNumber) * parseInt(firstNumber);
                break;
            case '/':
                calculatedResult = parseInt(secondNumber) / parseInt(firstNumber);
                break;
            default:
                calculatedResult = 0;
                break;
        }
        clear();
        setResult(calculatedResult);
        const calculation = `${secondNumber} ${operation} ${firstNumber} = ${calculatedResult}`;
        setPreviousCalculations([calculation, ...previousCalculations]); // Ajout du calcul aux calculs précédents
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text
                    style={result < 99999 ? [Styles.screenFirstNumber, { color: myColors.result }] : [Styles.screenFirstNumber, { color: myColors.result, fontSize: 50 }]}
                >
                    {result?.toString()}
                </Text>
            );
        }

        if (firstNumber && firstNumber.length < 6) {
            return (
                <Text style={Styles.screenFirstNumber}>
                    {firstNumber}
                </Text>
            );
        }

        if (firstNumber === '') {
            return (
                <Text style={Styles.screenFirstNumber}>
                    {"0"}
                </Text>
            );
        }

        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>
                        {operation}
                    </Text>
                </Text>
                {firstNumberDisplay()}
            </View>

            <FlatList
                data={previousCalculations}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}

            />

            <View style={Styles.row}>
                <Button title="C" isGray onPress={() => clear()} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
            </View>

            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="*" isBlue onPress={() => handleOperationPress("*")} />
            </View>

            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>

            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>

            <View style={Styles.row}>
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    );
}