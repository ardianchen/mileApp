export default (code, message, res, total, countNotRead) => {
  const response = {}

  if (code) {
    response.code = code
  }

  if (message) {
    response.message = message
  }

  if (res) {
    response.result = res
  }

  if (total >= 0) {
    response.total = total
  }

  if (countNotRead >= 0) {
    response.countNotRead = countNotRead
  }

  return response
}
