import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {
	// constructor () {
	// 	super()

	// 	this.state = {
	// 		transaction: [],
	// 		description: '',
	// 		amount: ''
	// 	}

	// 	this.addAmount = this.addAmount.bind(this)
	// }

	state = {
		transactions: [],
		description: '',
		amount: ''
	}

	/* 
		Метод создаёт запись для истории расходов.
		Принимает флаг: true - доход, false - расход.
	*/
	addTransaction = add => {
		const transactions = [...this.state.transactions]

		const transaction = {
			// Генерируем id в зависимости от времени.
			id: `cmr${(+new Date).toString(16)}`,
			description: this.state.description,
			amount: this.state.amount,
			// Флаг доход/расход.
			add
		}

		transactions.push(transaction)

		console.log('transactions: ', transactions);

		this.setState({ transactions })
	}

	// Обработчик изменения поля суммы в форме добавления новой операции.
	addAmount = e => {
		this.setState({amount: e.target.value})
	}

	/* 
		Обработчик изменения поля наименования операции 
		в форме добавления новой операции.
	*/
	addDescription = e => {
		this.setState({description: e.target.value})
	}

	render () {
		console.log('this.state: ', this.state);

		return (
			<>
				<header>
					<h1>Кошелек</h1>
					<h2>Калькулятор расходов</h2>
				</header>
	
				<main>
					<div className="container">
						<Total />
						<History />
						<Operation 
							addTransaction={this.addTransaction}
							addAmount={this.addAmount}
							addDescription={this.addDescription}
						/>
					</div>
				</main>
			</>
		);
	}
}

export default App;
