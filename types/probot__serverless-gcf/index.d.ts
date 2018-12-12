// Type definitions for @probot/serverless-gcf 0.2
// Project: https://github.com/probot/serverless-gcf
// Definitions by: Charlie Saunders <https://github.com/C-Saunders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express-serve-static-core" />

declare module '@probot/serverless-gcf'

import * as core from "express-serve-static-core";
import { ApplicationFunction } from 'probot'

export function serverless(appFn: ApplicationFunction | String): (request: core.Request, response: core.Response) => Promise<any>
