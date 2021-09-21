export type Greeting = `Hello ${string}`;

export async function handler(): Promise<Greeting> {
    return 'Hello World!';
}
