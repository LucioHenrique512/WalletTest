require('react-native-reanimated').setUpTests();

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  })),
}));

jest.mock('react-native-text-input-mask', () => ({
  default: jest.fn(),
}))
