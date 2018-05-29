import { Time } from "@angular/common";

export class Ticket {
    id: number;
    lastModified: Time;
    resolved: boolean;
    type: string;
    title: string;
    description: string;
}