import { generateDeck } from './cards';
import {groupBy, shuffleArray, safeCopy} from './utils';

test('safeCopy utils test', () => {
    let nestedObject = [
        {
            a: 1
        },
        {
            b: 2
        }
    ];

    let copyOfObject = safeCopy(nestedObject);

    copyOfObject[0] = {
        c: 3
    };

    expect(nestedObject).toStrictEqual([
        {
            a: 1
        },
        {
            b: 2
        }
    ]);

    expect(copyOfObject).toStrictEqual([
        {
            c: 3
        },
        {
            b: 2
        }
    ]);
});


test('shuffleArray utils test', () => {
    let array = [1,2,3,4,5,6,7];

    let result = shuffleArray(array);
    let sortedResult = result.sort();

    expect(result.length).toStrictEqual(7);
    expect(sortedResult).toStrictEqual(array);
});
