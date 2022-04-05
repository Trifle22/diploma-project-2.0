export interface PastConference {
    id: number;
    date: number;
    duration: number;
    participants: number;
    participantsList: Participant[];
}

export interface Participant {
    name: string;
    id: number;
}
