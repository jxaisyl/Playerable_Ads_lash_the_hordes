export class Analytics {
    private totalTime = 0;
    private minutesInGame = -1;
    private gamesPerSession = 0;

    public update(deltaTime: number): void {
        this.totalTime += deltaTime;
    }

    public gameStart(): void {
        ++this.gamesPerSession;
    }

    public gameEnd(time: number): void {
        // no-op
    }

    public gameExit(time: number): void {
        // no-op
    }

    public goldPerRun(goldEarned: number): void {
        // no-op
    }
}
