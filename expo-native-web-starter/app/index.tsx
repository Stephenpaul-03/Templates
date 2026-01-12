import { useTheme } from '@/src/context/ThemeContext';
import { Button, Center, Text, VStack } from '@gluestack-ui/themed';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Center flex={1} bg={theme === 'dark' ? '$backgroundDark900' : '$backgroundLight50'}>
      <VStack space="lg" alignItems="center">
        <Text 
          size="xl" 
          color={theme === 'dark' ? '$textLight50' : '$textDark900'} 
          fontWeight="$bold"
        >
          Expo Router + Gluestack works
        </Text>

        <Button 
          onPress={toggleTheme}
          bg={theme === 'dark' ? '$primary500' : '$primary400'}
        >
          <Text color="$textLight50">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Text>
        </Button>
      </VStack>
    </Center>
  );
}
