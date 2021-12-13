import { ReplaySubject } from 'rxjs';
export interface BackoffConfig {
    retries?: number;
    interval?: number;
    maxInterval?: number;
}
export declare class ExponentialBackoff {
    private retries;
    private interval;
    private maxInterval;
    private emitter;
    private poller;
    private n;
    private remainingTries;
    private currInterval;
    constructor(config?: BackoffConfig);
    start(): ReplaySubject<number>;
    private iterate;
    reset(): void;
    stop(): void;
    getPoller(): ReplaySubject<number>;
}
//# sourceMappingURL=exponential-backoff.d.ts.map