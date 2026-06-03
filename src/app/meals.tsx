import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function MealsScreen() {
	return (
		<ScrollView style={globalStyles.container}>
			<Text style={globalStyles.title}>Meals</Text>
			<Link href="/" style={{ color: "#1736d1" }}>
				Home
			</Link>
		</ScrollView>
	);
}
