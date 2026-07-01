import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LandingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-3xl font-bold text-gray-900">
          Gifting Intelligence Engine
        </Text>
        <Text className="mt-3 text-center text-base text-gray-500">
          Phase 1 foundation — Expo Router, NativeWind, Zustand, and the layered
          architecture skeleton.
        </Text>
        <Link
          href="/(onboarding)/onboarding"
          className="mt-8 text-lg font-semibold text-blue-600"
        >
          Start →
        </Link>
      </View>
    </SafeAreaView>
  );
}
