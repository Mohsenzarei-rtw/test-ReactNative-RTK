import { View } from 'react-native';
import Counter from '../components/Counter';

function Main() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<Counter />
		</View>
	);
}

export default Main;
