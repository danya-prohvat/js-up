export const gridData = [
    { 
        property: 'display', 
        values: ['grid', 'inline-grid', 'subgrid'],
        styles: {
            parent: [
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'grid-template-columns', 
        values: ['100px 50px 100px', '50px 1fr 50px', 'repeat(3, 80px)'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'grid-template-rows', 
        values: ['50px 35px 50px', '47px 1fr 47px', 'repeat(3, 45px)'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'grid-template-areas', 
        values: ['«x x x» «y z z» «y z z»', '«y y x» «y y z» «y y z»', '«x x .» «. y y» «z z .»'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'gap', 
        values: ['5px', '5px 20px', '5%', '1em', 'calc(5% + 5px)', 'normal'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'justify-items', 
        values: ['start', 'end', 'center', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'align-items', 
        values: ['start', 'end', 'center', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'justify-content', 
        values: ['start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'align-content', 
        values: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'grid-auto-flow', 
        values: ['row', 'column', 'dense'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'justify-self', 
        values: ['start', 'end', 'center', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
            ],
            child: [
                {main: true},
            ],
            childActive: []
        }
    },
    { 
        property: 'align-self', 
        values: ['start', 'end', 'center', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'grid', main: false},
            ],
            child: [
                {main: true},
            ],
            childActive: []
        }
    },
]