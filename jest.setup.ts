jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  })),
}));
