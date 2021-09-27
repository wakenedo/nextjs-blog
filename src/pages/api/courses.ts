import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const courses = [
        {id: 1, name: 'Next.js com Typescript'},
        {id: 1, name: 'React.js com Typescript'},
        {id: 1, name: 'Node.js com Typescript'},
        {id: 1, name: 'SASS'},
        {id: 1, name: 'Styled-Components'},
    ];

    return response.json(courses);
};
