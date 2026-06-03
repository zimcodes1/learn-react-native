import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { globalStyles } from "../styles/global";

export default function Index() {
	return (
		<ScrollView style={globalStyles.container}>
			<Text style={globalStyles.title}>Macrozone</Text>
			<HomeHeader></HomeHeader>
		</ScrollView>
	);
}
