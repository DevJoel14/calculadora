import React from 'react'
import { Button, Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/style';
import { CalculadoraButtom } from '../components/CalculadoraButtom';

export const CalculadoraCreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingBottom: 20, paddingVertical: 20 }}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>
            <View style={styles.row}>
                <CalculadoraButtom label={"C"} color={colors.ligthGray} />
                <CalculadoraButtom label={"+/-"} color={colors.ligthGray} />
                <CalculadoraButtom label={"del"} color={colors.ligthGray} />
                <CalculadoraButtom label={"/"} color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculadoraButtom label={"7"} />
                <CalculadoraButtom label={"8"} />
                <CalculadoraButtom label={"9"} />
                <CalculadoraButtom label={"x"} color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculadoraButtom label={"4"} />
                <CalculadoraButtom label={"5"} />
                <CalculadoraButtom label={"6"} />
                <CalculadoraButtom label={"-"} color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculadoraButtom label={"1"} />
                <CalculadoraButtom label={"2"} />
                <CalculadoraButtom label={"3"} />
                <CalculadoraButtom label={"+"} color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculadoraButtom label={"0"} doubleSize />
                <CalculadoraButtom label={"."} />
                <CalculadoraButtom label={"="} color={colors.orange} />
            </View>
        </View>
    )
}
