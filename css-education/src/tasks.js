const tasks = [
    {
        id: 0,
        description: "Move the frog to the center.",
        answer: "justify-content: center",
        lines: 5,
        properties: 'justify-center',
        content: 'display: flex; align-items: center;',
        flag: 'absolute w-full flex justify-center items-center top-1/2 transform -translate-y-1/2'
    },
    {
        id: 1,
        description: "Move the frog to the end.",
        answer: "justify-content: end",
        lines: 5,
        properties: 'justify-end',
        content: 'display: flex; align-items: center;',
        flag: 'absolute w-full flex justify-end items-center top-1/2 transform -translate-y-1/2'
    }
];

export default tasks;