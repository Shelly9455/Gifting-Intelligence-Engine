import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-xl font-semibold text-gray-900">Onboarding</Text>
        <Text className="mt-2 text-center text-sm text-gray-500">
          Placeholder route for the onboarding flow group. Screens migrated in
          Phase 6.
        </Text>
      </View>
    </SafeAreaView>
  );
}
