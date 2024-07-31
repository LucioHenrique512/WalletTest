import { RFPercentage } from 'react-native-responsive-fontsize';
import {render} from '../../utils/testUtils';
import {Text} from './index';

jest.mock('react-native-responsive-fontsize', () => {
  return {RFPercentage: jest.fn().mockReturnValue(50)};
});

describe('Text component', () => {
  it('renders text with default styles', () => {
    const {getByText} = render(<Text>Hello World</Text>);
    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toMatchObject({
      textAlign: 'left',
      fontSize: 50,
      color: '#3F3F3F',
    });
  });

  it('renders text with custom styles', () => {
    const {getByText} = render(
      <Text fontSize="lg" color="darkBlue" textCenter>
        Custom Text
      </Text>,
    );
    const textElement = getByText('Custom Text');

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toMatchObject({
      textAlign: 'center',
      fontSize: 50,
      color: '#142995',
    });
  });
});
