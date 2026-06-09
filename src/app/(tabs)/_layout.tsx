import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.background,
					borderTopColor: colors.surface,
				},
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.textSecondary,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={"home"} color={color} size={size} />
					),
				}}
			></Tabs.Screen>

			<Tabs.Screen
				name="add-meals"
				options={{
					title: "Add Meals",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={"add-circle"} color={color} size={size} />
					),
				}}
			></Tabs.Screen>

			<Tabs.Screen
				name="meals"
				options={{
					title: "Meals",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={"menu"} color={color} size={size} />
					),
				}}
			></Tabs.Screen>
		</Tabs>
	);
}
