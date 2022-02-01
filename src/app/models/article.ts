export class Article {
    title: string = '';
    link: string = '';
    votes: number = 0;

    constructor(title: string, link:string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes ?? 0;
    }

    addVote(): void {
        this.votes++;
    }

    removeVote(): void {
        this.votes--;
    }

    domain(): string | null {
        try {
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}