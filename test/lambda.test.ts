import {onConnectFunction, onDisconnectFunction, sendMessageFunction} from "../src/lambdas";
import {APIGatewayProxyHandler} from "aws-lambda";

describe('lambdas', () => {
    describe('onConnectFunction', () => {
        it('executes successfully', async () => {
            const result = await onConnectFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'Connected.'
            });
        });
    });

    describe('onDisconnectFunction', () => {
        it('executes successfully', async () => {
            const result = await onDisconnectFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'Disconnected.'
            });
        });
    });

    describe('sendMessageFunction', () => {
        it('executes successfully', async () => {
            const result = await sendMessageFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'No Data sent.'
            });
        });
    });
});

const getParams = (): Parameters<APIGatewayProxyHandler>  => [] as unknown as Parameters<APIGatewayProxyHandler>;
