import { Text, View, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from '../redux/slice/counter';

function Counter() {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	return (
		<View
			style={{
				width: '90%',
				margin: 'auto',
				alignItems: 'center',
			}}
		>
			<Button
				title={'increment'}
				color="#06D6A0"
				onPress={() => dispatch(inc())}
			/>
			<Text
				style={{
					marginTop: 20,
					marginBottom: 20,
					fontSize: 40,
				}}
			>
				{count}
			</Text>
			<Button
				title={'decrement'}
				color="#EF476F"
				onPress={() => dispatch(dec())}
			/>
		</View>
	);
}

export default Counter;
