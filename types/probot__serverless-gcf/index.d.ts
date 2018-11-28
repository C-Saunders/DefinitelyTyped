// Type definitions for @probot/serverless-gcf 0.2
// Project: https://github.com/probot/serverless-gcf
// Definitions by: Charlie Saunders <https://github.com/C-Saunders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare module '@probot/serverless-gcf'

import { Request, Response } from 'express'
import { ApplicationFunction } from 'probot'

export function serverless(appFn: ApplicationFunction | String): (request: Request, response: Response) => Promise<any>
