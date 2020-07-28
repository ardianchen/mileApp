import Validator from 'validatorjs'

export const post = ({ body }) => {
  const rules = {
    transaction_id: 'required',
    customer_name: 'size:19',
    koli_data: 'array',
    transaction_amount: 'min:1|max:20'
  }
  return new Validator(body, rules)
}
