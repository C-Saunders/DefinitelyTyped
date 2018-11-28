import { serverless } from 'probot__serverless-gcf'
import { Application, Context } from 'probot'

const myFn = (app: Application) => {
  app.on('issues.opened', async (context: Context) => {
    context.log(context.payload)
  })
}

const wrappedFn = serverless(myFn)
