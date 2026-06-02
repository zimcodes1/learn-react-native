import { Platform, Text, View } from "react-native";

export default function Index() {
	return (
		<View>
			<Text>Welocme to Macrozone!</Text>
			<Text>Running on: {Platform.OS}</Text>
		</View>
	);
}
