export const flexData = [
    { 
        property: 'display', 
        values: ['flex', 'inline-flex'],
        styles: {
            parent: [
                {main: true},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'flex-direction',
        values: ['row', 'row-reverse', 'column', 'column-reverse'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'flex-wrap', 
        values: ['nowrap', 'wrap', 'wrap-reverse'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'align-items', value: 'flex-start', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [
                {style: 'width', value: '40%', main: false},
            ],
            childActive: []
        }
    },
    { 
        property: 'flex-flow', 
        values: ['row nowrap', 'column-reverse', 'column wrap', 'row-reverse wrap-reverse'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [
                {style: 'width', value: '40%', main: false},
                {style: 'height', value: '40%', main: false},
            ],
            childActive: []
        }
    },
    { 
        property: 'order', 
        values: ['-1', '0', '1'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'align-items', value: 'flex-start', main: false},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: [
                {main: true},
            ]
        }
    },
    { 
        property: 'justify-content', 
        values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'align-items', 
        values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: []
        }
    },
    { 
        property: 'align-self', 
        values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: [
                {main: true},
            ]
        }
    },
    { 
        property: 'align-content', 
        values: ['flex-stat', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'flex-wrap', value: 'wrap', main: false},
                {main: true},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: [
                {style: 'width', value: '30%', main: false},
            ]
        }
    },
    { 
        property: 'flex-grow', 
        values: ['0', '1'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: [
                {main: true},
            ]
        }
    },
    { 
        property: 'flex-shrink', 
        values: ['0', '1'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'height', value: '100%', main: false},
            ],
            child: [
                {style: 'width', value: '40%', main: false},
            ],
            childActive: [
                {main: true},
            ]
        }
    },
    { 
        property: 'flex-basis', 
        values: ['30%', '50%', 'content'],
        styles: {
            parent: [
                {style: 'display', value: 'flex', main: false},
                {style: 'flex-wrap', value: 'wrap', main: false},
                {style: 'align-content', value: 'center', main: false},
                {style: 'height', value: '100%', main: false},
            ],
            child: [],
            childActive: [
                {main: true},
            ]
        }
    },
]