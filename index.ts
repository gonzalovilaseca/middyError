import middy from '@middy/core'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'

const lambdaHandler = () => {
  return {}
}

export const handler = middy()
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .handler(lambdaHandler)

// invokes the handler
const event = {
  headers: {
    'Content-Type': 'application/json'
    // It is important that the request has the proper content type.
  },
  body: JSON.stringify({ foo: 'bar' })
}
