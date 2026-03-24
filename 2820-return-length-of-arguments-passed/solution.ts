type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let result = 0

    args.forEach(() => result++)

    return result
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
