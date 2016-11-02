'use strict'

const {zerofill_decimal, zerofill_integer} = require('./utils')

module.exports = class Product{

	constructor(name='', amount=0, tasa=0, price=0, discount=0){
		this.name = name
		this.amount = Math.floor(amount)
		this.tasa = tasa
		this.price = price
		this.discount = discount
	}

	parse_tasa(){
		if( this.tasa == 0){
				return " "
		} else if(this.tasa == 1){
				return "!"
		} else if(this.tasa == 2){
				return "\""
		} else if( this.tasa == 3){
				return "3"
		}
	}

	string_output(){
		let product_line = [
			this.parse_tasa(),
			zerofill_decimal(this.price, 10),
			zerofill_integer(this.amount, 5),
			"000",
			this.name
		].join('')
		if (this.discount > 0){
			return product_line + "\n" + zerofill_decimal(this.discount, 9)
		} else {
			return product_line
		}
	}

	test_string_output(){
		// Attributes to export
		let output_array = [
				this.name,
				this.amount.toString(),
				`$${this.price.toFixed(2)}`
		]

		// Add discount if it exists
		if(this.discount > 0){
			output_array.push("-" + this.discount.toString())
		}

		return output_array.join(' ')
	}

}
