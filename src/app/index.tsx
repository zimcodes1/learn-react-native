import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { globalStyles } from "../styles/global";

export default function Index() {
	return (
		<ScrollView style={globalStyles.container}>
			<Text style={globalStyles.title}>Macrozone</Text>
			<HomeHeader />
			<Link href={"/meals"} style={{ fontSize: 18, color: "#007bff" }}>
				Meals
			</Link>
			<Link href={"/add-meals"} style={{ fontSize: 18, color: "#007bff" }}>
				Add +
			</Link>
		</ScrollView>
	);
}
