export type Messages = {
    id: number;
    response_message: string;
    response_time: string;
    request_message: string;
    request_time: string;
    conversation_id: number;
}

export type User = {
    id: number;
    username: string;
}

export type Conversations = {
    id: number;
    starting_date: string;
    ending_date: string;
    user_id: number;
    messages: Messages[];
    user: User;
}
