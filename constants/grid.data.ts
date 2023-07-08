export const gridData = [
    { 
        property: 'display', 
        values: ['grid', 'inline-grid', 'subgrid'] 
    },
    { 
        property: 'grid-template-columns', 
        values: ['100px 50px 100px', '50px 1fr 50px', 'repeat(3, 80px)'] 
    },
    { 
        property: 'grid-template-rows', 
        values: ['50px 35px 50px', '47px 1fr 47px', 'repeat(3, 45px)'] 
    },
    { 
        property: 'grid-template-areas', 
        values: ['«x x x» «y z z» «y z z»', '«y y x» «y y z» «y y z»', '«x x .» «. y y» «z z .»'] 
    },
    { 
        property: 'gap', 
        values: ['5px', '5px 20px', '5%', '1em', 'calc(5% + 5px)', 'normal'] 
    },
    { 
        property: 'justify-items', 
        values: ['start', 'end', 'center', 'stretch'] 
    },
    { 
        property: 'align-items', 
        values: ['start', 'end', 'center', 'stretch'] 
    },
    { 
        property: 'justify-content', 
        values: ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'] 
    },
    { 
        property: 'align-content', 
        values: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'] 
    },
    { 
        property: 'grid-auto-flow', 
        values: ['row', 'column', 'dense'] 
    },
    { 
        property: 'justify-self', 
        values: ['start', 'end', 'center', 'stretch'] 
    },
    { 
        property: 'align-self', 
        values: ['start', 'end', 'center', 'stretch'] 
    },
]