import { ReplaySubject, interval, timer } from 'rxjs';
const defaultConfig = {
    retries: 1,
    interval: 1000,
    maxInterval: 16000,
};
export class ExponentialBackoff {
    constructor(config = defaultConfig) {
        const conf = Object.assign(Object.assign({}, defaultConfig), config);
        this.retries = conf.retries;
        this.interval = conf.interval;
        this.maxInterval = conf.maxInterval;
        this.poller = new ReplaySubject(1);
        this.n = 0;
        this.remainingTries = this.retries + 1;
        this.currInterval = this.interval;
    }
    start() {
        // Reset the shceduler
        if (this.emitter) {
            this.emitter.unsubscribe();
        }
        // Start the Exponential Backoff. All the logic is in iterate()
        this.emitter = timer(0, this.interval).subscribe(() => {
            this.iterate();
        });
        return this.poller;
    }
    iterate() {
        // Emit a new value
        this.n++;
        this.poller.next(this.n);
        // Cancel the previous subscription and reduce the retries
        // If no more retries, then double the interval
        this.emitter.unsubscribe();
        this.remainingTries--;
        if (this.remainingTries === 0) {
            this.remainingTries = this.retries;
            this.currInterval = Math.min(this.currInterval * 2, this.maxInterval);
        }
        this.emitter = interval(this.currInterval).subscribe(() => {
            this.iterate();
        });
    }
    reset() {
        this.n = 0;
        this.currInterval = this.interval;
        this.remainingTries = this.retries + 1;
        this.start();
    }
    stop() {
        if (this.emitter) {
            this.emitter.unsubscribe();
        }
    }
    getPoller() {
        return this.poller;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb25lbnRpYWwtYmFja29mZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvcG9sbGluZy9leHBvbmVudGlhbC1iYWNrb2ZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTcEUsTUFBTSxhQUFhLEdBQWtCO0lBQ25DLE9BQU8sRUFBRSxDQUFDO0lBQ1YsUUFBUSxFQUFFLElBQUk7SUFDZCxXQUFXLEVBQUUsS0FBSztDQUNuQixDQUFDO0FBRUYsTUFBTSxPQUFPLGtCQUFrQjtJQWU3QixZQUFZLFNBQXdCLGFBQWE7UUFDL0MsTUFBTSxJQUFJLG1DQUFRLGFBQWEsR0FBSyxNQUFNLENBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBYSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUs7UUFDVixzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7UUFFRCwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3BELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU8sT0FBTztRQUNiLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekIsMERBQTBEO1FBQzFELCtDQUErQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDeEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24sIFJlcGxheVN1YmplY3QsIGludGVydmFsLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja29mZkNvbmZpZyB7XG4gIHJldHJpZXM/OiBudW1iZXI7XG4gIGludGVydmFsPzogbnVtYmVyO1xuICBtYXhJbnRlcnZhbD86IG51bWJlcjtcbn1cblxuY29uc3QgZGVmYXVsdENvbmZpZzogQmFja29mZkNvbmZpZyA9IHtcbiAgcmV0cmllczogMSxcbiAgaW50ZXJ2YWw6IDEwMDAsXG4gIG1heEludGVydmFsOiAxNjAwMCxcbn07XG5cbmV4cG9ydCBjbGFzcyBFeHBvbmVudGlhbEJhY2tvZmYge1xuICAvLyBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHdpbGwgaGF2ZSBhbiBPYnNlcnZhYmxlIChwb2xsZXIpIHRoYXRcbiAgLy8gd2lsbCBlbWl0IGEgdmFsdWUgd2l0aCBFeHBvbmVudGlhbCBCYWNrb2ZmIG1hbm5lci4gV2UgY2FuIHRoZW4gbWFrZVxuICAvLyBhIHN1YnNjcmlwdGlvbiB0byBpdCBhbmQgYXBwbHkgb3VyIGxvZ2ljXG4gIHByaXZhdGUgcmV0cmllczogbnVtYmVyO1xuICBwcml2YXRlIGludGVydmFsOiBudW1iZXI7XG4gIHByaXZhdGUgbWF4SW50ZXJ2YWw6IG51bWJlcjtcblxuICBwcml2YXRlIGVtaXR0ZXI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwb2xsZXI6IFJlcGxheVN1YmplY3Q8bnVtYmVyPjtcbiAgcHJpdmF0ZSBuOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSByZW1haW5pbmdUcmllczogbnVtYmVyO1xuICBwcml2YXRlIGN1cnJJbnRlcnZhbDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQmFja29mZkNvbmZpZyA9IGRlZmF1bHRDb25maWcpIHtcbiAgICBjb25zdCBjb25mID0geyAuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWcgfTtcblxuICAgIHRoaXMucmV0cmllcyA9IGNvbmYucmV0cmllcztcbiAgICB0aGlzLmludGVydmFsID0gY29uZi5pbnRlcnZhbDtcbiAgICB0aGlzLm1heEludGVydmFsID0gY29uZi5tYXhJbnRlcnZhbDtcblxuICAgIHRoaXMucG9sbGVyID0gbmV3IFJlcGxheVN1YmplY3Q8bnVtYmVyPigxKTtcblxuICAgIHRoaXMubiA9IDA7XG4gICAgdGhpcy5yZW1haW5pbmdUcmllcyA9IHRoaXMucmV0cmllcyArIDE7XG4gICAgdGhpcy5jdXJySW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIC8vIFJlc2V0IHRoZSBzaGNlZHVsZXJcbiAgICBpZiAodGhpcy5lbWl0dGVyKSB7XG4gICAgICB0aGlzLmVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0aGUgRXhwb25lbnRpYWwgQmFja29mZi4gQWxsIHRoZSBsb2dpYyBpcyBpbiBpdGVyYXRlKClcbiAgICB0aGlzLmVtaXR0ZXIgPSB0aW1lcigwLCB0aGlzLmludGVydmFsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5pdGVyYXRlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5wb2xsZXI7XG4gIH1cblxuICBwcml2YXRlIGl0ZXJhdGUoKSB7XG4gICAgLy8gRW1pdCBhIG5ldyB2YWx1ZVxuICAgIHRoaXMubisrO1xuICAgIHRoaXMucG9sbGVyLm5leHQodGhpcy5uKTtcblxuICAgIC8vIENhbmNlbCB0aGUgcHJldmlvdXMgc3Vic2NyaXB0aW9uIGFuZCByZWR1Y2UgdGhlIHJldHJpZXNcbiAgICAvLyBJZiBubyBtb3JlIHJldHJpZXMsIHRoZW4gZG91YmxlIHRoZSBpbnRlcnZhbFxuICAgIHRoaXMuZW1pdHRlci51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucmVtYWluaW5nVHJpZXMtLTtcbiAgICBpZiAodGhpcy5yZW1haW5pbmdUcmllcyA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1haW5pbmdUcmllcyA9IHRoaXMucmV0cmllcztcbiAgICAgIHRoaXMuY3VyckludGVydmFsID0gTWF0aC5taW4odGhpcy5jdXJySW50ZXJ2YWwgKiAyLCB0aGlzLm1heEludGVydmFsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXR0ZXIgPSBpbnRlcnZhbCh0aGlzLmN1cnJJbnRlcnZhbCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuaXRlcmF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMubiA9IDA7XG4gICAgdGhpcy5jdXJySW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xuICAgIHRoaXMucmVtYWluaW5nVHJpZXMgPSB0aGlzLnJldHJpZXMgKyAxO1xuXG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMuZW1pdHRlcikge1xuICAgICAgdGhpcy5lbWl0dGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFBvbGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb2xsZXI7XG4gIH1cbn1cbiJdfQ==